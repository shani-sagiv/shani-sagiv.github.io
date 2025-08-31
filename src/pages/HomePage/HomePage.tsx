import React, { useState } from "react";
import { Button, Cards, WavesComponent, WordArtTitle } from "components";
import Marquee from "react-fast-marquee";
import bkueWavesSrc from "assets/IMG_6105_compressed.jpeg";
import { COUNTRIES_WITHOUT_IMAGES } from "Routes";
import "./HomePage.scss";
import {
  sortAllDestinationsByDate,
} from "helpers/locations.helpers";
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
// import UserStatsRow from "components/UserStatsRow";

interface HomePageProps extends React.HTMLAttributes<HTMLDivElement> {}
    const savedName = getUserName();

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
      {/* <WordArtTitle title={`שלום ${savedName}`} style={{fontSize:30}} pickId={8}/>

      <WordArtTitle title={`שלום ${savedName}`} style={{fontSize:30}} pickId={9}/>
      
      <WordArtTitle title={`שלום ${savedName}`} style={{fontSize:30}} pickId={11}/>
      
      <WordArtTitle title={`שלום ${savedName}`} style={{fontSize:30}} pickId={13}/> */}
      
      <WordArtTitle title={`שלום ${savedName}`} style={{fontSize:30}} random/>
      <h3>{`(יש עכשיו אפשרות לתגובות ולייקים, בבקשה להחליף את השם בכפתור למטה לשם שיהיה נוח להבין מי זה אחרת זה סתם עבודה שחורה לסדר את השטויות האלה)`}</h3>
  {/* <h1>שלום {savedName}</h1> */}
        <WordArtTitle title={parseDaysToHebrew(totalNights)} style={{fontSize:30}}/>
        <LastPlaces />

        <Cards items={destinationsCards} />
        
        <TopPlaces />
      </WavesComponent>
      <div
        className={"flex-row flex-center"}
        style={{ gap: 5, maxWidth: "98vw", flexWrap: "wrap", marginBottom: 20 }}
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