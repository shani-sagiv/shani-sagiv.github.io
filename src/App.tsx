import React from "react";
import "./App.scss";
import { NavigationProvider } from "hooks/Navigation.hook";
import { BrowserRouter } from "react-router-dom";
import InnerRoutes from "./Routes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationProvider>
          <InnerRoutes />
        </NavigationProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
