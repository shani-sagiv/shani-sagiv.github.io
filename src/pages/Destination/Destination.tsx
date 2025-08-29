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
  Info,
} from "models";
import {
  Title,
  ImageGallery,
  Collapsibles,
  Recommendation as RecommendationComponent,
  StickyHeaderScroll,
} from "components";
import "./Destination.scss";
import {
  calculateDaysBetweenDates,
  formatDateRange,
  formatHebrewDate,
  getStartAndEndDate,
  mergeDates,
  parseDate,
  parseDaysToHebrew,
} from "../../helpers/dateHelpers";
import Marquee from "react-fast-marquee";
import {PEOPLE_TRAVELED_WITH} from "assets/data/People"
interface DestinationProps extends React.HTMLAttributes<HTMLDivElement> {
  dest: DestinationModel;
}
export const createWhatsAppLinksContent = (phoneNumbers: string[]) =>
  phoneNumbers.map((number, index) => (
    <a
      key={index}
      href={`https://wa.me/${number.replace(/[^0-9]/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {number}
    </a>
  ));

type FlatImageMap = {
  [key: string]: string[];
};


const Destination: React.FC<DestinationProps> = ({ dest }) => {
  const {
    displayName,
    attractionsGroups = [],
    hotels = [],
    kids = [],
    foods = [],
    description,
    attractions = [],
    shells = [],
    images = [],
    nightlife = [],
    profileImg,
    gold_recommendation = [],
    moreInfo = [],
    additionalCode = null,
  } = dest;

    const [fetchedImages, setFetchedImages] = React.useState<FlatImageMap | null>(null);

  React.useEffect(() => {
    // מקבל את ה־hash ושולף ממנו את הנתיב (למשל THAILAND/KOH_PHA_NGAN)
    const hash = window.location.hash; // "#/THAILAND/KOH_PHA_NGAN"
    const path = hash.replace(/^#\//, ""); // "THAILAND/KOH_PHA_NGAN"
    const [country, destId] = path.split("/"); // ["THAILAND", "KOH_PHA_NGAN"]

    const jsonPath = `/images/${country}/${destId}/${destId}.json`;

    fetch(jsonPath)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load ${jsonPath}`);
        return res.json();
      })
      .then((data: FlatImageMap) => {
        console.log("✅ Loaded images:", data);
        setFetchedImages(data);
      })
      .catch((err) => {
        console.error("Error loading images JSON:", err);
        setFetchedImages({});
      });
  }, [/* הוא יטען שוב רק אם dest משתנה, אם תרצה */]);



  const generateContent = (
    items: AllRecommendationTypes[],
    keyPrefix: string,
  ) =>
    items.map((item, index) => {
      if (item.id && fetchedImages?.[item.id]) {
        item.images = fetchedImages[item.id];
              return (
                <span>
                  changed
      <RecommendationComponent
        recommendation={item}
        destinationId={dest.id}
        key={`${keyPrefix}-${index}`}
      />
      </span>)

      }

      return (
      <RecommendationComponent
        recommendation={item}
        destinationId={dest.id}
        key={`${keyPrefix}-${index}`}
      />)
    });

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
    const sortedHotels = hotels.sort(
      (a, b) =>
        new Date(b.dates?.[0]?.from ?? 0).getTime() -
        new Date(a.dates?.[0]?.from ?? 0).getTime(),
    );

    const sections = [
      {
        title: "מלונות",
        tabTitle: <h1>🏨</h1>,
        content: generateContent(sortedHotels, "hotel"),
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
        title: "חמודים",
        tabTitle: <h1>👶🏻</h1>,
        content: generateContent(kids, "kids"),
      },
      {
        title: "חיי לילה",
        tabTitle: <h1>🕺</h1>,
        content: generateContent(nightlife, "nightlife"),
      },
    ];

    return sections.filter((section) => section.content.length > 0);
  };

  const getImageGallery = (items: any, showThumbnails=false) => {
    return (
      <div style={{ height: 400, width: "100%",marginBottom:showThumbnails ? 80 : 0 }}>
      <ImageGallery
      showThumbnails={showThumbnails}
        style={{
          // float: "left",
          // overflow: "hidden",
          // height: 250,
          // width: "100%",
          // borderRadius: 8,
          // boxShadow: "0 0 15px 1px #6b6b6b",
        }}
        images={items}
      />
      </div>
    );
  };

  const getInfo = () => {
    const createImageGallery = (items: string[], title: string, open?:boolean, showThumbnails=false) => ({
      title,
      content: getImageGallery(items, showThumbnails),
      open:open,
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
          {r.images && (
            <div style={{ marginTop: 5 }}>{getImageGallery(r.images)}</div>
          )}
        </div>
      ),
    });
    const createMoreInfo = (moreInfos: Info[]) => ({
      title: "סתם מידע",
      content: (
        <div
          className="recommendation-content flex-row"
          style={{
            gap: 5,
            flexWrap: "nowrap",
            overflow: "auto",
            width: "100%",
          }}
        >
          {moreInfos.map((i) => (
            <div
              style={{
                width: "30vw",
                height: "auto",
                flexShrink: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h2>{i.name}</h2>
              <span style={{ marginBottom: 10 }}>
                {i.images && <ImageGallery images={i.images} />}
              </span>
              <span style={{}}>{i.description}</span>
            </div>
          ))}
          {/*{r.description}*/}
          {/*<br />*/}

          {/*{r.images && <ImageGallery images={r.images} />}*/}
        </div>
      ),
    });

    const sections = [];



    if (shells.length > 0) {
      sections.push(createImageGallery(shells, "צדפים 🌊🌺🏖️🐚🎀☀️"));
    }

    sections.push(...gold_recommendation.map(createGoldRecommendation));
    if (moreInfo.length > 0) {
      sections.push(createMoreInfo(moreInfo));
    }

    // sections.push(...moreInfo.map(createMoreInfo));
    if (images.length > 0) {
      sections.push(createImageGallery(images, "סתם תמונות", true, true));
    }
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
  const totalDays = Math.round(
    hotels.reduce(
      (totalDays, hotel) => totalDays + calculateDaysForHotel(hotel),
      0,
    ),
  );
  const renderDatesInPlace = () => {
    const allDates = hotels.flatMap((hotel) => hotel.dates);
    const sortedMergedDates = mergeDates(allDates).sort(
      (a, b) => new Date(b.to ?? 0).getTime() - new Date(a.to ?? 0).getTime(),
    );
    // console.log({sortedMergedDates})

    // const peopleWithMe = PEOPLE_TRAVELED_WITH.filter((entry) =>
    //   entry.dates.some((theirRange) =>
    //     sortedMergedDates.some((myRange) =>
    //       doRangesOverlap(myRange, theirRange)
    //     )
    //   )
    // );
    // console.log({peopleWithMe})



    return (
      <div
        style={{
          width: "100%",
          overflow: "auto",
          textWrap: "nowrap",
          display: "flex",
          flexDirection: "column",
          marginTop: 5,
        }}
      >
        {sortedMergedDates.map((date) => {
          return (
            // <div style={{ direction: "ltr" }}>
            <div>
              {/*{formatDateRange(date.from, date.to)} (*/}
              {formatHebrewDate(date.from)} - {formatHebrewDate(date.to)} (
              {calculateDaysBetweenDates(date.from, date.to)})
            </div>
          );
        })}
      </div>
    );
  };
  const renderMarquees = () => {
    const marquees = [];
    for (let vh = 50, i = 0; vh <= 90; vh += 5, i++) {
      marquees.push(
        <Marquee
          key={vh}
          autoFill
          direction={i % 2 === 0 ? "right" : "left"}
          style={{
            position: "absolute",
            top: `${vh}vh`,
            left: 0,
            width: "100%",
            fontSize: "1.5rem",
            direction: "ltr",
          }}
        >
          <span style={{ padding: "0 10px" }}>👑 שגיב ושני המלכים </span>
        </Marquee>,
      );
    }
    return marquees;
  };

  return (
    <div className={"Destination"}>
      <img
        src={profileImg}
        style={{
          height: "35vh",
          width: "100%",
          // borderBottomRightRadius: "80px",
          objectFit: "cover",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/*{renderMarquees()}*/}
      <span className={"inner-data"}>
        <Title title={displayName.hebrew} addTitle={displayName.english} />
        {/*<Title title={displayName.english} style={{ fontSize: 25 }} />*/}
        <div className="info">
          <div>{description}</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            (<span>{parseDaysToHebrew(totalDays)}</span>)
            {/*<span style={{ marginRight: 5 }}>סהכ</span>)*/}
          </div>
          {renderDatesInPlace()}
        </div>
        <Collapsibles items={getInfo()} />
        <StickyHeaderScroll items={getActivities()} />
        {additionalCode}
      </span>
    </div>
  );
};

export default Destination;
