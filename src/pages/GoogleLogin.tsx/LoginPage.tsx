import React, { useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { getUserName, setUserName } from "helpers/localStorage.helpers";

const provider = new GoogleAuthProvider();

export default function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // אם המשתמש מחובר, נווט או שמור מידע
    });
    return unsubscribe;
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
        const user = result.user;
      const userName = getUserName()
      if(!userName && user.displayName) {
        // אם אין שם שמור, נשמור את השם מהחשבון של גוגל
        setUserName(user.displayName)
      }

      window.location.href ="/"; // אחרי התחברות
    } catch (error) {
      console.error("Google sign-in failed:", error);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "360px",
          background: "#fff",
          borderRadius: "12px",
          padding: "24px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <h2>בגלל שכולם בחרו שם מטומטם עכשיו חייבים</h2>
        <h1 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "24px", color: "#333" }}>
          התחברות עם Google
        </h1>

        <button
          onClick={handleGoogleLogin}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            background: "#db4437",
            color: "#fff",
            padding: "12px",
            fontSize: "16px",
            fontWeight: "500",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            style={{ width: "20px", height: "20px" }}
          />
          התחבר עם Google
        </button>

        <p style={{ marginTop: "16px", fontSize: "13px", color: "#777" }}>
          השם יוצג לפי החשבון שלך, ותוכל לשנות אותו אחר כך.
        </p>

        <button
          onClick={() => signOut(auth)}
          style={{
            marginTop: "20px",
            width: "100%",
            background: "#666",
            color: "#fff",
            padding: "10px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          התנתק
        </button>
      </div>
    </div>
  );
}
