import React from "react";
import "./Recommendation.scss";
import { AllRecommendationTypes, dates as datesType } from "models";
import { ImageGallery } from "components";
import linkImgSrc from "assets/link.png";
import {
  calculateDaysBetweenDates,
  hasImages,
  parseDate,
} from "../../helpers/dateHelpers";
import { ItemComments } from "./ItemComments/ItemComments";
import { slugify } from "helpers/slugify";
import { ItemFeedbackBar } from "./ItemFeedbackBar";
// import { AttractionLikeButton } from "./AttractionLikeButton";

interface RecommendationProps extends React.HTMLAttributes<HTMLDivElement> {
  recommendation: AllRecommendationTypes;
  destinationId: string;
}

const Recommendation: React.FC<RecommendationProps> = ({ recommendation, destinationId }) => {
  const renderGoogleLink = () => {
    return (
      <a
        style={{
          marginRight: 10,
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
    );
  };

  // if ("dates" in recommendation && Array.isArray(recommendation.dates)) {
  //   ({ from, to } = recommendation.dates[0] ?? {});
  // }
  // @ts-ignore
  const dates: datesType[] = recommendation?.dates;
  const totalDays = dates?.length > 1 ? dates.reduce((sum, item) => sum + calculateDaysBetweenDates(item.from, item.to), 0) : undefined;
  // const hasNoData =
  //   !recommendation.description && !recommendation.price && !from && !to;

  return (
    <div style={{ marginTop: "20px" }}>
      {renderGoogleLink()}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // width: "min(97vw, 400px)",
          gap: 5,
          margin: "5px 1vw 10px 1vw",
        }}
      >
        <>
          {!hasImages(recommendation.images) ? null : (
            <div style={{ height: 250, width: "100%", position: "relative", }}>
              <ImageGallery
                style={{
                  // float: "left",
                  overflow: "hidden",
                  // height: 200,
                  width: "100%",
                  borderRadius: 8,
                  boxShadow: "0 0 15px 1px #6b6b6b",
                }}
              images={recommendation.images!.map((i) => ({ original: i }))}
            />
            </div>
          )}
        </>
        <div
          className={"flex-column"}
          style={{ width: "100%", textAlign: "right" }}
          // style={{ display: !hasNoData ? "block" : "none" }}
        >
          {/*<div style={{fontSize: 20, fontWeight: "bold"}}>{hotel.name}</div>*/}
          <div style={{ marginRight: 10 }}>{recommendation.description}</div>
          <div style={{ marginRight: 10 }}>{recommendation.price}</div>
          
          {dates
            ? dates.map(({ from, to }) => (
                <div
                  style={{ marginRight: 10, marginTop: "auto" }}
                  className={"flex-row"}
                >
                  <div>{parseDate(from)}</div>-<div>{parseDate(to)}</div>
                  <div style={{ margin: "0 5px" }}>
                    ({calculateDaysBetweenDates(from, to)})
                  </div>
                </div>
              ))
            : null}
            {totalDays  ? 
            <div style={{ margin: "0 5px" }}>סהכ {totalDays} ימים.</div>
            : null}
        </div>

        <ItemFeedbackBar destinationId={destinationId} itemId={slugify(recommendation.name)} />

        {/* <AttractionLike destinationId={destinationId} itemId={slugify(recommendation.name)} />
        <ItemComments destinationId={destinationId} itemId={slugify(recommendation.name)}/> */}
      </div>
    </div>
  );
};

export default Recommendation;
