import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getDefaultTab } from "helpers/navigationHelpers";
import { Destination, HomePage, Country } from "pages";

export const TABS_IDS = {
  HOME: "Home",
  COUNTRY: "Country",
  DESTINATION: "Destination",
  // Country: "Country",
};

export interface Route {
  id: (typeof TABS_IDS)[keyof typeof TABS_IDS];
  routes: string[];
  component: React.FC;
}

export interface Tab extends Route {
  title: string;
}

interface NavigationContextType {
  currentTab: Tab;
  setCurrentTab: (tab: Tab) => void;
}

export const NAV_BAR_OPTIONS: Tab[] = [
  {
    id: TABS_IDS.HOME,
    routes: ["/", `/${TABS_IDS.HOME.toLocaleLowerCase()}`],
    title: "Courses",
    component: HomePage,
  },
  {
    id: TABS_IDS.COUNTRY,
    routes: [`/${TABS_IDS.COUNTRY.toLocaleLowerCase()}`],
    title: "Country",
    component: () => <Country />,
  },
  // {
  //   id: TABS_IDS.DESTINATION,
  //   routes: [`/${TABS_IDS.DESTINATION.toLocaleLowerCase()}`],
  //   title: "Destination",
  //   component: () => <Destination />,
  // },
];

const defaultNavigationContext: NavigationContextType = {
  currentTab: NAV_BAR_OPTIONS[0],
  setCurrentTab: () => {},
};

const NavigationContext = createContext<NavigationContextType>(
  defaultNavigationContext,
);

interface NavigationProviderProps {
  children?: ReactNode;
}

export const NavigationProvider: FC<NavigationProviderProps> = ({
  children,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentTab, setCurrentTabState] = useState<Tab>(
    getDefaultTab(location.pathname),
  );

  const setCurrentTab = (tab: Tab) => {
    setCurrentTabState(tab);
    const route = tab.routes[0];
    navigate(route);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <NavigationContext.Provider value={{ currentTab, setCurrentTab }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};

export default NavigationContext;
