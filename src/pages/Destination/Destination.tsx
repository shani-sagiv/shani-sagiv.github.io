import React from "react";
import { useNavigate } from "react-router-dom";
import StickyHeaderScroll from "components/StickyHeaderScroll/StickyHeaderScroll";
import {
  AttractionRecommendation,
  HotelRecommendation,
  InfoRecommendation,
  NightLifeRecommendation,
  RestaurantRecommendation,
} from "models";
import {
  Title,
  ImageGallery,
  Collapsibles,
  Recommendation as RecommendationComponent,
} from "components";
import "./Destination.scss";
import { getStartAndEndDate, parseDate } from "helpers/dateHelpers";

interface CountryProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  hotels: HotelRecommendation[];
  foods: RestaurantRecommendation[];
  attractions: AttractionRecommendation[];
  nightlife: NightLifeRecommendation[];
  shells?: string[];
  gold_recommendation?: InfoRecommendation[];
}

const Destination: React.FC<CountryProps> = ({
  name = "Dest example",
  hotels = [],
  foods = [],
  attractions = [],
  shells = [],
  nightlife = [],
  gold_recommendation = [],
}) => {
  const navigate = useNavigate();

  const getActivities = () => {
    return [
      {
        title: "מלונות",
        tabTitle: <h1>🏨</h1>,
        content: hotels.map((r, i) => (
          <RecommendationComponent recommendation={r} key={`hotel-${i}`} />
        )),
      },
      {
        title: "מסעדות",
        tabTitle: <h1>🍔</h1>,
        content: foods.map((r, i) => (
          <RecommendationComponent recommendation={r} key={`food-${i}`} />
        )),
      },
      {
        title: "אטרקציות",
        tabTitle: <h1>🎡</h1>,
        content: attractions.map((r, i) => (
          <RecommendationComponent recommendation={r} key={`attraction-${i}`} />
        )),
      },
      {
        title: "חיי לילה",
        tabTitle: <h1>🕺</h1>,
        content: nightlife.map((r, i) => (
          <RecommendationComponent recommendation={r} key={`nightlife-${i}`} />
        )),
      },
    ];
  };

  const getInfo = () => {
    return [
      ...(shells.length > 0
        ? [
            {
              title: "צדפים 🌊🌺🏖️🐚🎀☀️",
              content: (
                <ImageGallery
                  style={{
                    width: "100%",
                  }}
                  images={shells.map((i) => ({ original: i }))}
                />
              ),
            },
          ]
        : []),
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
  const { startDate, endDate } = getStartAndEndDate(hotels);

  return (
    <div className={"Destination"}>
      <Title title={name} />
      <div className="info">
        {/*<div>{parseDate(startDate)}</div>-<div>{parseDate(endDate)}</div>*/}
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
