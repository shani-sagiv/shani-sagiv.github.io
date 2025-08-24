// src/components/ItemComments/ItemComments.tsx
import React, { useEffect, useMemo, useState } from "react";
import { getUserName } from "helpers/localStorage.helpers";
import { notifyPhone } from "helpers/notifier";
import { notifyLikeComment } from "helpers/notifyTexts";
import {
  docIdFromParts,
  subscribeCommentsList,
  sendComment,
  likeComment,
} from "../../../helpers/feedback.helpers";

type Comment = {
  id?: string;
  text: string;
  displayName: string;
  createdAt?: any;
  likesCount?: number;
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
  const docId = useMemo(() => docIdFromParts(destinationId, itemId), [destinationId, itemId]);

  useEffect(() => {
    const unsub = subscribeCommentsList(docId, (rows) => {
      setComments(
        rows.map((d: any) => ({
          id: d.id,
          text: d.text,
          displayName: d.displayName,
          createdAt: d.createdAt,
          likesCount: d.likesCount ?? 0,
          likedBy: d.likedBy ?? [],
          uid: d.uid ?? null,
        }))
      );
    }, "asc");
    return unsub;
  }, [docId]);

  async function handleSend() {
    const t = text.trim();
    if (!t) return;
    notifyPhone(`📝 ${displayName} commented on ${destinationId}/${itemId}: "${t}"`);
    await sendComment({ destinationId, itemId, text: t, displayName });
    setText("");
  }

  async function handleLike(comment: Comment) {
    if (!comment.id) return;
    const alreadyLiked = comment.likedBy?.includes(displayName);
    if (alreadyLiked) return;
    notifyPhone(notifyLikeComment(displayName, destinationId, itemId));
    await likeComment({
      destinationId,
      itemId,
      commentId: comment.id,
      likerDisplayName: displayName,
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
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="הוסף תגובה..." />
        <button onClick={handleSend}>שלח</button>
      </div>
    </div>
  );
}
