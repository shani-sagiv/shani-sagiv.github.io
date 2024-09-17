import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./BreadcrumbNavigation.scss";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbNavigationProps {
  translationMap: {
    key: string;
    name: string;
  }[];
  separator?: React.ReactNode;
}

const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = ({
  separator = " ⬅️  ",
  translationMap,
}) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const breadcrumbs: BreadcrumbItem[] = pathnames.map((value, index) => {
    const pathTo = `/${pathnames.slice(0, index + 1).join("/")}`;
    const label =
      value.charAt(0).toUpperCase() + value.slice(1).replace("-", " ");
    const displayName =
      translationMap.find((item) => item.key === label)?.name || "";

    return { label: displayName, path: pathTo };
  });

  breadcrumbs.unshift({ label: "בית", path: "/" });

  if (breadcrumbs.length < 2) return <></>;

  return (
    <div className="breadcrumb-wrapper">
      {breadcrumbs.map((item, index) => {
        const isLastItem = index === breadcrumbs.length - 1;
        return (
          <div key={index} className="breadcrumb-item">
            {item.path && !isLastItem ? (
              <Link className="breadcrumb-text" to={item.path}>
                {item.label}
              </Link>
            ) : (
              <span className="breadcrumb-text">{item.label}</span>
            )}
            {!isLastItem && <span>{separator}</span>}
          </div>
        );
      })}
    </div>
  );
};

export default BreadcrumbNavigation;
