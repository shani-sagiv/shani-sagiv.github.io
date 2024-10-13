import ReactGA from "react-ga4";
import { getUserName } from "./localStorage.helpers";

export const logUserAction = () => {
  const username = getUserName() || "UNKNOWN";
  const currentPath = window.location.pathname;

  // Set user properties for custom data
  ReactGA.set({
    user_name: username,
    app_version: "1.0.0",
  });

  // Log event with basic information
  ReactGA.event({
    category: "User",
    action: `User: ${username} navigated`,
    label: currentPath,
    value: 1,
    nonInteraction: false,
  });

  // Log the page view
  ReactGA.send({ hitType: "pageview", page: currentPath });
};
