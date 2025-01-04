import ReactGA from "react-ga4";
import { getUserName } from "./localStorage.helpers";

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
  // ReactGA.send({ hitType: "pageview", page: path });
};
