import React, { useEffect, useRef, useState } from "react";
import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { getUserName } from "helpers/localStorage.helpers";
import { notifyPhone } from "helpers/notifier";

type Message = {
  id?: string;
  text: string;
  sender: string;
  createdAt?: Timestamp;
};

export default function MessagesPage() {
  const sender = getUserName() || "מישהו בלי שם";
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");

  // ref לתחתית הרשימה
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createdAt", "asc"));
    const unsub = onSnapshot(q, (snap) => {
      const arr: Message[] = [];
      snap.forEach((d) => arr.push({ id: d.id, ...(d.data() as any) }));
      setMessages(arr);
    });
    return unsub;
  }, []);

  // גולל לתחתית בכל שינוי הודעות
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend() {
    const t = text.trim();
    if (!t) return;
    const notifyText = `💬 ${sender} sent a message: "${text}"`;
    notifyPhone(notifyText);
    await addDoc(collection(db, "messages"), {
      text: t,
      sender,
      createdAt: serverTimestamp(),
    });
    setText("");
  }

  function formatDate(ts?: Timestamp) {
    if (!ts) return "…";
    return ts.toDate().toLocaleString();
  }

  return (
    <div style={{ maxWidth: 520, margin: "0 auto", fontFamily: "sans-serif" }}>
      <h2>Realtime Chat</h2>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 8,
          padding: 12,
          height: 280,
          overflowY: "auto",
          marginBottom: 12,
        }}
      >
        {messages.map((m) => (
          <div
            key={m.id}
            style={{
              padding: "6px 0",
              borderBottom: "1px dashed #eee",
            }}
          >
            <div>
              <strong>{m.sender}</strong>{" "}
              <span style={{ color: "#666" }}>({formatDate(m.createdAt)})</span>
            </div>
            <div>{m.text}</div>
          </div>
        ))}
        {/* העוגן לגלילה */}
        <div ref={bottomRef} />
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message…"
          style={{ flex: 1 }}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
