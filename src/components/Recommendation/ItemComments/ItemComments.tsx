// src/components/ItemComments/ItemComments.tsx
import React, { useEffect, useMemo, useState } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  updateDoc,
  doc,
  arrayUnion,
  increment,
  serverTimestamp,
} from "firebase/firestore";
import { auth, db } from "../../../firebase";
import { getUserName } from "helpers/localStorage.helpers";
import { notifyPhone } from "helpers/notifier";
import { notifyLikeComment } from "helpers/notifyTexts";

type Comment = {
  id?: string;
  text: string;
  displayName: string; // שינוי: תואם למבנה החדש
  createdAt?: any;
  likesCount?: number;  // שינוי: תואם למבנה החדש
  likedBy?: string[];
  uid?: string | null;
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
  const displayName = getUserName() || "Unknown";
  const docId = useMemo(() => `${destinationId}_${itemId}`, [destinationId, itemId]);

  // טוען תגובות ריל־טיים מתת־האוסף /attractions/{docId}/comments
  useEffect(() => {
    const commentsCol = collection(db, "attractions", docId, "comments");
    const q = query(commentsCol, orderBy("createdAt", "asc"));
    const unsub = onSnapshot(q, (snap) => {
      const arr: Comment[] = snap.docs.map((d) => {
        const data = d.data() as any;
        return {
          id: d.id,
          text: data.text,
          displayName: data.displayName,
          createdAt: data.createdAt,
          likesCount: data.likesCount ?? 0,
          likedBy: data.likedBy ?? [],
          uid: data.uid ?? null,
        };
      });
      setComments(arr);
    });
    return unsub;
  }, [docId]);

  async function handleSend() {
    const t = text.trim();
    if (!t) return;

    const commentsCol = collection(db, "attractions", docId, "comments");
    const parentRef = doc(db, "attractions", docId);

    // נוטיפיקציה
    const notifyText = `📝 ${displayName} commented on ${destinationId}/${itemId}: "${t}"`;
    notifyPhone(notifyText);

    // יצירת תגובה
    await addDoc(commentsCol, {
      uid: auth?.currentUser?.uid ?? null,
      text: t,
      displayName,
      likedBy: [],
      likesCount: 0,
      createdAt: serverTimestamp(),
    });

    // עדכון מונה תגובות + updatedAt במסמך האב
    await updateDoc(parentRef, {
      commentsCount: increment(1),
      updatedAt: serverTimestamp(),
      destinationId, // לשמירה על עקביות/איתור
      itemId,
    });

    setText("");
  }

  async function handleLike(comment: Comment) {
    if (!comment.id) return;
    const alreadyLiked = comment.likedBy?.includes(displayName);
    if (alreadyLiked) {
      alert("כבר עשית לייק לתגובה הזו 🙂");
      return;
    }

    const commentRef = doc(db, "attractions", docId, "comments", comment.id);
    const parentRef = doc(db, "attractions", docId);

    const notifyText = notifyLikeComment(displayName, destinationId, itemId);
    notifyPhone(notifyText);

    await updateDoc(commentRef, {
      likedBy: arrayUnion(displayName),
      likesCount: increment(1),
    });

    // (אופציונלי) עדכון updatedAt למסמך האב
    await updateDoc(parentRef, {
      updatedAt: serverTimestamp(),
    });
  }

  return (
    <div
      style={{
        width: "90%",
        padding: 10,
        border: "1px solid #ddd",
        borderRadius: 6,
        display: "flex",
        flexDirection: "column",
        alignContent: "flex-start",
      }}
    >
      <div style={{ marginBottom: 10 }}>
        {comments.map((c) => {
          const alreadyLiked = c.likedBy?.includes(displayName);
          return (
            <div key={c.id} style={{ marginBottom: 8 }}>
              <div>
                <strong>{c.displayName}</strong>: {c.text}
              </div>
              <div style={{ fontSize: 12, color: "#999" }}>
                {c.createdAt?.toDate?.().toLocaleString?.() || ""}
              </div>
              <button
                style={{ backgroundColor: alreadyLiked ? "#6ad96eff" : "#eee", borderRadius: 50 }}
                onClick={() => handleLike(c)}
                disabled={alreadyLiked}
              >
                👍 {c.likesCount ?? 0}
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
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="הוסף תגובה..."
        />
        <button onClick={handleSend}>שלח</button>
      </div>
    </div>
  );
}
