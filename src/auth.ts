// src/auth.ts
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

export function initAnonymousAuth() {
  // מאזינים למשתמש
  onAuthStateChanged(auth, (user) => {
    if (user) {
      localStorage.setItem("userId", user.uid);
      console.log("Signed in:", user.uid);
    }
  });

  // מתחברים אם לא מחוברים
  if (!auth.currentUser) {
    signInAnonymously(auth).catch(console.error);
  }
}
