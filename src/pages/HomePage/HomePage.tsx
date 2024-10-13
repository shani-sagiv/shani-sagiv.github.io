import React, { useState } from "react";
import { Button, Cards, WavesComponent } from "components";
import Marquee from "react-fast-marquee";
import shaniInSunsetSrc from "assets/shani-in-sunset.jpeg";
import bkueWavesSrc from "assets/bkue-waves.jpeg";
import { COUNTRIES } from "Routes";
import "./HomePage.scss";
import SimpleMap from "components/SimpleMap/SimpleMap";
import { sortLocationsByDate } from "../../helpers/locations.helpers";

interface HomePageProps extends React.HTMLAttributes<HTMLDivElement> {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const [mapOpen, setMapOpen] = useState(false);
  const destinations = COUNTRIES.map(({ country }) => ({
    displayName: country.displayName,
    image: country.profileImg,
    navigate: country.id,
    inProgress: country.inProgress,
  }));

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
        style={{ width: "100%", height: "50%", objectFit: "cover" }}
      />
      <WavesComponent>
        {mapOpen ? <SimpleMap /> : <Cards items={destinations} />}
        <Button onClick={() => setMapOpen(!mapOpen)}>
          {mapOpen ? "NO MAP" : "MAP"}
        </Button>
      </WavesComponent>
    </div>
  );
};
export default HomePage;
