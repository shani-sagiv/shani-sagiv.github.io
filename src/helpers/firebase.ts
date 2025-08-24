// שליפת נתונים למבנה החדש ב-TS
import {
  doc,
  collection,
  getDoc,
  getDocs,
  updateDoc,
  setDoc,
  arrayUnion,
  increment,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db, auth } from "../firebase";

export type AttractionDoc = {
  destinationId: string;
  itemId: string;
  likesCount: number;
  likedBy: { uid: string; displayName: string }[];
  commentsCount: number;
  updatedAt: any;
};

export type CommentDoc = {
  id?: string;
  uid: string | null;
  displayName: string;
  text: string;
  likesCount: number;
  likedBy: string[];
  createdAt: any;
};

export async function getAttraction(destinationId: string, itemId: string): Promise<AttractionDoc | null> {
  const key = `${destinationId}_${itemId}`;
  const ref = doc(db, "attractions", key);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return snap.data() as AttractionDoc;
}

export async function getAttractionComments(destinationId: string, itemId: string): Promise<CommentDoc[]> {
  const key = `${destinationId}_${itemId}`;
  const commentsRef = collection(db, "attractions", key, "comments");
  const snap = await getDocs(commentsRef);
  return snap.docs.map((d) => ({ id: d.id, ...(d.data() as CommentDoc) }));
}

export async function likeAttraction(destinationId: string, itemId: string, displayName: string): Promise<void> {
  const uid = auth.currentUser?.uid;
  if (!uid) throw new Error("User not authenticated");
  const key = `${destinationId}_${itemId}`;
  const ref = doc(db, "attractions", key);

  await setDoc(
    ref,
    {
      destinationId,
      itemId,
      likedBy: arrayUnion({ uid, displayName }),
      likesCount: increment(1),
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}

export async function addAttractionComment(destinationId: string, itemId: string, text: string, displayName: string): Promise<void> {
  const uid = auth.currentUser?.uid || null;
  const key = `${destinationId}_${itemId}`;
  const commentsRef = collection(db, "attractions", key, "comments");
  const ref = doc(db, "attractions", key);

  await addDoc(commentsRef, {
    uid,
    displayName,
    text,
    likesCount: 0,
    likedBy: [],
    createdAt: serverTimestamp(),
  });

  await setDoc(
    ref,
    {
      destinationId,
      itemId,
      commentsCount: increment(1),
      updatedAt: serverTimestamp(),
    },
    { merge: true }
  );
}
