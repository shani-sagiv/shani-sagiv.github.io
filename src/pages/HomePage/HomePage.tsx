import React, { useState } from "react";
import { Button, Cards, WavesComponent, WordArtTitle } from "components";
import Marquee from "react-fast-marquee";
import bkueWavesSrc from "assets/new-profile.jpg";
import { COUNTRIES } from "Routes";
import "./HomePage.scss";
import { sortAllDestinationsByDate } from "helpers/locations.helpers";
import {
  calculateDaysBetweenDates,
  calculateTotalNightsAtAllDestinations,
  parseDaysToHebrew,
} from "helpers/dateHelpers";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import LastPlaces from "components/infoBoxes/LastPlaces";
import TopPlaces from "components/infoBoxes/TopPlaces";
import { getUserName } from "helpers/localStorage.helpers";
import { signInWithGoogle } from "../../firebase";
import { createReturn } from "typescript";
import EmojiParticles from "components/EmojiParticles";
import EmojiCycler from "components/EmojiCycler";
// import UserStatsRow from "components/UserStatsRow";

interface HomePageProps extends React.HTMLAttributes<HTMLDivElement> {}
const savedName = getUserName();

const HomePage: React.FC<HomePageProps> = ({}) => {
  const destinationsCards = COUNTRIES.map(({ country, destinations }) => ({
    displayName: country.displayName,
    image: country.profileImg,
    navigate: country.id,
    inProgress: country.inProgress,
    bottomData: parseDaysToHebrew(
      calculateTotalNightsAtAllDestinations(destinations)
    ),
  }));

  const navigate = useNavigate();

  const locationsByDate = sortAllDestinationsByDate();
  const totalNights = calculateDaysSinceFirstDay();

  function calculateTotalNights() {
    return locationsByDate.reduce((totalNights, entry) => {
      return totalNights + calculateDaysBetweenDates(entry.from, entry.to);
    }, 0);
  }

  function calculateDaysSinceFirstDay() {
    const startDate = new Date(2024, 3, 10);
    const today = new Date();

    const diffInMs = today.getTime() - startDate.getTime();

    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    return diffInDays;
  }

  const name = getUserName();
  const renderaba = () => {
    if (name === "מטומטם") {
      return (
        <>
          <Marquee
            autoFill
            direction={"right"}
            style={{
              position: "absolute",
              direction: "ltr",
              top: 100,
              right: 0,
              width: "100%",
              fontSize: "1.5rem",
            }}
          >
            <span style={{ padding: "0 10px" }}>אבא איציק המלך 👑 ❤️ </span>
          </Marquee>{" "}
          <Marquee
            autoFill
            direction={"left"}
            style={{
              position: "absolute",
              direction: "ltr",
              top: 80,
              right: 0,
              width: "100%",
              fontSize: "1.5rem",
            }}
          >
            <span style={{ padding: "0 10px" }}>אבא איציק המלך 👑 ❤️ </span>
          </Marquee>
          <Marquee
            autoFill
            delay={-0.8}
            direction={"right"}
            style={{
              position: "absolute",
              direction: "ltr",
              top: 60,
              right: 0,
              width: "100%",
              fontSize: "1.5rem",
            }}
          >
            <span style={{ padding: "0 10px" }}>אבא איציק המלך 👑 ❤️ </span>
          </Marquee>
        </>
      );
    }
    return null;
  };

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
        <span
          style={{
            padding: "0 10px",
            color: "white",
            textShadow: `
      -1px -1px 0 #000,
      1px -1px 0 #000,
      -1px 1px 0 #000,
      1px 1px 0 #000
    `,
          }}
        >
          👑 שגיב ושני המלכים{" "}
        </span>
      </Marquee>
      {renderaba()}
      <img
        src={bkueWavesSrc}
        alt=""
        className="image-fade"
        loading="eager"
        fetchPriority="high"
        decoding="sync"
        style={{
          width: "100%",
          marginTop: -60,
          height: "max(35vh , 300px)",
          objectFit: "cover",
          objectPosition: "top",
        }}
      />

      <EmojiParticles />

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <span className="hello-header">שלום {savedName}</span>
        <span className="hand-wave">👋🏻</span>
      </div>

      {/* <span
        style={{ padding: "10px", textAlign: "center", fontSize: 15 }}
      >{`(יש עכשיו אפשרות לתגובות ולייקים, בבקשה להחליף את השם בכפתור למטה לשם שיהיה נוח להבין מי זה אחרת זה סתם עבודה שחורה לסדר את השטויות האלה)`}</span> */}

      <span className="section-header">עברו כבר 🗓️</span>

      <WordArtTitle
        title={parseDaysToHebrew(totalNights)}
        style={{ fontSize: 30, marginBottom: "5px" }}
      />

      <EmojiCycler intervalMs={1800} size={35} />
      <span className="section-header">יעדים אחרונים📍</span>
      <LastPlaces />

      <span className="section-header">כל המדינות 🌏</span>

      <Cards items={destinationsCards} />

      <span className="section-header">היעדים שבילינו בהם הכי הרבה 🕙</span>

      <TopPlaces />

      <span className="section-header">משחקים 🎲</span>

      <div
        className={"flex-row flex-center"}
        style={{
          gap: 5,
          maxWidth: "98vw",
          flexWrap: "wrap",
          marginBottom: 20,
        }}
      >
        <Button onClick={() => navigate(`/RandomCountry`)}>ניחוש מקום</Button>
        <Button onClick={() => navigate(`/Randomoneonone`)}>
          1:1 ניחוש מקום
        </Button>
        <Button onClick={() => navigate(`/data`)}>מידע</Button>
        <Button onClick={() => navigate(`/random`)}>ניחוש מידע</Button>
        <Button onClick={() => navigate(`/rename`)}>החלפת שם</Button>

        {/* <Button onClick={() => navigate(`/RandomLive`)}>ניחוש מקום לייב</Button> */}
        {/* <Button onClick={() => navigate(`/login`)}>התחברות עם גוגל</Button> */}

        <Button onClick={() => navigate(`/test`)}>צאט בדיקה</Button>
      </div>
      {/* <UserStatsRow/> */}
    </div>
  );
};
export default HomePage;

/*
attractions (collection)
 └─ SEOUL_entire-home-in-donggyo-dong-mapo-gu (doc)
     destinationId
     itemId
     likesCount
     likedBy: [ { uid, displayName } ]
     commentsCount
     updatedAt
     └─ comments (subcollection)
          └─ abc123 (doc)
               uid
               displayName
               text
               likesCount
               likedBy
               createdAt

*/
