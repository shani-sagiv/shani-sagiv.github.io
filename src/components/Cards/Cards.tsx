import React from "react";
import "./Cards.scss";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";
import { DisplayName } from "models";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    displayName: DisplayName;
    image: string;
    navigate: string;
    inProgress?: boolean;
    bottomData?: string;
  }[];
}

const Cards: React.FC<CardProps> = ({ items, style }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "fit-content",
        flexDirection: "row",
        overflow: "auto",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        ...style,
      }}
    >
      {items.map((item, i) => (
        <Card
          onClick={() => navigate(item.navigate)}
          displayName={item.displayName}
          image={item.image}
          inProgress={item.inProgress}
          bottomData={item.bottomData}
        />
      ))}
    </div>
  );
};

export default Cards;
