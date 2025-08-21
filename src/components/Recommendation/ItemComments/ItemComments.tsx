// src/components/ItemComments.tsx
import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  serverTimestamp,
  updateDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { getUserName } from "helpers/localStorage.helpers";

type Comment = {
  id?: string;
  text: string;
  sender: string;
  createdAt?: any;
  likes?: number;
  likedBy?: string[];
};

export function ItemComments({
  destinationId,
  itemId,
}: {
  destinationId: string;
  itemId: string;
}) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [text, setText] = useState("");
  const sender = getUserName();

  // טוען תגובות ריל־טיים
  useEffect(() => {
    const q = query(
      collection(db, "comments"),
      where("destinationId", "==", destinationId),
      where("itemId", "==", itemId)
    );
    const unsub = onSnapshot(q, (snap) => {
      const arr: Comment[] = [];
      snap.forEach((d) => arr.push({ id: d.id, ...(d.data() as any) }));
      arr.sort((a, b) => (a.createdAt?.seconds || 0) - (b.createdAt?.seconds || 0));
      setComments(arr);
    });
    return unsub;
  }, [destinationId, itemId]);

  async function handleSend() {
    const t = text.trim();
    if (!t) return;
    await addDoc(collection(db, "comments"), {
      destinationId,
      itemId,
      text: t,
      sender,
      likes: 0,
      likedBy: [],
      createdAt: serverTimestamp(),
    });
    setText("");
  }

  async function handleLike(comment: Comment) {
    if (!comment.id) return;

    if (comment.likedBy?.includes(sender)) {
      alert("כבר עשית לייק לתגובה הזו 🙂");
      return;
    }

    await updateDoc(doc(db, "comments", comment.id), {
      likes: (comment.likes ?? 0) + 1,
      likedBy: arrayUnion(sender),
    });
  }

  return (
    <div style={{
        width: "90%",
        marginTop: 10,
        padding: 10,
        border: "1px solid #ddd",
        borderRadius: 6,
        display: "flex",
        flexDirection: "column",
        alignContent:"flex-start" }}>
      {/* <h4 style={{margin:"10px 0"}}>תגובות</h4> */}
      <div style={{  marginBottom: 10 }}>
        {comments.map((c) => {
          const alreadyLiked = c.likedBy?.includes(sender);
          return (
            <div key={c.id} style={{ marginBottom: 8 }}>
              <div>
                <strong>{c.sender}</strong>: {c.text}
              </div>
              <div style={{ fontSize: 12, color: "#999" }}>
                {c.createdAt?.toDate?.().toLocaleString?.()}
              </div>
                    {/* <button onClick={handleLike} style={{height:35, width:80, fontSize:20, marginLeft: 10, backgroundColor: likedBy.includes(sender) ? "#6ad96eff" : "#eee"}}> */}
              <button
              style={{ backgroundColor: alreadyLiked ? "#6ad96eff" : "#eee", borderRadius:50}}
                onClick={() => handleLike(c)}
                disabled={alreadyLiked} // חוסם את הכפתור אם כבר עשית לייק
              >
                👍 {c.likes ?? 0} 
                {/* {alreadyLiked && "✅"} */}
              </button>

            {c.likedBy && c.likedBy.length > 0 && (
                <div style={{ fontSize: 12, color: "#666", marginTop: 2 }}>
                ❤️ אהבו: {c.likedBy.join(", ")}
                </div>
        )}

            </div>
          );
        })}
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        <input
          style={{  }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="הוסף תגובה..."
        />
        <button onClick={handleSend}>שלח</button>
      </div>
    </div>
  );
}
