import React from "react";
import "./DataPage.scss";
import { sortAllDestinationsByDate } from "helpers/locations.helpers";
import LocationsWithDates from "components/locationsWithDates/LocationsWithDates";
import SimpleMap from "components/SimpleMap/SimpleMap";
import MapComponent from "../../test";

interface DataProps extends React.HTMLAttributes<HTMLDivElement> {}

const DataPage: React.FC<DataProps> = ({}) => {
  const locationsByDate = sortAllDestinationsByDate();

  return (
    <div className={"data"}>
      <LocationsWithDates locations={locationsByDate} />
      <MapComponent />
      <SimpleMap />
    </div>
  );
};
export default DataPage;
