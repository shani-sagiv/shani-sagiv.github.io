import React from "react";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import { Cards } from "components/Cards";

interface HomePageProps extends React.HTMLAttributes<HTMLDivElement> {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const navigate = useNavigate();
  const destinations = Array.from({ length: 10 }, (_, index) => ({
    title: "יעד בדיקה " + index,
    image: "https://www.yo-yoo.co.il/coolpics/images/uploads/67219d.jpg",
    navigate: "/Country",
  }));

  return (
    <div className={"home-page"}>
      <div
        style={{
          marginTop: "5vh",
          width: "90%",
          height: "40vh",
          border: "2px solid red",
        }}
      />
      <div style={{ width: "100%", height: "200px", overflow: "auto" }}>
        <Cards items={destinations} style={{ flexWrap: "nowrap" }} />
      </div>

      <img
        src={"https://m.media-amazon.com/images/I/71ZVA6QfbOL._AC_SL1000_.jpg"}
        style={{
          width: "90%",
          height: "60vh",
          border: "2px solid red",
        }}
      />

      {/*<Button onClick={console.log}>Hello</Button>*/}
      {/*<Button onClick={console.log}>שני לוזרית?</Button>*/}
      {/*<Button onClick={console.log} variant={"secondary"}>*/}
      {/*  שני לוזרית...*/}
      {/*</Button>*/}
    </div>
  );
};
export default HomePage;
