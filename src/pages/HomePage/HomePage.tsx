import React from "react";
import { Cards, WavesComponent } from "components";
import Marquee from "react-fast-marquee";
import shaniInSunsetSrc from "assets/shani-in-sunset.jpeg";
import { COUNTRIES } from "Routes";
import "./HomePage.scss";

interface HomePageProps extends React.HTMLAttributes<HTMLDivElement> {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const destinations = COUNTRIES.map(({ country }) => ({
    displayName: country.displayName,
    image: country.profileImg,
    navigate: country.id,
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
        src={shaniInSunsetSrc}
        style={{ width: "100%", height: "50%", objectFit: "cover" }}
      />
      <WavesComponent>
        <Cards items={destinations} />
      </WavesComponent>
    </div>
  );
};
export default HomePage;
