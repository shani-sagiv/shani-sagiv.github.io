import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AttractionGroupRecommendation,
  AttractionRecommendation,
  DisplayName,
  HotelRecommendation,
  InfoRecommendation,
  NightLifeRecommendation,
  RestaurantRecommendation,
  Destination as DestinationModel,
  AllRecommendationTypes,
} from "models";
import {
  Title,
  ImageGallery,
  Collapsibles,
  Recommendation as RecommendationComponent,
  StickyHeaderScroll,
} from "components";
import "./Destination.scss";

interface DestinationProps extends React.HTMLAttributes<HTMLDivElement> {
  dest: DestinationModel;
}

const Destination: React.FC<DestinationProps> = ({ dest }) => {
  const {
    displayName,
    attractionsGroups = [],
    hotels = [],
    foods = [],
    description,
    attractions = [],
    shells = [],
    images = [],
    nightlife = [],
    profileImg,
    gold_recommendation = [],
  } = dest;
  const generateContent = (
    items: AllRecommendationTypes[],
    keyPrefix: string,
  ) =>
    items.map((item, index) => (
      <RecommendationComponent
        recommendation={item}
        key={`${keyPrefix}-${index}`}
      />
    ));

  const generateAttractionGroupsContent = (
    groups: AttractionGroupRecommendation[],
  ) =>
    groups.map((attrGroup, groupIndex) => (
      <div
        key={`group-${groupIndex}`}
        style={{
          border: "4px solid white",
        }}
      >
        <h2>{attrGroup.name}</h2>
        <span>{attrGroup.description}</span>
        {generateContent(attrGroup.attractions, `attraction-${groupIndex}`)}
      </div>
    ));

  const getActivities = () => {
    const sections = [
      {
        title: "מלונות",
        tabTitle: <h1>🏨</h1>,
        content: generateContent(hotels, "hotel"),
      },
      {
        title: "יוםטיול",
        tabTitle: <h1>🎒</h1>,
        content: generateAttractionGroupsContent(attractionsGroups),
      },
      {
        title: "מסעדות",
        tabTitle: <h1>🍔</h1>,
        content: generateContent(foods, "food"),
      },
      {
        title: "אטרקציות",
        tabTitle: <h1>🎡</h1>,
        content: generateContent(attractions, "attraction"),
      },
      {
        title: "חיי לילה",
        tabTitle: <h1>🕺</h1>,
        content: generateContent(nightlife, "nightlife"),
      },
    ];

    return sections.filter((section) => section.content.length > 0);
  };

  const getInfo = () => {
    const createImageGallery = (items: string[], title: string) => ({
      title,
      content: <ImageGallery style={{ width: "95%" }} images={items} />,
    });

    const createLinksContent = (links: string[]) =>
      links.map((l, index) => (
        <a
          key={index}
          href={l}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginRight: 10 }}
        >
          {l}
        </a>
      ));
    const createPhoneLinksContent = (phoneNumbers: string[]) =>
      phoneNumbers.map((number, index) => (
        <a
          key={index}
          href={`tel:${number}`}
          rel="noopener noreferrer"
          style={{ marginRight: 10 }}
        >
          {number}
        </a>
      ));

    const createGoldRecommendation = (r: InfoRecommendation) => ({
      title: r.name,
      content: (
        <div className="recommendation-content">
          {r.description}
          <br />
          {r.links && (
            <>
              {createLinksContent(r.links)} <br />
            </>
          )}
          {r.phones && (
            <>
              {createWhatsAppLinksContent(r.phones)} <br />
            </>
          )}
          {r.images && <ImageGallery images={r.images} />}
        </div>
      ),
    });

    const sections = [];

    if (images.length > 0) {
      sections.push(createImageGallery(images, "סתם תמונות"));
    }

    if (shells.length > 0) {
      sections.push(createImageGallery(shells, "צדפים 🌊🌺🏖️🐚🎀☀️"));
    }

    sections.push(...gold_recommendation.map(createGoldRecommendation));

    return sections;
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
    0
  );

  return (
    <div className={"Destination"}>
      <img
        src={profileImg}
        style={{
          height: "35vh",
          width: "100%",
          borderBottomRightRadius: "80px",
          objectFit: "cover",
        }}
      />
      <Title title={displayName.hebrew} />
      <Title title={displayName.english} style={{ fontSize: 25 }} />
      <div className="info">
        <div>{description}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
          }}
        >
          (<span>{totalDays}</span>
          <span>ימים</span>)
        </div>
      </div>
      <Collapsibles items={getInfo()} />
      <StickyHeaderScroll items={getActivities()} />
    </div>
  );
};

export default Destination;
