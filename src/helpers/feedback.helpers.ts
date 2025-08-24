// src/helpers/feedback.helpers.ts
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  increment,
  FirestoreError,
} from "firebase/firestore";
import { auth, db } from "../firebase";

// ---------- Normalizers ----------
export const normalizeName = (u: any): string =>
  typeof u === "string" ? u : (u?.displayName ?? "");

export const normalizeNames = (arr: any[]): string[] =>
  (arr || []).map(normalizeName).filter(Boolean);

export const formatTs = (ts: any): string => {
  if (!ts) return "";
  try {
    if (typeof ts.toDate === "function") return ts.toDate().toLocaleString?.() || "";
    if (ts instanceof Date) return ts.toLocaleString?.() || ts.toString();
    if (typeof ts === "number") return new Date(ts).toLocaleString?.() || "";
  } catch {}
  return "";
};

export const docIdFromParts = (destinationId: string, itemId: string) =>
  `${destinationId}_${itemId}`;

// ---------- Subscriptions ----------
export type AttractionSnapshot = {
  likedBy: string[];
  likesCount?: number;
  commentsCount?: number;
  updatedAt?: any;
};

export function subscribeAttraction(
  docId: string,
  cb: (data: AttractionSnapshot | null) => void,
  onError?: (e: FirestoreError) => void
) {
  const ref = doc(db, "attractions", docId);
  return onSnapshot(
    ref,
    (snap) => {
      if (!snap.exists()) return cb(null);
      const data = snap.data() as any;
      const likedByArr = normalizeNames(data.likedBy || []);
      cb({
        likedBy: likedByArr,
        likesCount: typeof data.likesCount === "number" ? data.likesCount : likedByArr.length,
        commentsCount: data.commentsCount,
        updatedAt: data.updatedAt,
      });
    },
    onError
  );
}

export function subscribeCommentsCount(
  docId: string,
  cb: (count: number) => void,
  onError?: (e: FirestoreError) => void
) {
  const commentsRef = collection(db, "attractions", docId, "comments");
  return onSnapshot(
    commentsRef,
    (snap) => cb(snap.size),
    onError
  );
}

export function subscribeCommentsList(
  docId: string,
  cb: (rows: Array<any>) => void,
  order: "asc" | "desc" = "asc",
  onError?: (e: FirestoreError) => void
) {
  const commentsCol = collection(db, "attractions", docId, "comments");
  const q = query(commentsCol, orderBy("createdAt", order));
  return onSnapshot(
    q,
    (snap) => {
      const arr = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
      cb(arr);
    },
    onError
  );
}

export function subscribeAllAttractions(
  cb: (docs: Array<{ id: string; data: DocumentData }>) => void,
  onError?: (e: FirestoreError) => void
) {
  const colRef = collection(db, "attractions");
  return onSnapshot(
    colRef,
    (snap) => {
      const docs = snap.docs.map((d) => ({ id: d.id, data: d.data() }));
      cb(docs);
    },
    onError
  );
}

// ---------- Mutations ----------
export async function likeAttraction(params: {
  destinationId: string;
  itemId: string;
  senderDisplayName: string;
}) {
  const { destinationId, itemId, senderDisplayName } = params;
  const docId = docIdFromParts(destinationId, itemId);
  const ref = doc(db, "attractions", docId);
  await setDoc(
    ref,
    {
      destinationId,
      itemId,
      updatedAt: serverTimestamp(),
      likedBy: arrayUnion(senderDisplayName),
      likesCount: increment(1),
    },
    { merge: true }
  );
}

export async function sendComment(params: {
  destinationId: string;
  itemId: string;
  text: string;
  displayName: string;
}) {
  const { destinationId, itemId, text, displayName } = params;
  const docId = docIdFromParts(destinationId, itemId);

  const commentsCol = collection(db, "attractions", docId, "comments");
  const parentRef = doc(db, "attractions", docId);

  await addDoc(commentsCol, {
    uid: auth?.currentUser?.uid ?? null,
    text,
    displayName,
    likedBy: [],
    likesCount: 0,
    createdAt: serverTimestamp(),
  });

  await updateDoc(parentRef, {
    commentsCount: increment(1),
    updatedAt: serverTimestamp(),
    destinationId,
    itemId,
  });
}

export async function likeComment(params: {
  destinationId: string;
  itemId: string;
  commentId: string;
  likerDisplayName: string;
}) {
  const { destinationId, itemId, commentId, likerDisplayName } = params;
  const docId = docIdFromParts(destinationId, itemId);
  const commentRef = doc(db, "attractions", docId, "comments", commentId);
  const parentRef = doc(db, "attractions", docId);

  await updateDoc(commentRef, {
    likedBy: arrayUnion(likerDisplayName),
    likesCount: increment(1),
  });

  await updateDoc(parentRef, { updatedAt: serverTimestamp() });
}

// ---------- Activity feed helpers ----------
export type Activity = {
  id: string;
  type: "message" | "comment";
  sender: string;
  text?: string;
  destinationId?: string;
  itemId?: string;
  createdAt?: any;
};

export function mergeActivities(prev: Activity[], incoming: Activity[]): Activity[] {
  const map = new Map<string, Activity>();
  [...prev, ...incoming].forEach((a) => map.set(a.id, a));
  return sortByTime(Array.from(map.values()));
}

export function sortByTime(arr: Activity[]): Activity[] {
  return arr.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
}
