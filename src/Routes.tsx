import React from "react";
import { NAV_BAR_OPTIONS } from "hooks/Navigation.hook";
import { Route, Routes } from "react-router-dom";
import { createRoutesFromOptions } from "helpers/navigationHelpers";

function InnerRoutes() {
  return (
    <>
      <Routes>
        {createRoutesFromOptions([...NAV_BAR_OPTIONS]).map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default InnerRoutes;
