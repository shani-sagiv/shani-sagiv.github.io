import React from "react";
import "./Destination.scss";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import StickyHeaderScroll from "components/StickyHeaderScroll/StickyHeaderScroll";
import { Collapsibles } from "components";
import { Recommendation } from "models/Recommendation";
import Hotel from "../../components/Hotel/Hotel";
import { calculateDaysBetweenDates } from "../../helpers/dateHelpers";
import ImageGallery from "react-image-gallery";

interface CountryProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  hotels: Recommendation[];
  foods: Recommendation[];
  attractions: Recommendation[];
  nightlife: Recommendation[];
  shells?: string[];
  dates: { from: Date; to: Date }[];
}

const Destination: React.FC<CountryProps> = ({
  name = "Dest example",
  hotels = [],
  foods = [],
  attractions = [],
  shells = [],
  nightlife = [],
  dates = [],
}) => {
  const navigate = useNavigate();

  const getActivities = () => {
    return [
      {
        title: "🏨 מלונות 🏨",
        tabTitle: <h1>🏨</h1>,
        content: hotels.map((r) => <Hotel hotel={r} />),
      },
      {
        title: "🍔 מסעדות 🍔",
        tabTitle: <h1>🍔</h1>,
        content: foods.map((r) => <Hotel hotel={r} />),
      },
      {
        title: "🎡 אטרקציות 🎡",
        tabTitle: <h1>🎡</h1>,
        content: attractions.map((r) => <Hotel hotel={r} />),
      },
      {
        title: "🕺 חיי לילה 🕺",
        tabTitle: <h1>🕺</h1>,
        content: nightlife.map((r) => <Hotel hotel={r} />),
      },
    ];
  };
  const getInfo = () => {
    return [
      {
        title: "shells",
        content: (
          <ImageGallery
            showPlayButton={false}
            showThumbnails={false}
            items={shells.map((i) => ({ original: i, thumbnail: i }))}
          />
        ),
      },
    ];
  };

  return (
    <div className={"Destination"}>
      <Title title={name} />
      <div className="info">
        {dates.map((date) => (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              // marginRight: 15,
            }}
          >
            <span>ימים</span>
            <span>{calculateDaysBetweenDates(date.from, date.to)}</span>
          </div>
        ))}
      </div>
      <Collapsibles items={getInfo()} />
      <StickyHeaderScroll items={getActivities()} />
    </div>
  );
};

export default Destination;
