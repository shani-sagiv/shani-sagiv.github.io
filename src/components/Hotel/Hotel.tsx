import React from "react";
import classnames from "classnames";
import "./Hotel.scss";
import { Recommendation } from "models/Recommendation";

interface HotelProps extends React.HTMLAttributes<HTMLDivElement> {
  hotel: Recommendation;
}

const Hotel: React.FC<HotelProps> = ({ hotel }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 5, margin: 10 }}
    >
      <a
        style={{ marginRight: 10, fontSize: 25, fontWeight: "bold" }}
        href={hotel.googleMapLink}
        target={"_blank"}
      >
        {hotel.name}
      </a>
      {/*<div style={{fontSize: 20, fontWeight: "bold"}}>{hotel.name}</div>*/}
      <div style={{ marginRight: 10 }}>{hotel.description}</div>
      <div style={{ marginRight: 10 }}>{hotel.price}</div>
    </div>
  );
};

export default Hotel;
