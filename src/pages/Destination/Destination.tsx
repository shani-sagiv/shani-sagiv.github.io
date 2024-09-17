import React from "react";
import { useNavigate } from "react-router-dom";
import StickyHeaderScroll from "components/StickyHeaderScroll/StickyHeaderScroll";
import { InfoRecommendation, Recommendation } from "models";
import { calculateDaysBetweenDates } from "helpers/dateHelpers";
import {
  Title,
  ImageGallery,
  Collapsibles,
  Recommendation as RecommendationComponent,
} from "components";
import "./Destination.scss";

interface CountryProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  hotels: Recommendation[];
  foods: Recommendation[];
  attractions: Recommendation[];
  nightlife: Recommendation[];
  shells?: string[];
  gold_recommendation?: InfoRecommendation[];
  // dates: { from: Date; to: Date }[];
}

const Destination: React.FC<CountryProps> = ({
  name = "Dest example",
  hotels = [],
  foods = [],
  attractions = [],
  shells = [],
  nightlife = [],
  gold_recommendation = [],
  // dates = [],
}) => {
  const navigate = useNavigate();

  const getActivities = () => {
    return [
      {
        title: "מלונות",
        tabTitle: <h1>🏨</h1>,
        content: hotels.map((r) => (
          <RecommendationComponent recommendation={r} />
        )),
      },
      {
        title: "מסעדות",
        tabTitle: <h1>🍔</h1>,
        content: foods.map((r) => (
          <RecommendationComponent recommendation={r} />
        )),
      },
      {
        title: "אטרקציות",
        tabTitle: <h1>🎡</h1>,
        content: attractions.map((r) => (
          <RecommendationComponent recommendation={r} />
        )),
      },
      {
        title: "חיי לילה",
        tabTitle: <h1>🕺</h1>,
        content: nightlife.map((r) => (
          <RecommendationComponent recommendation={r} />
        )),
      },
    ];
  };
  const getInfo = () => {
    return [
      {
        title: "shells",
        content: (
          <ImageGallery
            style={{
              width: "100%",
            }}
            images={shells.map((i) => ({ original: i }))}
          />
        ),
      },
      ...gold_recommendation.map((r) => ({
        title: r.name,
        content: (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {r.description}
            {r.links
              ? r.links.map((l) => (
                  <a href={l} target={"_blank"}>
                    {l}
                  </a>
                ))
              : null}
          </div>
        ),
      })),
    ];
  };

  return (
    <div className={"Destination"}>
      <Title title={name} />
      <div className="info">
        {/*{dates.map((date) => (*/}
        {/*  <div*/}
        {/*    style={{*/}
        {/*      display: "flex",*/}
        {/*      flexDirection: "row",*/}
        {/*      gap: 5,*/}
        {/*      // marginRight: 15,*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    <span>ימים</span>*/}
        {/*    <span>{calculateDaysBetweenDates(date.from, date.to)}</span>*/}
        {/*  </div>*/}
        {/*))}*/}
      </div>
      <Collapsibles items={getInfo()} />
      <StickyHeaderScroll items={getActivities()} />
    </div>
  );
};

export default Destination;
