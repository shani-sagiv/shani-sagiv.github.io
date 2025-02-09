import React from "react";
import "./Recommendation.scss";
import { AllRecommendationTypes } from "models";
import { ImageGallery } from "components";
import linkImgSrc from "assets/link.png";
import {
  calculateDaysBetweenDates,
  hasImages,
  parseDate,
} from "../../helpers/dateHelpers";

interface RecommendationProps extends React.HTMLAttributes<HTMLDivElement> {
  recommendation: AllRecommendationTypes;
}

const Recommendation: React.FC<RecommendationProps> = ({ recommendation }) => {
  const { from, to } =
    recommendation.type === "Hotel" && recommendation.dates.length > 0
      ? recommendation.dates[0]
      : { from: undefined, to: undefined };
  const hasNoData =
    !recommendation.description && !recommendation.price && !from && !to;
  return (
    <>
      <a
        style={{
          marginRight: 10,
          marginTop: 10,
          fontSize: 22,
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          color: "#393939",
          textDecoration: "none",
        }}
        href={recommendation.googleMapLink}
        target={"_blank"}
      >
        <img
          src={linkImgSrc}
          style={{
            height: "20px",
            marginLeft: 10,
            display: recommendation.googleMapLink ? "flex" : "none",
          }}
        />
        {recommendation.name}
      </a>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          margin: "5px 10px 10px 10px",
        }}
      >
        <>
          {!hasImages(recommendation.images) ? null : (
            <ImageGallery
              style={{
                float: "left",
                margin: "0 10px",
                overflow: "hidden",
                height: !hasNoData ? 150 : 300,
                width: !hasNoData ? 150 : "90vw",
                borderRadius: 8,
                boxShadow: "0 0 15px 1px #6b6b6b",
              }}
              images={recommendation.images!.map((i) => ({ original: i }))}
            />
          )}
        </>
        <div
          className={"flex-column"}
          style={{ display: !hasNoData ? "block" : "none" }}
        >
          {/*<div style={{fontSize: 20, fontWeight: "bold"}}>{hotel.name}</div>*/}
          <div style={{ marginRight: 10 }}>{recommendation.description}</div>
          <div style={{ marginRight: 10 }}>{recommendation.price}</div>
          {!from || !to ? null : (
            <div
              style={{ marginRight: 10, marginTop: "auto" }}
              className={"flex-row"}
            >
              <div>{parseDate(from)}</div>-<div>{parseDate(to)}</div>
              <div style={{ margin: "0 5px" }}>
                ({calculateDaysBetweenDates(from, to)})
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Recommendation;
