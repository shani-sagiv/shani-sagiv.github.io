import React from "react";
import "./App.scss";
import { NavigationProvider } from "hooks/Navigation.hook";
import { BrowserRouter } from "react-router-dom";
import InnerRoutes from "./Routes";
import { BreadcrumbNavigation } from "components/BreadcrumbNavigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationProvider>
          <BreadcrumbNavigation />
          <InnerRoutes />
        </NavigationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
