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
import { FeedbackIcon } from "./FeedbackIcon";

export function ItemFeedbackBar({
  destinationId,
  itemId,
}: {
  destinationId: string;
  itemId: string;
}) {
  const sender = getUserName();
  const docId = useMemo(
    () => docIdFromParts(destinationId, itemId),
    [destinationId, itemId]
  );

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
      setLikes(
        typeof data.likesCount === "number"
          ? data.likesCount
          : data.likedBy.length
      );
      if (typeof data.commentsCount === "number")
        setCommentsCount(data.commentsCount);
    });
    return unsub;
  }, [docId]);

  useEffect(() => {
    const unsub = subscribeCommentsCount(docId, (count) =>
      setCommentsCount(count)
    );
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          width: "100%",
          gap: 10,
        }}
      >

        <FeedbackIcon
          type="heart"
          filled={alreadyLiked}
          count={likes}
          color="grey"
          size={42}
          onClick={handleLike}
        />
                <FeedbackIcon
          type="comment"
          count={commentsCount}
          color="grey"
          size={42}
          onClick={() => setShowComments((s) => !s)}
        />
      </div>

      {likes > 0 && (
        <div
          style={{
            marginTop: 6,
            fontSize: 13,
            maxWidth: "100%",
            color: "#555",
          }}
        >
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
