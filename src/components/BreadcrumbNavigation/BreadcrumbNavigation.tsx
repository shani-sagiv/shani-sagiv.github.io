import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./BreadcrumbNavigation.scss";

interface BreadcrumbItem {
  label: string; // The display label of the breadcrumb
  path?: string; // The path for the breadcrumb (optional)
}

interface BreadcrumbNavigationProps {
  separator?: React.ReactNode; // Custom separator between items (optional)
}

const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({
  separator = " >>  ", // Default separator is " / "
}) => {
  const location = useLocation();

  // Split the current path and map it to breadcrumb items
  const pathnames = location.pathname.split("/").filter((x) => x);

  const breadcrumbs: BreadcrumbItem[] = pathnames.map((value, index) => {
    const pathTo = `/${pathnames.slice(0, index + 1).join("/")}`;

    // Customize label logic here, e.g. capitalize or replace hyphens with spaces
    const label =
      value.charAt(0).toUpperCase() + value.slice(1).replace("-", " ");

    return { label, path: pathTo };
  });

  // Add the "Home" breadcrumb to the beginning
  breadcrumbs.unshift({ label: "Home", path: "/" });
  console.log({ location });

  return (
    <div className="breadcrumb-wrapper">
      {breadcrumbs.map((item, index) => {
        const isLastItem = index === breadcrumbs.length - 1;
        return (
          <div key={index} className="breadcrumb-single">
            {item.path && !isLastItem ? (
              <Link to={item.path}>{item.label}</Link>
            ) : (
              <span>{item.label}</span>
            )}
            {!isLastItem && <span>{separator}</span>}
          </div>
        );
      })}
    </div>
  );
};

export default BreadcrumbNavigation;
