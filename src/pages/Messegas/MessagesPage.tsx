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


const MessagesPage: React.FC<MessagesPageProps> = ({}) => {
  const savedName = getUserName();


 const STORE_BASE = "https://6zagtygjzbttu2f9.public.blob.vercel-storage.com";
const FILE_NAME = "messages.json";

async function loadMessages(): Promise<MessageList> {
  try {
    const res = await fetch(`${STORE_BASE}/${FILE_NAME}`, { cache: "no-store" });
    if (!res.ok) return [];
    return (await res.json()) as MessageList;
  } catch {
    return [];
  }
}

async function saveMessages(messages: MessageList) {
  // 1) בקש URL חתום להעלאה
  const r = await fetch("/api/blob-url", { method: "POST" });
  if (!r.ok) throw new Error("Failed to get upload URL");
  const { uploadUrl } = await r.json();

  // 2) שלח את הקובץ כ-FormData לשם (ישירות ל-Blob, בלי טוקן בצד לקוח)
  const fd = new FormData();
  const jsonBlob = new Blob([JSON.stringify(messages, null, 2)], { type: "application/json" });
  fd.append("file", jsonBlob, FILE_NAME);

  const up = await fetch(uploadUrl, { method: "POST", body: fd });
  if (!up.ok) throw new Error("Upload failed");
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
  const [sender, setSender] = useState(savedName || "Anonymous");

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