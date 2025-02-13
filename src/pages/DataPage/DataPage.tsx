import React from "react";
import "./DataPage.scss";
import { sortAllDestinationsByDate } from "helpers/locations.helpers";
import LocationsWithDates from "components/locationsWithDates/LocationsWithDates";
import SimpleMap from "components/SimpleMap/SimpleMap";
// import MapComponent from "../../siemReapMap";
import { Button } from "components/Button";
import { useNavigate } from "react-router-dom";

interface DataProps extends React.HTMLAttributes<HTMLDivElement> {}

const DataPage: React.FC<DataProps> = ({}) => {
  const navigate = useNavigate();
  const locationsByDate = sortAllDestinationsByDate();

  return (
    <div className={"data"}>
      <LocationsWithDates locations={locationsByDate} />
      {/*<Button onClick={() => navigate(`/semental`)}>סמנטעל</Button>*/}

      {/*<MapComponent />*/}
      <SimpleMap />
    </div>
  );
};
export default DataPage;
