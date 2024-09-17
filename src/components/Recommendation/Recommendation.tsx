import React from "react";
import "./Recommendation.scss";
import { Recommendation as RecommendationModel } from "models";
import { ImageGallery } from "components";

interface RecommendationProps extends React.HTMLAttributes<HTMLDivElement> {
  recommendation: RecommendationModel;
}

const Recommendation: React.FC<RecommendationProps> = ({ recommendation }) => {
  return (
    <>
      <a
        style={{
          marginRight: 10,
          marginTop: 10,
          fontSize: 25,
          fontWeight: "bold",
        }}
        href={recommendation.googleMapLink}
        target={"_blank"}
      >
        {recommendation.name}
      </a>

      <div
        style={{ display: "flex", flexDirection: "row", gap: 5, margin: 10 }}
      >
        <span>
          {!recommendation.images ? null : (
            <ImageGallery
              style={{
                float: "left",
                margin: "0 10px",
                height: 150,
                overflow: "hidden",
                width: 150,
              }}
              images={recommendation.images.map((i) => ({ original: i }))}
            />
          )}
        </span>
        <span>
          {/*<div style={{fontSize: 20, fontWeight: "bold"}}>{hotel.name}</div>*/}
          <div style={{ marginRight: 10 }}>{recommendation.description}</div>
          <div style={{ marginRight: 10 }}>{recommendation.price}</div>
        </span>
      </div>
    </>
  );
};

export default Recommendation;
