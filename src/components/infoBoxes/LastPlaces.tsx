import React from "react";
import { Card, WordArtTitle } from "components/index";
import {
  Location,
  mergeLocationsByPlaceAndDate,
  sortAllDestinationsByDate,
} from "../../helpers/locations.helpers";
import { parseDateDOT } from "../../helpers/dateHelpers";
import { useNavigate } from "react-router-dom";

interface LastPlacesProps extends React.HTMLAttributes<HTMLDivElement> {}

const LastPlaces: React.FC<LastPlacesProps> = ({}) => {
  const navigate = useNavigate();

  const locationsByDate = sortAllDestinationsByDate();
  const locationsByPlaceAndDate = mergeLocationsByPlaceAndDate(locationsByDate);

  const renderSingleLastPlace = (l: Location, i: number) => {
    const now = new Date();
    const isActive = new Date(l.to) > now && new Date(l.from) < now;
    const path = `/${l.country.id}/${l.id}`;
    return (
      <div className={"flex-column flex-center"} id={`single-place-${i}`}>
        <Card
          size="small"
          onClick={() => navigate(path)}
          displayName={l.displayName}
          image={l.profileImg}
        />
        <div
          className={`flex-row ${isActive ? "blinking" : ""}`}
          style={{ gap: 10, marginTop: -10, direction: "ltr" }}
        >
          {/*{formatDateRange(l.from, l.to)}*/}
          {/*<br />*/}
          {parseDateDOT(l.from, true)} - {parseDateDOT(l.to, true)}
        </div>
      </div>
    );
  };
  const renderLastPlaces = () => {
    const lasts = locationsByPlaceAndDate
      .slice(locationsByPlaceAndDate.length - 3, locationsByPlaceAndDate.length)
      .reverse();
    return (
      <>
        {/*<Drawer text={"אחרונים"} />*/}
        <WordArtTitle title={"אחרונים"} style={{ marginBottom: -10 }} />
        {/*<h1 style={{ marginBottom: -10 }}>אחרונים</h1>*/}

        <div
          className={"flex-row flex-center"}
          style={{
            marginBottom: 10,
            marginTop: 10,
            width: "100%",
            flexWrap: "wrap",
            justifyContent: "flex-start",
          }}
        >
          {lasts.map(renderSingleLastPlace)}
        </div>
      </>
    );
  };

  return renderLastPlaces();
};
export default LastPlaces;
