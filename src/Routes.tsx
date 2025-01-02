import React from "react";
import { NAV_BAR_OPTIONS } from "hooks/Navigation.hook";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
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
  VIETNAM_DESTINATION,
  BANGKOK,
  KOH_CHANG,
  PATTAYA,
  KOH_SAMUI,
  KOH_TAO,
} from "assets/data";
import {
  Country as CountryModel,
  Destination as DestinationModel,
} from "models";
import { Country, Destination, Random } from "pages";
import { BreadcrumbNavigation } from "components";
import { CYPRUS, LARNACA, LIMASSOL, PAPHOS, VASA } from "./assets/data/Cyprus";
import { logUserAction } from "./helpers/logs.helpers";
import NameForm from "components/NameForm/NameForm";
import { getUserName } from "./helpers/localStorage.helpers";
import {
  CAMBODIA,
  CAMBODIA_DESTINATION,
} from "./assets/data/Cambodia/Cambodia";
import DataPage from "pages/DataPage/DataPage";

export const COUNTRIES: {
  country: CountryModel;
  destinations: DestinationModel[];
}[] = [
  {
    country: THAILAND,
    destinations: [
      BANGKOK,
      KOH_LANTA,
      KOH_PHA_NGAN,
      CHINAG_MAI,
      KOH_CHANG,
      PATTAYA,
      KOH_SAMUI,
      KOH_TAO,
    ],
  },
  {
    country: CAMBODIA,
    destinations: CAMBODIA_DESTINATION,
  },
  {
    country: VIETNAM,
    destinations: VIETNAM_DESTINATION,
  },
  {
    country: CYPRUS,
    destinations: [LIMASSOL, VASA, PAPHOS, LARNACA],
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
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (!getUserName()) navigate("/login");

    const username = getUserName();
    const currentPath = window.location.pathname;

    if (window.location.hostname !== "localhost") {
      logUserAction(username, currentPath); // Pass the username and path
    }
  }, [location.pathname, navigate]);

  const getRoutes = (): CustomRouteObject[] => {
    return COUNTRIES.flatMap(({ country, destinations }) => {
      return [
        {
          path: country.id,
          element: (
            <Country
              // displayName={country.displayName}
              // profileImg={country.profileImg}
              destinations={destinations}
              // description={country.description}
              country={country}
              // goldRecommendation={country.gold_recommendation}
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
        <Route path={"/login"} element={<NameForm />} />
        <Route path={"/random"} element={<Random />} />
        <Route path={"/data"} element={<DataPage />} />

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
