import React, { useState } from "react";
import { Button, Cards, WavesComponent, WordArtTitle } from "components";
import Marquee from "react-fast-marquee";
import shaniInSunsetSrc from "assets/shani-in-sunset.jpeg";
import bkueWavesSrc from "assets/bkue-waves.jpeg";
import { COUNTRIES } from "Routes";
import "./HomePage.scss";
import SimpleMap from "components/SimpleMap/SimpleMap";
import {
  getAggregateLocations,
  sortLocationsByDate,
} from "../../helpers/locations.helpers";
import LocationsWithDates from "components/locationsWithDates/LocationsWithDates";
import {
  calculateDaysBetweenDates,
  calculateTotalNightsAtAllDestinations,
  parseDaysToHebrew,
} from "../../helpers/dateHelpers";
import { useNavigate } from "react-router-dom";

interface HomePageProps extends React.HTMLAttributes<HTMLDivElement> {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const destinations = COUNTRIES.map(({ country }) => ({
    displayName: country.displayName,
    image: country.profileImg,
    navigate: country.id,
    inProgress: country.inProgress,
  }));
  const navigate = useNavigate();

  const locationsByDate = sortLocationsByDate();
  const totalNights = calculateTotalNights();

  function calculateTotalNights() {
    return locationsByDate.reduce((totalNights, entry) => {
      return totalNights + calculateDaysBetweenDates(entry.from, entry.to);
    }, 0);
  }

  return (
    <div className={"home-page"} style={{ position: "relative" }}>
      <Marquee
        autoFill
        direction={"right"}
        style={{
          position: "absolute",
          direction: "ltr",
          top: 0,
          right: 0,
          width: "100%",
          fontSize: "1.5rem",
        }}
      >
        <span style={{ padding: "0 10px" }}>👑 שגיב ושני המלכים </span>
      </Marquee>
      <img
        src={bkueWavesSrc}
        style={{
          width: "100%",
          height: "max(30vh , 250px)",
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
      <WavesComponent>
        {/*<h1*/}
        {/*  style={{*/}
        {/*    height: 30,*/}
        {/*    margin: 0,*/}
        {/*    padding: 0,*/}
        {/*    width: "100%",*/}
        {/*    display: "flex",*/}
        {/*    justifyContent: "center",*/}
        {/*    alignItems: "center",*/}
        {/*    fontSize: 28,*/}
        {/*    fontWeight: "bold",*/}
        {/*    marginBottom: -15,*/}
        {/*  }}*/}
        {/*>*/}
        <WordArtTitle title={parseDaysToHebrew(totalNights)} />

        {/*</h1>*/}
        <Cards items={destinations} />
      </WavesComponent>
      <LocationsWithDates locations={locationsByDate} />
      <Button onClick={() => navigate(`/random`)}>נחש את התמונה</Button>
      <SimpleMap />
    </div>
  );
};
export default HomePage;
