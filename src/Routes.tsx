import React from "react";
import { NAV_BAR_OPTIONS } from "hooks/Navigation.hook";
import { Route, Routes } from "react-router-dom";
import {
  createRoutesFromOptions,
  CustomRouteObject,
} from "helpers/navigationHelpers";
import {
  THAILAND,
  KOH_LANTA,
  KOH_PHA_NGAN,
  CHINAG_MAI,
  VIETNAM,
  HOI_AN,
  PHONG_NHA,
  HANOI,
  CAT_BA,
  HA_LONG,
  SAPA,
  TA_VAN,
  BANGKOK,
} from "assets/data";
import {
  Country as CountryModel,
  Destination as DestinationModel,
} from "models";
import { Country, Destination } from "pages";
import { BreadcrumbNavigation } from "components";
import { CYPRUS, LARNACA, LIMASSOL, PAPHOS, VASA } from "./assets/data/Cyprus";

export const COUNTRIES: {
  country: CountryModel;
  destinations: DestinationModel[];
}[] = [
  {
    country: CYPRUS,
    destinations: [LIMASSOL, VASA, PAPHOS, LARNACA],
  },
  {
    country: THAILAND,
    destinations: [BANGKOK, KOH_LANTA, KOH_PHA_NGAN, CHINAG_MAI],
  },

  {
    country: VIETNAM,
    destinations: [HOI_AN, PHONG_NHA, HANOI, CAT_BA, HA_LONG, SAPA, TA_VAN],
  },
];

export const translationMap = COUNTRIES.flatMap((item) => [
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
              displayName={country.displayName}
              profileImg={country.profileImg}
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
              displayName={dest.displayName}
              hotels={dest.hotels}
              attractions={dest.attractions}
              foods={dest.foods}
              nightlife={dest.nightlife}
              shells={dest.shells}
              images={dest.images}
              gold_recommendation={dest.gold_recommendation}
              profileImg={dest.profileImg}
              description={dest.description}
            />
          ),
        })),
      ];
    });
  };

  return (
    <>
      <BreadcrumbNavigation />
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
