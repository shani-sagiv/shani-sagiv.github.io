import React from "react";
import { useNavigate } from "react-router-dom";
import StickyHeaderScroll from "components/StickyHeaderScroll/StickyHeaderScroll";
import {
  AttractionRecommendation,
  DisplayName,
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
import {
  calculateDaysBetweenDates,
  getStartAndEndDate,
  parseDate,
} from "helpers/dateHelpers";

interface DestinationProps extends React.HTMLAttributes<HTMLDivElement> {
  displayName: DisplayName;
  hotels: HotelRecommendation[];
  foods: RestaurantRecommendation[];
  attractions: AttractionRecommendation[];
  nightlife: NightLifeRecommendation[];
  shells?: string[];
  profileImg: string;
  gold_recommendation?: InfoRecommendation[];
}

const Destination: React.FC<DestinationProps> = ({
  displayName,
  hotels = [],
  foods = [],
  attractions = [],
  shells = [],
  nightlife = [],
  profileImg,
  gold_recommendation = [],
}) => {
  const navigate = useNavigate();

  const getActivities = () => {
    const activitySections = [
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
    return activitySections.filter((section) => section.content.length > 0);
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
  const calculateDaysForHotel = (hotel: HotelRecommendation): number => {
    return hotel.dates.reduce((totalDays, dateRange) => {
      const { from, to } = dateRange;
      const timeDiff = to.getTime() - from.getTime(); // Difference in milliseconds
      const daysDiff = timeDiff / (1000 * 3600 * 24); // Convert milliseconds to days
      return totalDays + daysDiff;
    }, 0);
  };
  const totalDays = hotels.reduce(
    (totalDays, hotel) => totalDays + calculateDaysForHotel(hotel),
    0,
  );

  return (
    <div className={"Destination"}>
      <img
        src={profileImg}
        style={{
          height: "35vh",
          width: "100%",
          borderBottomRightRadius: "80px",
        }}
      />
      <Title title={displayName.hebrew} />
      <Title title={displayName.english} style={{ fontSize: 25 }} />
      <div className="info">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
          }}
        >
          <span>{totalDays}</span>
          <span>ימים</span>
        </div>
        {/*))}*/}
      </div>
      <Collapsibles items={getInfo()} />
      <StickyHeaderScroll items={getActivities()} />
    </div>
  );
};

export default Destination;
