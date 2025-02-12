import React from "react";
import "./App.scss";
import { NavigationProvider } from "hooks/Navigation.hook";
import { BrowserRouter, HashRouter } from "react-router-dom";
import InnerRoutes from "./Routes";
import ReactGA from "react-ga4";
import { Analytics } from "@vercel/analytics/react";

function App() {
  React.useEffect(() => {
    // Initialize GA with your Measurement ID
    ReactGA.initialize("G-CP0L443BZQ");

    // Log the initial page load
    // ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <div className="App">
      <Analytics />
      <HashRouter>
        <NavigationProvider>
          <InnerRoutes />
        </NavigationProvider>
      </HashRouter>
    </div>
  );
}

export default App;
