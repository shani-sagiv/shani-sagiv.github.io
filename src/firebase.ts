// src/firebase.ts
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7D8iEHz6lOZwdHQYja53qTBw9mB0MDCY",
  authDomain: "shanisagiv-d644a.firebaseapp.com",
  projectId: "shanisagiv-d644a",
  storageBucket: "shanisagiv-d644a.firebasestorage.app",
  messagingSenderId: "232027352549",
  appId: "1:232027352549:web:6c13ffdbc7e767d6a3530c",
  measurementId: "G-71K453BSCT"
};

let _app: FirebaseApp | null = null;
export function getApp() {
  if (!_app) _app = initializeApp(firebaseConfig);
  return _app;
}

export const db = getFirestore(getApp());
