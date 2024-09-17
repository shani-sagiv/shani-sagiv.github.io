import React from "react";
import "./Country.scss";
import { useNavigate } from "react-router-dom";
import { Cards, Collapsibles, Title } from "components";

interface CountryProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string;
  description?: string;
}

const Country: React.FC<CountryProps> = ({
  name = "Country test",
  description,
}) => {
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
  const destinations = Array.from({ length: 10 }, (_, index) => ({
    title: "יעד בדיקה " + index,
    image: "https://www.yo-yoo.co.il/coolpics/images/uploads/67219d.jpg",
    navigate: "/koh lanta",
  }));

  return (
    <div className={"country"}>
      <Title title={name} />
      {description ? (
        <div style={{ margin: "10px 50px" }}>{description}</div>
      ) : null}
      <Collapsibles items={items2} />
      <Cards items={destinations} />
    </div>
  );
};
export default Country;
