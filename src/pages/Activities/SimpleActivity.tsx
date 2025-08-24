// src/components/SimpleActivity.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  normalizeName,
  normalizeNames,
  formatTs,
  mergeActivities,
  sortByTime,
  Activity,
  subscribeAllAttractions,
} from "../../helpers/feedback.helpers";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

type Like = {
  id: string;
  sender: string;
  docName: string;
  createdAt?: any;
};

export default function SimpleActivity() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [likes, setLikes] = useState<Like[]>([]);
  const commentUnsubsRef = useRef<(() => void)[]>([]);

  // הודעות (טופ-לבל)
  useEffect(() => {
    const qMsgs = query(collection(db, "messages"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(qMsgs, (snap) => {
      const items: Activity[] = snap.docs.map((d) => {
        const data = d.data() as any;
        return {
          id: `msg_${d.id}`,
          type: "message",
          sender: normalizeName(data.sender),
          text: data.text,
          createdAt: data.createdAt,
        };
      });
      setActivities((prev) => mergeActivities(prev, items));
    });
    return () => unsub();
  }, []);

  // תגובות + לייקים לכל האטרקציות
  useEffect(() => {
    const unsubAttractions = subscribeAllAttractions((atList) => {
      // 1) Likes snapshot
      const likeRows: Like[] = [];
      atList.forEach(({ id, data }) => {
        const likedBy = normalizeNames((data as any).likedBy || []);
        const updatedAt = (data as any).updatedAt;
        likedBy.forEach((who, idx) => {
          likeRows.push({
            id: `like_${id}_${idx}_${who}`,
            sender: who,
            docName: id,
            createdAt: updatedAt,
          });
        });
      });
      setLikes(likeRows);

      // 2) Comments listeners per attraction
      commentUnsubsRef.current.forEach((u) => u && u());
      commentUnsubsRef.current = [];

      atList.forEach(({ id }) => {
        const commentsCol = collection(db, "attractions", id, "comments");
        const q = query(commentsCol, orderBy("createdAt", "desc"));
        const unsubComments = onSnapshot(q, (snap) => {
          const arr: Activity[] = snap.docs.map((d) => {
            const data = d.data() as any;
            const [destinationId, ...rest] = id.split("_");
            const itemId = rest.join("_");
            return {
              id: `cmt_${id}_${d.id}`,
              type: "comment",
              sender: normalizeName(data.displayName ?? data.sender),
              text: data.text,
              destinationId,
              itemId,
              createdAt: data.createdAt,
            };
          });

          setActivities((prev) => {
            const keep = prev.filter((a) => !(a.type === "comment" && a.id.startsWith(`cmt_${id}_`)));
            return sortByTime([...keep, ...arr]);
          });
        });
        commentUnsubsRef.current.push(unsubComments);
      });
    });

    return () => {
      commentUnsubsRef.current.forEach((u) => u && u());
      unsubAttractions();
    };
  }, []);

  return (
    <div style={{ maxWidth: 720, margin: "0 auto", fontFamily: "sans-serif" }}>
      <h2>Activity Feed</h2>

      {activities.map((a) => (
        <div key={a.id} style={{ borderBottom: "1px solid #eee", padding: 10 }}>
          {a.type === "message" && (
            <div>
              <div>💬 {a.sender}: {a.text}</div>
              <div style={{ fontSize: 12, color: "#888" }}>{formatTs(a.createdAt)}</div>
            </div>
          )}
          {a.type === "comment" && (
            <div>
              <div>📝 {a.sender} הגיב על {a.destinationId}/{a.itemId}: {a.text}</div>
              <div style={{ fontSize: 12, color: "#888" }}>{formatTs(a.createdAt)}</div>
            </div>
          )}
        </div>
      ))}

      <h3 style={{ marginTop: 24 }}>Likes</h3>
      {likes.map((l) => (
        <div key={l.id} style={{ borderBottom: "1px solid #eee", padding: 10 }}>
          <div>⭐ {l.sender} אהב את {l.docName}</div>
          <div style={{ fontSize: 12, color: "#888" }}>{formatTs(l.createdAt)}</div>
        </div>
      ))}
    </div>
  );
}
