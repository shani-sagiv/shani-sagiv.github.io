import React, { useEffect } from "react";
import {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { getUserName, setUserName } from "helpers/localStorage.helpers";

const provider = new GoogleAuthProvider();

export default function LoginPage() {
  const navigate = useNavigate();

  // נטפל ב-login אחרי redirect
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          const user = result.user;
          const name = getUserName();
          if (!name && user.displayName) setUserName(user.displayName);
          navigate("/", { replace: true });
        }
      })
      .catch(() => {});
  }, [navigate]);

  const handleGoogleLogin = async () => {
    try {
      // ניסיון פופאפ
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const name = getUserName();
      if (!name && user.displayName) setUserName(user.displayName);
      navigate("/", { replace: true });
    } catch (error) {
      console.warn("Popup failed, fallback to redirect:", error);
      await signInWithRedirect(auth, provider);
      // לא עושים window.location.href! Firebase יסדר את זה.
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: "100%", maxWidth: "420px", background: "#fff", borderRadius: "12px", padding: "24px" }}>
        <h2>בגלל שכולם בחרו שם מטומטם עכשיו חייבים</h2>
        <h3>זה שומר רק את המייל שאדע מי זה מי</h3>
        <button
          onClick={handleGoogleLogin}
          style={{ width: "100%", padding: "12px", background: "#db4437", color: "#fff" }}
        >
          התחבר עם Google
        </button>
        <button
          onClick={() => signOut(auth)}
          style={{ width: "100%", marginTop: "20px", background: "#666", color: "#fff" }}
        >
          התנתק
        </button>
      </div>
    </div>
  );
}
