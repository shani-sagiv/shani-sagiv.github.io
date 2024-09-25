import React from "react";
import "./Country.scss";
import { useNavigate } from "react-router-dom";
import { Cards, Collapsibles, Title } from "components";
import { Destination, DisplayName, Recommendation } from "models";
import {
  calculateDaysBetweenDates,
  calculateTotalNightsAtAllDestinations,
  getNameToDisplay,
  parseDate,
  parseDaysToHebrew,
} from "helpers/dateHelpers";

interface CountryProps extends React.HTMLAttributes<HTMLDivElement> {
  displayName: DisplayName;
  description: string;
  destinations: Destination[];
  profileImg: string;
  goldRecommendation: Recommendation[];
}

const Country: React.FC<CountryProps> = ({
  description,
  destinations,
  profileImg,
  displayName,
  goldRecommendation,
}) => {
  const navigate = useNavigate();
  const items2 = goldRecommendation.map((r) => ({
    title: r.name,
    content: r.description,
    images: r.images,
  }));
  const cards = destinations.map((dest) => ({
    title: getNameToDisplay(dest.displayName),
    displayName: dest.displayName,
    image: dest.profileImg,
    navigate: dest.id,
  }));
  const totalNightsSlept = calculateTotalNightsAtAllDestinations(destinations);

  const sortLocationsByDate = (): {
    placeName: string;
    from: Date;
    to: Date;
  }[] => {
    const locations: { placeName: string; from: Date; to: Date }[] = [];

    // Loop through each destination and extract hotel information
    destinations.forEach((destination) => {
      destination.hotels.forEach((hotel) => {
        hotel.dates.forEach((dateRange) => {
          locations.push({
            placeName: destination.displayName.english,
            from: dateRange.from,
            to: dateRange.to,
          });
        });
      });
    });

    // Sort locations by the "from" date
    locations.sort((a, b) => a.from.getTime() - b.from.getTime());

    return locations;
  };

  // console.log(sortLocationsByDate());

  return (
    <div className={"country"}>
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
      <Title
        title={displayName.english}
        style={{ fontSize: 25, marginTop: -10 }}
      />
      {description ? (
        <div style={{ margin: "5px 10px 10px 10px" }}>{description}</div>
      ) : null}
      <div>
        {sortLocationsByDate().map((a) => {
          return (
            <>
              <div
                className={"flex-row"}
                style={{ gap: 15, height: 5, marginRight: 20 }}
              >
                <b>{a.placeName}</b>
                <div className={"flex-row"} style={{ gap: 10 }}>
                  <div>{parseDate(a.from)}</div>
                  <div>{parseDate(a.to)}</div>
                  <div>({calculateDaysBetweenDates(a.from, a.to)})</div>
                </div>
              </div>
              <br />
            </>
          );
        })}
      </div>
      <div style={{ marginRight: 10 }}>
        ({parseDaysToHebrew(totalNightsSlept)})
      </div>
      <Collapsibles items={items2} />
      <Cards items={cards} />
    </div>
  );
};
export default Country;
