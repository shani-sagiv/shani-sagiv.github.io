import React, { useState, useEffect } from "react";
import { put } from "@vercel/blob";
import { getUserName } from "helpers/localStorage.helpers";

export type Message = {
  text: string;
  sender: string;
  timestamp: number;
};

type MessageList = Message[];

const FILE_NAME = "messages.json";
const STORE_BASE =
  "https://6zagtygjzbttu2f9.public.blob.vercel-storage.com";

// ⬇️ token comes from your Vercel env (exposed to client!)
const TOKEN = process.env.REACT_APP_BLOB_TOKEN as string;

const MessagesPage: React.FC = () => {
      const savedName = getUserName();
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [sender, setSender] = useState(savedName || "Anonymous");

  // Load messages from Blob
  async function loadMessages(): Promise<MessageList> {
    try {
      const res = await fetch(`${STORE_BASE}/${FILE_NAME}`, {
        cache: "no-store",
      });
      if (!res.ok) return [];
      return (await res.json()) as MessageList;
    } catch {
      return [];
    }
  }

  // Save updated messages.json to Blob
  async function saveMessages(msgs: MessageList) {
    const { url } = await put(FILE_NAME, JSON.stringify(msgs, null, 2), {
      access: "public",
      contentType: "application/json",
      token: TOKEN,
        allowOverwrite: true, 

    });
    return url;
  }

  // On mount → load existing messages
  useEffect(() => {
    (async () => {
      const data = await loadMessages();
      setMessages(data);
    })();
  }, []);

  // Add new message
  async function handleSend() {
    if (!text.trim()) return;
    const newMessage: Message = { text, sender, timestamp: Date.now() };
    const updated = [...messages, newMessage];
    setMessages(updated);
    setText("");
    await saveMessages(updated);
  }

  return (
    <div style={{ maxWidth: 400, margin: "0 auto", fontFamily: "sans-serif" }}>
      <h2>Messages</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: 10,
          height: 200,
          overflowY: "auto",
          marginBottom: 10,
        }}
      >
        {messages.map((m) => (
          <div key={m.timestamp}>
            <strong>{m.sender}: </strong>
            {m.text}
          </div>
        ))}
      </div>
      <input
        style={{ width: "70%" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type a message..."
      />
      <button style={{ width: "25%", marginLeft: 5 }} onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

export default MessagesPage;
