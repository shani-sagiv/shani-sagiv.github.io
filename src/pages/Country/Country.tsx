import React from "react";
import "./Country.scss";
import { useNavigate } from "react-router-dom";
import { Cards, Collapsibles, Title } from "components";
import { Country as CountryModel, Destination } from "models";
import {
  calculateDaysBetweenDates,
  calculateTotalNightsAtAllDestinations,
  getNameToDisplay,
  parseDate,
  parseDaysToHebrew,
} from "helpers/dateHelpers";
import { Location } from "../../helpers/locations.helpers";
import LocationsWithDates from "components/locationsWithDates/LocationsWithDates";
import destination from "pages/Destination/Destination";

interface CountryProps extends React.HTMLAttributes<HTMLDivElement> {
  destinations: Destination[];
  country: CountryModel;
}

const Country: React.FC<CountryProps> = ({ destinations, country }) => {
  const {
    gold_recommendation: goldRecommendation,
    profileImg,
    description,
    displayName,
  } = country;
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

  const sortLocationsByDate = (): Location[] => {
    const locations: Location[] = [];

    destinations.forEach((destination) => {
      destination.hotels.forEach((hotel) => {
        hotel.dates.forEach((dateRange) => {
          locations.push({
            placeName: destination.displayName.english,
            from: dateRange.from,
            to: dateRange.to,
            hotelName: hotel.name,
            country: country,
            id: destination.displayName.english,
          });
        });
      });
    });

    locations.sort((a, b) => a.from.getTime() - b.from.getTime());
    return locations;
  };

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
      <div style={{ marginRight: 10 }}>
        ({parseDaysToHebrew(totalNightsSlept)})
      </div>
      <Collapsibles items={items2} />
      <Cards items={cards} />
      <LocationsWithDates locations={sortLocationsByDate()} />
    </div>
  );
};
export default Country;
