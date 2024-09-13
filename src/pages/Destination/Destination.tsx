import React from "react";
import "./Destination.scss";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import { Collapsible } from "components/Collapsible";

interface CountryProps extends React.HTMLAttributes<HTMLDivElement> {}

const Destination: React.FC<CountryProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <div className={"Destination"}>
      <Title title={"Destination"} />

      {/* Container with collapsibles */}
      <div
        style={{
          width: "95%",
          height: "auto",
          border: "2px solid green",
          marginBottom: "20px",
        }}
      >
        <Collapsible title="Click to Expand 1">
          This is the collapsible content that will be shown when clicked!
        </Collapsible>
        <Collapsible title="Click to Expand 2">
          This is the collapsible content that will be shown when clicked!
        </Collapsible>
        <Collapsible title="Click to Expand 3">
          This is the collapsible content that will be shown when clicked!
        </Collapsible>
      </div>

      {/* Main container */}
      <div
        style={{
          width: "100%",
          height: "auto",
          border: "2px solid red",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          overflow: "visible", // Ensure sticky works
        }}
      >
        {/* Orange sticky header */}
        <div
          style={{
            width: "100%",
            height: "100px",
            backgroundColor: "orange",
            position: "sticky",
            display: "flex",
            flexDirection: "row",
            top: 0, // Sticky at the top when scrolling down
            zIndex: 1000, // Ensure it's on top of other content
          }}
        >
          {Array.from({ length: 3 }, (_, index) => (
            <div
              key={index}
              style={{
                width: "200px",
                textAlign: "center",
                // margin: "20px 10px",
                // boxSizing: "border-box",
              }}
            >
              <h1>{index + 1}</h1>
            </div>
          ))}
        </div>

        {/* Scrollable content */}
        {Array.from({ length: 20 }, (_, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              margin: "20px 10px",
              boxSizing: "border-box",
            }}
          >
            <h1>Lorem {index + 1}</h1>
            <div>Lorem ipsum dolor sit amet.</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;
