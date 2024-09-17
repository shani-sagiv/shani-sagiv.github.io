import React from "react";
import { NAV_BAR_OPTIONS } from "hooks/Navigation.hook";
import { Route, RouteObject, Routes } from "react-router-dom";
import { createRoutesFromOptions } from "helpers/navigationHelpers";
import { THAILAND, KOH_LANTA } from "assets/data";
import { Country } from "pages";
import { Destination } from "pages/Destination"; // Import your country data

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
  const KOH_LANTA_PATH: RouteObject = {
    path: KOH_LANTA.name,
    element: (
      <Destination
        name={`${KOH_LANTA.displayName.english}  ${KOH_LANTA.displayName.hebrew}`}
        hotels={KOH_LANTA.hotels}
        dates={KOH_LANTA.dates}
        // description={THAILAND.description}
      />
    ),
  };

  return (
    <>
      <Routes>
        {[
          ...createRoutesFromOptions(NAV_BAR_OPTIONS),
          ThailandPath,
          KOH_LANTA_PATH,
        ].map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default InnerRoutes;
