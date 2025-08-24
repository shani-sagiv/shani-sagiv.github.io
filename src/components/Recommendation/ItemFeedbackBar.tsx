// src/components/ItemFeedbackBar.tsx
import React, { useEffect, useMemo, useState } from "react";
import { getUserName } from "helpers/localStorage.helpers";
import { notifyPhone } from "helpers/notifier";
import { notifyLikeAttraction } from "helpers/notifyTexts";
import {
  docIdFromParts,
  normalizeNames,
  subscribeAttraction,
  subscribeCommentsCount,
  likeAttraction,
} from "../../helpers/feedback.helpers";

import { ItemComments } from "./ItemComments/ItemComments";

export function ItemFeedbackBar({
  destinationId,
  itemId,
}: {
  destinationId: string;
  itemId: string;
}) {
  const sender = getUserName(); // display name
  const docId = useMemo(() => docIdFromParts(destinationId, itemId), [destinationId, itemId]);

  const [likes, setLikes] = useState<number>(0);
  const [likedBy, setLikedBy] = useState<string[]>([]);
  const [commentsCount, setCommentsCount] = useState<number>(0);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    const unsub = subscribeAttraction(docId, (data) => {
      if (!data) {
        setLikedBy([]);
        setLikes(0);
        return;
      }
      setLikedBy(data.likedBy);
      setLikes(typeof data.likesCount === "number" ? data.likesCount : data.likedBy.length);
      if (typeof data.commentsCount === "number") setCommentsCount(data.commentsCount);
    });
    return unsub;
  }, [docId]);

  useEffect(() => {
    const unsub = subscribeCommentsCount(docId, (count) => setCommentsCount(count));
    return unsub;
  }, [docId]);

  async function handleLike() {
    if (!sender) return;
    if (likedBy.includes(sender)) return;
    notifyPhone(notifyLikeAttraction(sender, destinationId, itemId));
    await likeAttraction({ destinationId, itemId, senderDisplayName: sender });
  }

  const alreadyLiked = normalizeNames(likedBy).includes(sender);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", width: "100%", gap: 20 }}>
        <button onClick={() => setShowComments((s) => !s)} style={{ height: 35, width: 85, fontSize: 15, borderRadius: 50 }}>
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
