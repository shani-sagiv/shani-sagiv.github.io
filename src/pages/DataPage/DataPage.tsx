import React from "react";
import "./DataPage.scss";
import {
  getAggregateLocations,
  sortAllDestinationsByDate,
} from "helpers/locations.helpers";
import LocationsWithDates from "components/locationsWithDates/LocationsWithDates";
import SimpleMap from "components/SimpleMap/SimpleMap";
// import MapComponent from "../../siemReapMap";
import { Button } from "components/Button";
import { useNavigate } from "react-router-dom";
import {
  calculateTotalTime,
  getNameToDisplay,
  parseDaysToHebrew,
} from "../../helpers/dateHelpers";
import { Cards } from "components/Cards";
import Card from "../../components/Card/Card";
import { Title } from "components/Title";
import { WordArtTitle } from "components/WordArtTitle";

interface DataProps extends React.HTMLAttributes<HTMLDivElement> {}

const DataPage: React.FC<DataProps> = ({}) => {
  const navigate = useNavigate();
  const locationsByDate = sortAllDestinationsByDate();

  const top3 = Object.entries(getAggregateLocations())
    .sort(([, a], [, b]) => b.totalNights - a.totalNights)
    .slice(0, 6); // Get the first 3
  const cards = top3.map((single) => {
    const dest = single[1].data[0];
    return {
      title: getNameToDisplay(dest.displayName),
      displayName: dest.displayName,
      bottomData: parseDaysToHebrew(single[1].totalNights),
      image: dest.profileImg,
      navigate: "/" + dest.country.id + "/" + dest.id,
    };
  });

  const renderCards = () => {
    return cards.map((card) => (
      <Card
        size="small"
        onClick={() => navigate(card.navigate)}
        displayName={card.displayName}
        bottomData={card.bottomData}
        image={card.image}
      />
    ));
  };

  return (
    <div className={"data"}>
      <div className={"flex-center"} style={{ width: "100%" }}>
        <WordArtTitle title={"הכי הרבה"} />
      </div>
      <div className={"flex-row"} style={{ flexWrap: "wrap" }}>
        {renderCards()}
      </div>
      {/*<Cards items={cards} />*/}
      <LocationsWithDates locations={locationsByDate} />
      {/*<Button onClick={() => navigate(`/semental`)}>סמנטעל</Button>*/}

      {/*<MapComponent />*/}
      <SimpleMap />
    </div>
  );
};
export default DataPage;
