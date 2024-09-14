import React from "react";
import { NAV_BAR_OPTIONS } from "hooks/Navigation.hook";
import { Route, RouteObject, Routes } from "react-router-dom";
import { createRoutesFromOptions } from "helpers/navigationHelpers";
import { THAILAND } from "assets/data";
import { Country } from "pages"; // Import your country data

function InnerRoutes() {
  const ThailandPath: RouteObject = {
    path: THAILAND.name,
    element: (
      <Country
        name={`${THAILAND.displayName.english}  ${THAILAND.displayName.hebrew}`}
        description={THAILAND.description}
      />
    ),
  };

  return (
    <>
      <Routes>
        {[...createRoutesFromOptions(NAV_BAR_OPTIONS), ThailandPath].map(
          (route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ),
        )}
      </Routes>
    </>
  );
}

export default InnerRoutes;
