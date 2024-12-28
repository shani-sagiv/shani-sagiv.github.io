import React, { useState } from "react";
import { Button, Cards, WavesComponent, WordArtTitle } from "components";
import Marquee from "react-fast-marquee";
import bkueWavesSrc from "assets/bkue-waves.jpeg";
import { COUNTRIES } from "Routes";
import "./HomePage.scss";
import {
  Location,
  mergeLocationsByPlaceAndDate,
  sortAllDestinationsByDate,
} from "helpers/locations.helpers";
import {
  calculateDaysBetweenDates,
  calculateTotalNightsAtAllDestinations,
  parseDate,
  parseDaysToHebrew,
} from "helpers/dateHelpers";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";

interface HomePageProps extends React.HTMLAttributes<HTMLDivElement> {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const destinationsCards = COUNTRIES.map(({ country, destinations }) => ({
    displayName: country.displayName,
    image: country.profileImg,
    navigate: country.id,
    inProgress: country.inProgress,
    bottomData: parseDaysToHebrew(
      calculateTotalNightsAtAllDestinations(destinations),
    ),
  }));

  const navigate = useNavigate();

  const locationsByDate = sortAllDestinationsByDate();
  const totalNights = calculateTotalNights();
  const locationsByPlaceAndDate = mergeLocationsByPlaceAndDate(locationsByDate);

  const renderSingleLastPlace = (l: Location, i: number) => {
    const path = `/${l.country.id}/${l.id}`;
    return (
      <div className={"flex-column flex-center"} id={`single-place-${i}`}>
        <Card
          size="small"
          onClick={() => navigate(path)}
          displayName={l.displayName}
          image={l.profileImg}
        />
        <div className={"flex-row"} style={{ gap: 10, marginTop: -10 }}>
          {parseDate(l.from, true)}-{parseDate(l.to, true)}
        </div>
      </div>
    );

    // return (
    //   <div
    //     onClick={() => navigate(path)}
    //     className={"flex-column flex-center"}
    //     style={{ width: 200, height: 200, border: "1px solid red" }}
    //   >
    //     <span>{l.displayName.hebrew}</span>
    //     {l.profileImg && (
    //       <img style={{ height: 150, width: 150 }} src={l.profileImg[0]} />
    //     )}
    //     <span>
    //       <span>{parseDate(l.from)}</span>-<span>{parseDate(l.to)}</span>
    //     </span>
    //   </div>
    // );
  };
  const renderLastPlaces = () => {
    const lasts = locationsByPlaceAndDate
      .slice(locationsByPlaceAndDate.length - 3, locationsByPlaceAndDate.length)
      .reverse();
    return (
      <>
        <WordArtTitle title={"אחרונים"} style={{ marginBottom: -10 }} />
        {/*<h1 style={{ marginBottom: -10 }}>אחרונים</h1>*/}

        <div
          className={"flex-row flex-center"}
          style={{
            // flexDirection: "row-reverse",
            marginBottom: 10,
            marginTop: 10,
            width: "100%",
            // overflow: "auto",
            // maxWidth: "100%",
            flexWrap: "wrap",
            justifyContent: "flex-start",
          }}
        >
          {lasts.map(renderSingleLastPlace)}
        </div>
      </>
    );
  };

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
        <WordArtTitle title={parseDaysToHebrew(totalNights)} />
        <Cards items={destinationsCards} />
      </WavesComponent>
      {renderLastPlaces()}
      <div
        className={"flex-column flex-center"}
        style={{ gap: 20, width: "100%" }}
      >
        <Button onClick={() => navigate(`/random`)}>נחש את התמונה</Button>
        <Button onClick={() => navigate(`/data`)}>מידע</Button>
      </div>
    </div>
  );
};
export default HomePage;
