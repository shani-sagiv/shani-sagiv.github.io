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
  let cards = destinations.map((dest) => ({
    title: getNameToDisplay(dest.displayName),
    displayName: dest.displayName,
    bottomData: parseDaysToHebrew(calculateTotalTime(dest.hotels)),
    totalNights: calculateTotalTime(dest.hotels),
    image: dest.profileImg,
    navigate: dest.id,
  }));
  cards = cards.sort((a, b) => b.totalNights - a.totalNights);
  const totalNightsSlept = calculateTotalNightsAtAllDestinations(destinations);
  const [datesOpen, setDatesOpen] = React.useState(false)

  return (
    <div className={"country"}>
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
      <span className={"inner-data"}>
        <Title title={displayName.hebrew} addTitle={displayName.english} />
        {description ? <div className={"info"}>{description}</div> : null}
        <div style={{ marginRight: 10 }}>
          ({parseDaysToHebrew(totalNightsSlept)})
        </div>
        <Collapsibles items={items2} />
        <Cards items={cards} />
        <div onClick={() => setDatesOpen(!datesOpen)} style={{margin:"8px 20px 20px 0", cursor:"pointer"}}>
          {datesOpen ? "הסתר תאריכים 👆" : "הצג תאריכים 👇"}
        </div>

        {datesOpen && (
          <LocationsWithDates
            locations={sortDestinationsByDate(country, destinations)}
          />
        )}
      </span>
    </div>
  );
};
export default Country;
