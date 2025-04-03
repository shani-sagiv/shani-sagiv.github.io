import React, { useState } from "react";
import { Button, Cards, WavesComponent, WordArtTitle } from "components";
import Marquee from "react-fast-marquee";
import bkueWavesSrc from "assets/IMG_6105.jpeg";
import { COUNTRIES_WITHOUT_IMAGES } from "Routes";
import "./HomePage.scss";
import {
  getAggregateLocations,
  Location,
  mergeLocationsByPlaceAndDate,
  sortAllDestinationsByDate,
} from "helpers/locations.helpers";
import {
  calculateDaysBetweenDates,
  calculateTotalNightsAtAllDestinations,
  formatDateRange,
  parseDate,
  parseDateDOT,
  parseDaysToHebrew,
} from "helpers/dateHelpers";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";

interface HomePageProps extends React.HTMLAttributes<HTMLDivElement> {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const destinationsCards = COUNTRIES_WITHOUT_IMAGES.map(
    ({ country, destinations }) => ({
      displayName: country.displayName,
      image: country.profileImg,
      navigate: country.id,
      inProgress: country.inProgress,
      bottomData: parseDaysToHebrew(
        calculateTotalNightsAtAllDestinations(destinations),
      ),
    }),
  );

  const navigate = useNavigate();

  const locationsByDate = sortAllDestinationsByDate();
  const totalNights = calculateTotalNights();
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
          marginTop: -60,
          height: "max(35vh , 300px)",
          objectFit: "cover",
          objectPosition: "top",
        }}
      />
      <WavesComponent>
        {renderLastPlaces()}
        <WordArtTitle title={parseDaysToHebrew(totalNights)} />
        <Cards items={destinationsCards} />
      </WavesComponent>
      <div
        className={"flex-row flex-center"}
        style={{ gap: 5, width: "100vw", flexWrap: "wrap", marginBottom: 20 }}
      >
        <Button onClick={() => navigate(`/RandomCountry`)}>ניחוש מקום</Button>
        <Button onClick={() => navigate(`/Randomoneonone`)}>
          1:1 ניחוש מקום
        </Button>
        <Button onClick={() => navigate(`/data`)}>מידע</Button>
        <Button onClick={() => navigate(`/random`)}>ניחוש מידע</Button>
      </div>
    </div>
  );
};
export default HomePage;
