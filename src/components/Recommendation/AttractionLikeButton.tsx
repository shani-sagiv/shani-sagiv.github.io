import React, { useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../../firebase";
import { getUserName } from "helpers/localStorage.helpers";
import { notifyPhone } from "helpers/notifier";

export function AttractionLike({
  destinationId,
  itemId,
}: {
  destinationId: string;
  itemId: string;
}) {
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const sender = getUserName();

  const likeDocId = `${destinationId}_${itemId}`;

  useEffect(() => {
    const ref = doc(db, "attractionLikes", likeDocId);
    getDoc(ref).then((snap) => {
      if (snap.exists()) {
        const data = snap.data() as any;
        setCount(data.count || 0);
        setLiked(data.likedBy?.includes(sender));
      }
    });
  }, [destinationId, itemId, sender]);

  async function handleLike() {
    if (liked) return; // כבר עשה לייק
    const notifyText = `⭐ ${sender} liked the attraction ${itemId} in ${destinationId}`;
    notifyPhone(notifyText)

    const ref = doc(db, "attractionLikes", likeDocId);

    await setDoc(
      ref,
      {
        destinationId,
        itemId,
        count: 1,
        likedBy: [sender],
      },
      { merge: true }
    );

    await updateDoc(ref, {
      count: (count || 0) + 1,
      likedBy: arrayUnion(sender),
    });

    setCount((c) => c + 1);
    setLiked(true);
  }

  return (
    <button
      onClick={handleLike}
      style={{
        padding: "6px 10px",
        borderRadius: 6,
        background: liked ? "#4caf50" : "#eee",
      }}
    >
      👍 {count}
    </button>
  );
}
