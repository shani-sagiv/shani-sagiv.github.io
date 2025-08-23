import ReactGA from "react-ga4";
import { getUserName } from "./localStorage.helpers";

import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";


export const logPageView = async (path: string) => {
  const username = getUserName() || "UNKNOWN";

  try {
    await addDoc(collection(db, "pageViews"), {
      uid: auth?.currentUser?.uid,
      username,
      path,
      createdAt: serverTimestamp(),
    });
  } catch (err) {
    console.error("Failed to log page view:", err);
  }
};

export const logUserAction = (
  username = "UNKNOWN",
  path = window.location.pathname,
) => {
  // Set user properties for custom data
  ReactGA.set({
    user_id: username, // Use 'user_id' for tracking users
    username: username, // Use 'user_id' for tracking users
    app_version: "1.0.0",
  });

  // Log event with proper event structure in GA4
  ReactGA.event({
    category: "User",
    action: `${username} navigated to ${path}`,
    label: path,
    value: 1,
    nonInteraction: false,
  });

  // Log the page view
  ReactGA.send({ hitType: "pageview", page: path });
};
