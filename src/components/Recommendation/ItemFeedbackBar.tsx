// src/components/ItemFeedbackBar.tsx
import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../../firebase";
import { getUserName } from "helpers/localStorage.helpers";
import { ItemComments } from "./ItemComments/ItemComments";

export function ItemFeedbackBar({
  destinationId,
  itemId,
}: {
  destinationId: string;
  itemId: string;
}) {
  const sender = getUserName();
  const [likes, setLikes] = useState<number>(0);
  const [likedBy, setLikedBy] = useState<string[]>([]);
  const [commentsCount, setCommentsCount] = useState<number>(0);
  const [showComments, setShowComments] = useState(false);

  // מאזין ללייקים
  useEffect(() => {
    const ref = doc(db, "attractionLikes", `${destinationId}_${itemId}`);
    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        const data = snap.data() as { likedBy?: string[] };
        setLikedBy(data.likedBy || []);
        setLikes((data.likedBy || []).length);
      } else {
        setLikedBy([]);
        setLikes(0);
      }
    });
    return unsub;
  }, [destinationId, itemId]);

  // מאזין לתגובות (רק סופר, לא טוען הכל)
  useEffect(() => {
    const ref = collection(db, "comments");
    const unsub = onSnapshot(ref, (snap) => {
      const count = snap.docs.filter(
        (d) =>
          d.data().destinationId === destinationId &&
          d.data().itemId === itemId
      ).length;
      setCommentsCount(count);
    });
    return unsub;
  }, [destinationId, itemId]);

  async function handleLike() {
    const ref = doc(db, "attractionLikes", `${destinationId}_${itemId}`);
    if (likedBy.includes(sender)) return; // כבר עשה לייק
    await setDoc(
      ref,
      {
        likedBy: arrayUnion(sender),
      },
      { merge: true }
    );
  }
  return (
    <div style={{ display: "flex", flexDirection:"column",width: "100%", alignItems: "center", marginTop: 10 }}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "100%" }}>
            
      <button onClick={() => setShowComments((s) => !s)} style={{width:"auto"}}>
        💬 {commentsCount}
      </button>
      <button onClick={handleLike}>
        {/* todo: make green or t=something */}
        {likedBy.includes(sender) ? "✅" : "👍"} {likes}
      </button>

        </div>
      {showComments && (
        <div style={{ marginTop: 10, width: "100%" }}>
          <ItemComments
            destinationId={destinationId}
            itemId={itemId}
          />
        </div>
      )}
    </div>
  );
}
