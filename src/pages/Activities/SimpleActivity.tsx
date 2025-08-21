import React, { useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../firebase";

type Activity = {
  id: string;
  type: "message" | "comment" | "like";
  sender: string;
  text?: string;
  destinationId?: string;
  itemId?: string;
  createdAt?: any;
};

export default function ActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const unsubs: (() => void)[] = [];

    // הודעות
    unsubs.push(
      onSnapshot(query(collection(db, "messages"), orderBy("createdAt", "desc")), (snap) => {
        const arr = snap.docs.map((d) => ({
          id: d.id,
          type: "message" as const,
          sender: d.data().sender,
          text: d.data().text,
          createdAt: d.data().createdAt,
        }));
        setActivities((prev) => mergeActivities(prev, arr));
      })
    );

    // תגובות
    unsubs.push(
      onSnapshot(query(collection(db, "comments"), orderBy("createdAt", "desc")), (snap) => {
        const arr = snap.docs.map((d) => ({
          id: d.id,
          type: "comment" as const,
          sender: d.data().sender,
          text: d.data().text,
          destinationId: d.data().destinationId,
          itemId: d.data().itemId,
          createdAt: d.data().createdAt,
        }));
        setActivities((prev) => mergeActivities(prev, arr));
      })
    );

    // לייקים
    unsubs.push(
      onSnapshot(collection(db, "attractionLikes"), (snap) => {
        const arr: Activity[] = [];
        snap.forEach((d) => {
          const data = d.data();
          (data.likedBy || []).forEach((who: string) => {
            arr.push({
              id: d.id + "_" + who,
              type: "like",
              sender: who,
              destinationId: data.destinationId,
              itemId: data.itemId,
              createdAt: data.createdAt, // אם יש
            });
          });
        });
        setActivities((prev) => mergeActivities(prev, arr));
      })
    );

    return () => unsubs.forEach((u) => u());
  }, []);

  function mergeActivities(prev: Activity[], incoming: Activity[]): Activity[] {
    const all = [...prev.filter(p => !incoming.some(i => i.id === p.id)), ...incoming];
    return all.sort(
      (a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0)
    );
  }

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", fontFamily: "sans-serif" }}>
      <h2>Activity Feed</h2>
      {activities.map((a) => (
        <div key={a.id} style={{ borderBottom: "1px solid #eee", padding: 8 }}>
          {a.type === "message" && (
            <span>💬 {a.sender}: {a.text}</span>
          )}
          {a.type === "comment" && (
            <span>📝 {a.sender} הגיב על {a.destinationId}/{a.itemId}: {a.text}</span>
          )}
          {a.type === "like" && (
            <span>⭐ {a.sender} אהב את {a.destinationId}/{a.itemId}</span>
          )}
        </div>
      ))}
    </div>
  );
}
