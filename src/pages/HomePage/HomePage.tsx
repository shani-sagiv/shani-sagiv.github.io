import React from "react";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import { Cards } from "components";
import Marquee from "react-fast-marquee";
import shaniInSunsetSrc from "assets/shani-in-sunset.jpeg";
import { COUNTRIES } from "../../Routes";
import { getNameToDisplay } from "../../helpers/dateHelpers";
import WavesComponent from "components/Waves/Waves";

interface HomePageProps extends React.HTMLAttributes<HTMLDivElement> {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const navigate = useNavigate();
  // const destinations = Array.from({ length: 10 }, (_, index) => ({
  //   title: "יעד בדיקה " + index,
  //   image: "https://www.yo-yoo.co.il/coolpics/images/uploads/67219d.jpg",
  //   navigate: "/Thailand",
  // }));
  const destinations = COUNTRIES.map(({ country }) => ({
    // title: getNameToDisplay(country.displayName),
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
        <span className={"rainbow-text"} style={{ padding: "0 10px" }}>
          👑 שגיב ושני המלכים{" "}
        </span>
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
