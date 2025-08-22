// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7D8iEHz6lOZwdHQYja53qTBw9mB0MDCY",
  authDomain: "shanisagiv-d644a.firebaseapp.com",
  projectId: "shanisagiv-d644a",
  storageBucket: "shanisagiv-d644a.firebasestorage.app",
  messagingSenderId: "232027352549",
  appId: "1:232027352549:web:6c13ffdbc7e767d6a3530c",
  measurementId: "G-71K453BSCT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// פונקציה להתחברות עם גוגל
export async function signInWithGoogle() {
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  // כאן יש לך גישה לכל הפרטים האמיתיים של המשתמש
  console.log("UID:", user.uid);
  console.log("Name:", user.displayName);
  console.log("Email:", user.email);
  console.log("Photo:", user.photoURL);

  return user;
}
