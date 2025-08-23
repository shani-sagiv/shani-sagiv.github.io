import React from "react";
import { NAV_BAR_OPTIONS } from "hooks/Navigation.hook";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import {
  createRoutesFromOptions,
  CustomRouteObject,
} from "helpers/navigationHelpers";
import {
  THAILAND,
  THAILAND_DESTINATION,
  // KOH_LANTA,
  // KOH_PHA_NGAN,
  CHINAG_MAI,
  VIETNAM,
  VIETNAM_DESTINATION,
  // BANGKOK,
  KOH_CHANG,
  PATTAYA,
  KOH_SAMUI,
  KOH_TAO,
} from "assets/data";
import {
  Country as CountryModel,
  Destination as DestinationModel,
} from "models";
import { Country, Destination, Random, RandomCountry } from "pages";
import { BreadcrumbNavigation } from "components";
import { CYPRUS, LARNACA, LIMASSOL, PAPHOS, VASA } from "./assets/data/Cyprus";
import { logPageView, logUserAction } from "./helpers/logs.helpers";
import NameForm from "components/NameForm/NameForm";
import { getUserName } from "./helpers/localStorage.helpers";
import {
  CAMBODIA,
  CAMBODIA_DESTINATION,
} from "./assets/data/Cambodia/Cambodia";
import DataPage from "pages/DataPage/DataPage";
import MessagesPage from "pages/Messegas/MessagesPage";
import Randomoneonone from "pages/Random1on1/Randomoneonone";
import { SOUTH_KOREA, SOUTH_KOREA_DESTINATION } from "assets/data/SouthKorea/SouthKorea";
import SimpleActivity from "pages/Activities/SimpleActivity";
import { notifyPhone } from "helpers/notifier";
import { notifyPageView } from "helpers/notifyTexts";
import { useCurrentUser } from "currentUSer";
import LoginPage from "pages/GoogleLogin.tsx/LoginPage";
export const COUNTRIES: {
  country: CountryModel;
  destinations: DestinationModel[];
}[] = [
  {country: SOUTH_KOREA, destinations: SOUTH_KOREA_DESTINATION},
  {
    country: THAILAND,
    destinations: [
      ...THAILAND_DESTINATION,
      // BANGKOK,
      // KOH_LANTA,
      // KOH_PHA_NGAN,
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

export const COUNTRIES_WITHOUT_IMAGES = COUNTRIES.map(
  ({ country, destinations }) => ({
    country,
    destinations: destinations.map(removeImages),
  }),
);

function removeImages(destination: DestinationModel): DestinationModel {
  const {
    images, // Remove top-level images
    hotels,
    foods,
    attractions,
    nightlife,
    gold_recommendation,
    ...rest
  } = destination;

  return {
    ...rest,
    images: undefined, // Remove top-level images array
    hotels: hotels.map(({ images, ...hotel }) => ({
      ...hotel,
      images: undefined,
    })),
    foods: foods.map(({ images, ...food }) => ({
      ...food,
      images: undefined,
    })),
    attractions: attractions.map(({ images, ...attraction }) => ({
      ...attraction,
      images: undefined,
    })),
    nightlife: nightlife.map(({ images, ...nightlifeItem }) => ({
      ...nightlifeItem,
      images: undefined,
    })),
    gold_recommendation: gold_recommendation?.map(({ images, ...info }) => ({
      ...info,
      images: undefined,
    })),
  };
}

export const translationMap = COUNTRIES_WITHOUT_IMAGES.flatMap((item) => [
  { key: item.country.id, name: item.country.displayName.hebrew },
  ...item.destinations.map((destination) => ({
    key: destination.id,
    name: destination.displayName.hebrew,
  })),
]);

function InnerRoutes() {
  const navigate = useNavigate();
  const location = useLocation();
  const username = getUserName();

  // const user = useCurrentUser()
  // console.log(auth.currentUser);
  // console.log({user})
  //   console.log(user?.uid, user?.displayName, user?.email);

  // if(!user && location.pathname !== "/rename" && location.pathname !== "/login") {
  //   navigate("/login");
  // }

  if (!username && location.pathname !== "/rename") {
    navigate("/rename");
  }
  React.useEffect(() => {
    if (window.location.hostname !== "localhost") {
      logPageView(location.pathname);
      const notifyText = notifyPageView (username, location.pathname)

      notifyPhone(notifyText)
    }
  }, [location.pathname]);

  React.useEffect(() => {

    const currentPath = window.location.pathname;

    if (window.location.hostname !== "localhost") {
      logUserAction(username, currentPath); // Pass the username and path
    }
  }, [location.pathname, navigate]);

  const getRoutes = (): CustomRouteObject[] => {
    return COUNTRIES.flatMap(({ country, destinations }) => {
      const [countryId, destinationId] = location.pathname.slice(1).split("/");
      return [
        {
          path: country.id,
          element: <Country destinations={destinations} country={country} />,
        } as CustomRouteObject,
        ...destinations.map((dest) => {
          if (country.id !== countryId || dest.id !== destinationId) {
            dest = removeImages(dest);
          }
          return {
            path: `${country.id}/${dest.id}`,
            element: <Destination dest={dest} />,
          };
        }),
      ];
    });
  };

  return (
    <>
      <BreadcrumbNavigation />
      <Routes>
        <Route path={"/rename"} element={<NameForm />} />
        <Route path={"/login"} element={<LoginPage/>}/>
        <Route path={"/test"} element={<MessagesPage />} />
        <Route path={"/random"} element={<Random />} />
        <Route path={"/RandomCountry"} element={<RandomCountry />} />
        <Route path={"/Randomoneonone"} element={<Randomoneonone />} />
        <Route path={"/data"} element={<DataPage />} />
        <Route path={"/activities"} element={<SimpleActivity />} />
        {/*<Route path={"/semental"} element={<Semental />} />*/}

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
