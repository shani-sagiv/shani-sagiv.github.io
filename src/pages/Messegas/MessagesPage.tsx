import React, { useState, useEffect } from "react";
import { getUserName } from "helpers/localStorage.helpers";
import { put } from "@vercel/blob";

interface MessagesPageProps extends React.HTMLAttributes<HTMLDivElement> {}

export type Message = {
  text: string;
  sender: string;
  timestamp: number;
};

export type MessageList = Message[];

const FILE_NAME = "messages.json";

const MessagesPage: React.FC<MessagesPageProps> = ({}) => {
  const savedName = getUserName();


 async function loadMessages(): Promise<MessageList> {
  try {
    // fetch directly from the blob URL (same path you used in put)
    const res = await fetch(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/_vercel/blob/${FILE_NAME}`);
    if (!res.ok) return [];
    return (await res.json()) as MessageList;
  } catch {
    return [];
  }
}

/**
 * Save a list of messages
 */
 async function saveMessages(messages: MessageList) {
  const { url } = await put(FILE_NAME, JSON.stringify(messages, null, 2), {
    access: "public",
    contentType: "application/json",
  });
  return url; // blob URL
}

/**
 * Append a new message
 */
 async function addMessage(newMessage: Message) {
  const current = await loadMessages();
  current.push(newMessage);
  await saveMessages(current);
}


  

  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  const [sender, setSender] = useState("Me");

  useEffect(() => {
    (async () => {
      const data = await loadMessages();
      setMessages(data);
    })();
  }, []);

  const handleSend = async () => {
    if (!text.trim()) return;

    const newMessage: Message = {
      text,
      sender,
      timestamp: Date.now(),
    };

    const updated = [...messages, newMessage];
    setMessages(updated);
    setText("");

    await saveMessages(updated);
  };

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
}

export default MessagesPage;