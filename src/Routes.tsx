import React from "react";
import { NAV_BAR_OPTIONS } from "hooks/Navigation.hook";
import { Route, Routes } from "react-router-dom";
import {
  createRoutesFromOptions,
  CustomRouteObject,
} from "helpers/navigationHelpers";
import { THAILAND, KOH_LANTA } from "assets/data";
import {
  Country as CountryModel,
  Destination as DestinationModel,
} from "models";
import { Country, Destination } from "pages";
import { BreadcrumbNavigation } from "./components";

export const COUNTRIES: [
  { country: CountryModel; destinations: DestinationModel[] },
] = [
  {
    country: THAILAND,
    destinations: [KOH_LANTA],
  },
];

const translationMap = COUNTRIES.flatMap((item) => [
  { key: item.country.id, name: item.country.displayName.hebrew },
  ...item.destinations.map((destination) => ({
    key: destination.id,
    name: destination.displayName.hebrew,
  })),
]);

function InnerRoutes() {
  const getRoutes = (): CustomRouteObject[] => {
    return COUNTRIES.flatMap(({ country, destinations }) => {
      return [
        {
          path: country.id,
          element: (
            <Country
              name={`${country.displayName.english} ${country.displayName.hebrew}`}
              destinations={destinations}
              description={country.description}
              goldRecommendation={country.gold_recommendation}
            />
          ),
        } as CustomRouteObject,
        ...destinations.map((dest) => ({
          path: `${country.id}/${dest.id}`,
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
      <BreadcrumbNavigation translationMap={translationMap} />
      <Routes>
        {[...createRoutesFromOptions(NAV_BAR_OPTIONS), ...getRoutes()].map(
          (route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          )
        )}
      </Routes>
    </>
  );
}

export default InnerRoutes;
