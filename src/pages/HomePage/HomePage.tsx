import React from "react";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import { Cards, Map } from "components";
import Marquee from "react-fast-marquee";
import shaniInSunsetSrc from "assets/shani-in-sunset.jpeg";
import { COUNTRIES } from "../../Routes";
import { getNameToDisplay } from "../../helpers/dateHelpers";

interface HomePageProps extends React.HTMLAttributes<HTMLDivElement> {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const navigate = useNavigate();
  // const destinations = Array.from({ length: 10 }, (_, index) => ({
  //   title: "יעד בדיקה " + index,
  //   image: "https://www.yo-yoo.co.il/coolpics/images/uploads/67219d.jpg",
  //   navigate: "/Thailand",
  // }));
  const destinations = COUNTRIES.map(({ country }) => ({
    title: getNameToDisplay(country.displayName),
    image: country.profileImg,
    navigate: country.id,
  }));

  return (
    <div className={"home-page"}>
      <div className={"drops-fade"}>
        <Marquee
          autoFill
          direction={"right"}
          style={{
            position: "absolute",
            direction: "ltr",
            top: 0,
            right: 0,
            width: "100%",
          }}
        >
          <span style={{ padding: "0 10px" }}>👑 שגיב ושני המלכים </span>
        </Marquee>
        {/*<MarqueeText text={"שגיב ושני המלכים"} />*/}
        <img src={shaniInSunsetSrc} />
      </div>
      {/*<img*/}
      {/*  style={{*/}
      {/*    // marginTop: "5vh",*/}
      {/*    width: "100%",*/}
      {/*    height: "40vh",*/}
      {/*    // maskImage: "radial-gradient(circle at bottom, transparent 30%, black 100%)"*/}
      {/*  }}*/}
      {/*  src={"https://i.ytimg.com/vi/Hl9imbx9QBY/maxresdefault.jpg"}*/}
      {/*/>*/}

      <div
        style={{
          width: "100%",
          height: "200px",
          overflow: "auto",
          marginTop: -40,
        }}
      >
        <Cards
          items={destinations}
          style={{ flexWrap: "nowrap", justifyContent: "flex-start" }}
        />
      </div>

      {/*<img*/}
      {/*  src={"https://m.media-amazon.com/images/I/71ZVA6QfbOL._AC_SL1000_.jpg"}*/}
      {/*  style={{*/}
      {/*    width: "90%",*/}
      {/*    height: "60vh",*/}
      {/*    border: "2px solid red",*/}
      {/*  }}*/}
      {/*/>*/}

      {/*<MarqueeText onClick={console.log}>Hello</MarqueeText>*/}
      {/*<MarqueeText onClick={console.log}>שני לוזרית?</MarqueeText>*/}
      {/*<MarqueeText onClick={console.log} variant={"secondary"}>*/}
      {/*  שני לוזרית...*/}
      {/*</MarqueeText>*/}
    </div>
  );
};
export default HomePage;
