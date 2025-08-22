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
  type: "message" | "comment";
  sender: string;
  text?: string;
  destinationId?: string;
  itemId?: string;
  createdAt?: any;
};

type Like = {
  id: string;         // ייחודי לכל לייק
  sender: string;     // מי עשה לייק
  docName: string;    // שם המסמך
};

export default function ActivityFeed() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [likes, setLikes] = useState<Like[]>([]);

  useEffect(() => {
    const unsubs: (() => void)[] = [];

    // הודעות
    unsubs.push(
      onSnapshot(
        query(collection(db, "messages"), orderBy("createdAt", "desc")),
        (snap) => {
          const arr = snap.docs.map((d) => ({
            id: d.id,
            type: "message" as const,
            sender: d.data().sender,
            text: d.data().text,
            createdAt: d.data().createdAt,
          }));
          setActivities((prev) => merge(prev, arr));
        }
      )
    );

    // תגובות
    unsubs.push(
      onSnapshot(
        query(collection(db, "comments"), orderBy("createdAt", "desc")),
        (snap) => {
          const arr = snap.docs.map((d) => ({
            id: d.id,
            type: "comment" as const,
            sender: d.data().sender,
            text: d.data().text,
            destinationId: d.data().destinationId,
            itemId: d.data().itemId,
            createdAt: d.data().createdAt,
          }));
          setActivities((prev) => merge(prev, arr));
        }
      )
    );

    // לייקים – מציג את שם המסמך
    unsubs.push(
      onSnapshot(collection(db, "attractionLikes"), (snap) => {
        const arr: Like[] = [];
        snap.forEach((d) => {
          const data = d.data();
          (data.likedBy || []).forEach((who: string) => {
            arr.push({
              id: d.id + "_" + who,
              sender: who,
              docName: d.id, // שם המסמך עצמו
            });
          });
        });
        setLikes(arr);
      })
    );

    return () => unsubs.forEach((u) => u());
  }, []);

  function merge(prev: Activity[], incoming: Activity[]): Activity[] {
    const all = [
      ...prev.filter((p) => !incoming.some((i) => i.id === p.id)),
      ...incoming,
    ];
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
        </div>
      ))}

      <h3 style={{ marginTop: 20 }}>Likes</h3>
      {/* {likes.length === 0 && <div>אין לייקים עדיין</div>} */}
      {likes.map((l) => (
        <div key={l.id} style={{ borderBottom: "1px solid #eee", padding: 8 }}>
          ⭐ {l.sender} אהב את {l.docName}
        </div>
      ))}
    </div>
  );
}
