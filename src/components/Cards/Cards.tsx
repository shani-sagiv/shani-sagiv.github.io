import React from "react";
import "./Cards.scss";
import Card from "../Card/Card";
import { useNavigate } from "react-router-dom";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  items: {
    title: string | React.ReactNode;
    image: string;
    navigate: string;
  }[];
}

const Cards: React.FC<CardProps> = ({ items, style }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        overflow: "auto",
        flexWrap: "wrap",
        justifyContent: "space-around",
        ...style,
      }}
    >
      {items.map((item, i) => (
        <Card
          onClick={() => navigate(item.navigate)}
          title={item.title}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default Cards;
