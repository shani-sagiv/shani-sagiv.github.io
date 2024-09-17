import React from "react";
import { NAV_BAR_OPTIONS } from "hooks/Navigation.hook";
import { Route, RouteObject, Routes } from "react-router-dom";
import { createRoutesFromOptions } from "helpers/navigationHelpers";
import { THAILAND, KOH_LANTA } from "assets/data";
import {
  Country as CountryModel,
  Destination as DestinationModel,
} from "models";
import { Country, Destination } from "pages";

export const countries: [
  { country: CountryModel; destinations: DestinationModel[] },
] = [
  {
    country: THAILAND,
    destinations: [KOH_LANTA],
  },
];

function InnerRoutes() {
  const getRoutes = (): RouteObject[] => {
    return countries.flatMap(({ country, destinations }) => {
      return [
        {
          path: country.name,
          element: (
            <Country
              name={`${country.displayName.english} ${country.displayName.hebrew}`}
              description={country.description}
            />
          ),
        } as RouteObject,
        ...destinations.map((dest) => ({
          path: dest.name,
          element: (
            <Destination
              name={`${dest.displayName.english} ${dest.displayName.hebrew}`}
              hotels={dest.hotels}
              dates={dest.dates}
              attractions={dest.attractions}
              foods={dest.foods}
              nightlife={dest.nightlife}
              shells={dest.shells}
            />
          ),
        })),
      ];
    });
  };

  return (
    <>
      <Routes>
        {[...createRoutesFromOptions(NAV_BAR_OPTIONS), ...getRoutes()].map(
          (route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ),
        )}
      </Routes>
    </>
  );
}

export default InnerRoutes;
