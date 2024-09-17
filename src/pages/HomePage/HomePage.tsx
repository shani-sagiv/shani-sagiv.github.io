import React from "react";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import { Cards } from "components/Cards";
import Marquee from "react-fast-marquee";

interface HomePageProps extends React.HTMLAttributes<HTMLDivElement> {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const navigate = useNavigate();
  const destinations = Array.from({ length: 10 }, (_, index) => ({
    title: "יעד בדיקה " + index,
    image: "https://www.yo-yoo.co.il/coolpics/images/uploads/67219d.jpg",
    navigate: "/Thailand",
  }));

  return (
    <div className={"home-page"}>
      <div className={"drops-fade"}>
        <Marquee
          autoFill
          style={{ position: "absolute", top: 0, right: 0, width: "100%" }}
        >
          <span style={{ padding: "0 10px" }}>👑 שגיב ושני המלכים </span>
        </Marquee>
        {/*<MarqueeText text={"שגיב ושני המלכים"} />*/}
        <img src={"https://i.ytimg.com/vi/Hl9imbx9QBY/maxresdefault.jpg"} />
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
          marginTop: -60,
        }}
      >
        <Cards
          items={destinations}
          style={{ flexWrap: "nowrap", justifyContent: "flex-start" }}
        />
      </div>

      <img
        src={"https://m.media-amazon.com/images/I/71ZVA6QfbOL._AC_SL1000_.jpg"}
        style={{
          width: "90%",
          height: "60vh",
          border: "2px solid red",
        }}
      />

      {/*<MarqueeText onClick={console.log}>Hello</MarqueeText>*/}
      {/*<MarqueeText onClick={console.log}>שני לוזרית?</MarqueeText>*/}
      {/*<MarqueeText onClick={console.log} variant={"secondary"}>*/}
      {/*  שני לוזרית...*/}
      {/*</MarqueeText>*/}
    </div>
  );
};
export default HomePage;
