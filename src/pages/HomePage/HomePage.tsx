import React from "react";
import "./HomePage.scss";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";

interface HomePageProps extends React.HTMLAttributes<HTMLDivElement> {}

const HomePage: React.FC<HomePageProps> = ({}) => {
  const navigate = useNavigate();

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
      <div
        style={{
          width: "90%",
          height: "auto",
          border: "2px solid red",
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          overflow: "auto",
          alignContent: "center",
        }}
      >
        {Array.from({ length: 20 }, (_, index) => (
          <Card onClick={() => navigate("/Country")} />
        ))}
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
