import React from "react";
import classnames from "classnames";
import "./Hotel.scss";
import { Recommendation } from "models/Recommendation";
import { ImageGallery } from "components";

interface HotelProps extends React.HTMLAttributes<HTMLDivElement> {
  hotel: Recommendation;
}

const Hotel: React.FC<HotelProps> = ({ hotel }) => {
  return (
    <>
      <a
        style={{ marginRight: 10, fontSize: 25, fontWeight: "bold" }}
        href={hotel.googleMapLink}
        target={"_blank"}
      >
        {hotel.name}
      </a>

      <div
        style={{ display: "flex", flexDirection: "row", gap: 5, margin: 10 }}
      >
        <span>
          {!hotel.images ? null : (
            <span
              style={{
                height: "150px",
                width: "100px",
                float: "left",
                margin: "0 10px",
              }}
            >
              <ImageGallery
                images={hotel.images.map((i) => ({
                  original: i,
                  thumbnail: i,
                }))}
              />
            </span>
          )}
        </span>
        <span>
          {/*<div style={{fontSize: 20, fontWeight: "bold"}}>{hotel.name}</div>*/}
          <div style={{ marginRight: 10 }}>{hotel.description}</div>
          <div style={{ marginRight: 10 }}>{hotel.price}</div>
        </span>
      </div>
    </>
  );
};

export default Hotel;
