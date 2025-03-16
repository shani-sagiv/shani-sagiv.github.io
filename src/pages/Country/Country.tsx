import React from "react";
import "./Country.scss";
import "../Destination/Destination.scss";
import { Cards, Collapsibles, Title } from "components";
import { Country as CountryModel, Destination } from "models";
import {
  calculateTotalNightsAtAllDestinations,
  calculateTotalTime,
  getNameToDisplay,
  parseDaysToHebrew,
} from "helpers/dateHelpers";
import { sortDestinationsByDate } from "helpers/locations.helpers";
import LocationsWithDates from "components/locationsWithDates/LocationsWithDates";

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
    phones: r?.phones,
  }));
  const cards = destinations.map((dest) => ({
    title: getNameToDisplay(dest.displayName),
    displayName: dest.displayName,
    bottomData: parseDaysToHebrew(calculateTotalTime(dest.hotels)),
    image: dest.profileImg,
    navigate: dest.id,
  }));
  const totalNightsSlept = calculateTotalNightsAtAllDestinations(destinations);

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

      <Title title={displayName.hebrew} addTitle={displayName.english} />
      {description ? <div className={"info"}>{description}</div> : null}
      <div style={{ marginRight: 10 }}>
        ({parseDaysToHebrew(totalNightsSlept)})
      </div>
      <Collapsibles items={items2} />
      <Cards items={cards} />
      <LocationsWithDates
        locations={sortDestinationsByDate(country, destinations)}
      />
    </div>
  );
};
export default Country;
