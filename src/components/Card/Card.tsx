import React from "react";
import "./Card.scss";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick: () => unknown;
}

const Card: React.FC<CardProps> = ({ onClick }) => {
  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        border: "1px solid blue",
        flexShrink: 0,
        margin: "20px 10px",
        display: "flex",
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
      }}
      onClick={onClick}
    />
  );
};

export default Card;
