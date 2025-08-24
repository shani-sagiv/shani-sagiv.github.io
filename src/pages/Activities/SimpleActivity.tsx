import React, { useEffect, useRef, useState } from "react";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  DocumentData,
  Firestore,
} from "firebase/firestore";
import { db } from "../../firebase";

// ------------------- Types -------------------
type Activity = {
  id: string;
  type: "message" | "comment";
  sender: string;
  text?: string;
  destinationId?: string;
  itemId?: string;
  createdAt?: any; // Firestore Timestamp | Date | number | undefined
};

type Like = {
  id: string;        // מזהה ייחודי לשורת לייק
  sender: string;    // מי עשה לייק
  docName: string;   // attractions/{docId}
  createdAt?: any;   // נשתמש ב-updatedAt של מסמך האטרקציה
};

// ------------------- Helpers -------------------
const normalizeName = (u: any): string =>
  typeof u === "string" ? u : (u?.displayName ?? "");

const normalizeNames = (arr: any[]): string[] =>
  (arr || []).map(normalizeName).filter(Boolean);

const formatTs = (ts: any): string => {
  if (!ts) return "";
  try {
    if (typeof ts.toDate === "function") return ts.toDate().toLocaleString?.() || "";
    if (ts instanceof Date) return ts.toLocaleString?.() || ts.toString();
    if (typeof ts === "number") return new Date(ts).toLocaleString?.() || "";
  } catch {}
  return "";
};

// ------------------- Component -------------------
export default function SimpleActivity() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [likes, setLikes] = useState<Like[]>([]);

  // נשמור מאזינים לתגובות לכל אטרקציה כדי לנקות בינויים
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

  // תגובות + לייקים (דרך האזנה לכל /attractions)
  useEffect(() => {
    // בכל שינוי ברשימת האטרקציות: ננקה מאזיני-תגובות קודמים ונפתח חדשים
    const unsubAttractions = onSnapshot(collection(db, "attractions"), (atSnap) => {
      // 1) לייקים מכל האטרקציות
      const likeRows: Like[] = [];
      atSnap.forEach((doc) => {
        const data = doc.data() as any;
        const likedBy = normalizeNames(data.likedBy || []);
        const updatedAt = data.updatedAt;
        likedBy.forEach((who, idx) => {
          likeRows.push({
            id: `like_${doc.id}_${idx}_${who}`,
            sender: who,
            docName: doc.id,
            createdAt: updatedAt,
          });
        });
      });
      setLikes(likeRows);

      // 2) תגובות: נפתח מאזין לכל תת-אוסף comments של כל אטרקציה
      // נקה מאזינים ישנים
      commentUnsubsRef.current.forEach((u) => u && u());
      commentUnsubsRef.current = [];

      atSnap.forEach((doc) => {
        const attractionId = doc.id; // לדוגמה: HOI_AN_roving-chill-house
        const commentsCol = collection(db, "attractions", attractionId, "comments");
        const q = query(commentsCol, orderBy("createdAt", "desc"));
        const unsubComments = onSnapshot(q, (snap) => {
          const arr: Activity[] = snap.docs.map((d) => {
            const data = d.data() as any;
            const [destinationId, ...rest] = attractionId.split("_");
            const itemId = rest.join("_");
            return {
              id: `cmt_${attractionId}_${d.id}`,
              type: "comment",
              sender: normalizeName(data.displayName ?? data.sender),
              text: data.text,
              destinationId,
              itemId,
              createdAt: data.createdAt,
            };
          });

          // מעדכנים את ה-activities: מסירים קודם תגובות של האטרקציה הזו, ואז מוסיפים חדשות וממיינים
          setActivities((prev) => {
            const keep = prev.filter(
              (a) => !(a.type === "comment" && a.id.startsWith(`cmt_${attractionId}_`))
            );
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

// ------------------- Utilities -------------------
function mergeActivities(prev: Activity[], incoming: Activity[]): Activity[] {
  // מאחד לפי id, ואז ממיין לפי createdAt יורד
  const map = new Map<string, Activity>();
  [...prev, ...incoming].forEach((a) => map.set(a.id, a));
  return sortByTime(Array.from(map.values()));
}

function sortByTime(arr: Activity[]): Activity[] {
  return arr.sort(
    (a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0)
  );
}
