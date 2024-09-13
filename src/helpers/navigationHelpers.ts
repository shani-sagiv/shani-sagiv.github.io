import { RouteObject } from "react-router-dom";
import React from "react";
import { NAV_BAR_OPTIONS, Route, Tab } from "hooks/Navigation.hook";

export const createRoutesFromOptions = (options: Route[]): RouteObject[] => {
  return options.flatMap((option) =>
    option.routes.map((route: string) => ({
      path: route.toLowerCase(),
      element: React.createElement(option.component),
    })),
  );
};

export const getDefaultTab = (pathname: string): Tab => {
  for (const tab of NAV_BAR_OPTIONS) {
    if (tab.routes.some((route) => route.toLowerCase().includes(pathname))) {
      return tab;
    }
  }
  return NAV_BAR_OPTIONS[0];
};
