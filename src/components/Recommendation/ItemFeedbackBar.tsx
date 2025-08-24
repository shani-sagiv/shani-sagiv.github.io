// src/components/ItemFeedbackBar.tsx
import React, { useEffect, useMemo, useState } from "react";
import {
  collection,
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
  arrayUnion,
  increment,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { getUserName } from "helpers/localStorage.helpers";
import { ItemComments } from "./ItemComments/ItemComments";
import { notifyPhone } from "helpers/notifier";
import { notifyLikeAttraction } from "helpers/notifyTexts";

export function ItemFeedbackBar({
  destinationId,
  itemId,
}: {
  destinationId: string;
  itemId: string;
}) {
  const sender = getUserName(); // string display name
  const docId = useMemo(() => `${destinationId}_${itemId}`, [destinationId, itemId]);

  const [likes, setLikes] = useState<number>(0);
  const [likedBy, setLikedBy] = useState<string[]>([]);
  const [commentsCount, setCommentsCount] = useState<number>(0);
  const [showComments, setShowComments] = useState(false);

  // מאזין למסמך האטרקציה (לייקים, קאונטרים)
  useEffect(() => {
    const ref = doc(db, "attractions", docId);
    const unsub = onSnapshot(ref, (snap) => {
      if (!snap.exists()) {
        setLikedBy([]);
        setLikes(0);
        // אל תדרוס commentsCount כאן – נטפל בו עם מאזין לתת־אוסף
        return;
      }
      const data = snap.data() as {
        likedBy?: string[];
        likesCount?: number;
        commentsCount?: number;
      };
      const likedByArr = normalizeNames(data.likedBy || []);     // ← במקום data.likedBy ?? []
      setLikedBy(likedByArr);
      setLikes(typeof data.likesCount === "number" ? data.likesCount : likedByArr.length);
      // setLikes(typeof data.likesCount === "number" ? data.likesCount : likedByArr.length);
      // אפשר גם לקרוא מ־commentsCount אם תרצה לחסוך מאזין נוסף:
      if (typeof data.commentsCount === "number") {
        setCommentsCount(data.commentsCount);
      }
    });
    return unsub;
  }, [docId]);
const normalizeNames = (arr: any[]) =>
  (arr || [])
    .map(u => (typeof u === "string" ? u : u?.displayName || ""))
    .filter(Boolean);

  // מאזין לתת־אוסף תגובות ומחשב count בזמן אמת
  // אם אתה מעדיף לחסוך חיבורים, אפשר להסתמך רק על שדה commentsCount במסמך האב ולהסיר את זה.
  useEffect(() => {
    const commentsRef = collection(db, "attractions", docId, "comments");
    const unsub = onSnapshot(commentsRef, (snap) => {
      setCommentsCount(snap.size);
    });
    return unsub;
  }, [docId]);

  async function handleLike() {
    if (!sender) return;
    if (likedBy.includes(sender)) return; // כבר עשה לייק

    const ref = doc(db, "attractions", docId);
    const notifyText = notifyLikeAttraction(sender, destinationId, itemId);
    notifyPhone(notifyText);

    // דואגים שהמסמך קיים וממזגים ערכים
    await setDoc(
      ref,
      {
        destinationId,
        itemId,
        updatedAt: serverTimestamp(),
        likedBy: arrayUnion(sender),
        likesCount: increment(1),
      },
      { merge: true }
    );
  }

  const alreadyLiked = normalizeNames(likedBy).includes(sender);
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          gap: 20,
        }}
      >
        <button
          onClick={() => setShowComments((s) => !s)}
          style={{ height: 35, width: 85, fontSize: 15, borderRadius: 50 }}
        >
          💬 {commentsCount}
        </button>

        <button
          disabled={alreadyLiked}
          onClick={handleLike}
          style={{
            height: 35,
            width: 85,
            fontSize: 15,
            marginLeft: 10,
            borderRadius: 50,
            backgroundColor: alreadyLiked ? "#6ad96eff" : "#eee",
          }}
        >
          {alreadyLiked ? "✅" : "👍"} {likes}
        </button>
      </div>

      {likes > 0 && (
        <div style={{ marginTop: 6, fontSize: 13, maxWidth: "100%", color: "#555" }}>
    ❤️ אהבו: {normalizeNames(likedBy).join(", ")}
        </div>
      )}

      {showComments && (
        <div style={{ marginTop: 10, width: "100%" }}>
          <ItemComments destinationId={destinationId} itemId={itemId} />
        </div>
      )}
    </div>
  );
}
