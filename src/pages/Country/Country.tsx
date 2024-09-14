import React from "react";
import "./Country.scss";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import { Collapsible } from "components/Collapsible";
import { Collapsibles } from "components/Collapsibles";
// import {Destination} from "pages/Destination/index";

interface CountryProps extends React.HTMLAttributes<HTMLDivElement> {}

const Country: React.FC<CountryProps> = ({}) => {
  const navigate = useNavigate();
  const items2 = [
    {
      title: "Click to Expand 1",
      content:
        "This is the collapsible content that will be shown when clicked!",
    },
    {
      title: "Click to Expand 2",
      content: (
        <>
          {/*<div style={{ width: "100%" }}>*/}
          <p>
            This is the collapsible content that will be shown when clicked!
          </p>
          <img
            style={{
              height: 100,
              width: 100,
              margin: 10,
              float: "left", // Makes the image float to the left
              marginRight: "10px", // Adds some space between the image and text
            }}
            src={
              "https://www.meital-labs.co.il/wp-content/uploads/2018/04/%D7%9E%D7%A7%D7%9C%D7%95%D7%9F-%D7%90%D7%95%D7%A1%D7%98%D7%A8%D7%9C%D7%99.jpg"
            }
          />
          <p>
            This is the collapsible content that will be shown when clicked!
            This is the collapsible content that will be shown when clicked!
            <img
              style={{
                height: 100,
                width: 100,
                margin: 10,
                float: "right", // Makes the image float to the left
                marginRight: "10px", // Adds some space between the image and text
              }}
              src={
                "https://www.meital-labs.co.il/wp-content/uploads/2018/04/%D7%9E%D7%A7%D7%9C%D7%95%D7%9F-%D7%90%D7%95%D7%A1%D7%98%D7%A8%D7%9C%D7%99.jpg"
              }
            />
            This is the collapsible content that will be shown when clicked!
            This is the collapsible content that will be shown when clicked!
          </p>
        </>
      ),
    },
    {
      title: "Click to Expand 3",
      content:
        "This is the collapsible content that will be shown when clicked!",
    },
    {
      title: "Click to Expand 4",
      content:
        "This is the collapsible content that will be shown when clicked!",
    },
  ];

  return (
    <div className={"country"}>
      <Title title={"Country"} />
      <Collapsibles items={items2} />

      <div
        style={{
          width: "100%",
          height: "auto",
          border: "2px solid red",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          overflow: "auto",
          justifyContent: "space-around",
        }}
      >
        {Array.from({ length: 20 }, (_, index) => (
          <Card onClick={() => navigate("/Destination")} />
        ))}
      </div>
    </div>
  );
};
export default Country;
