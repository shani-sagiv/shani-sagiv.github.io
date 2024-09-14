import React from "react";
import "./Card.scss";

// @ts-ignore
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick: () => unknown;
  title: string | React.ReactNode;
  image: string;
}

const Card: React.FC<CardProps> = ({ onClick, title, image }) => {
  return (
    <div
      style={{
        height: "150px", // Increased height for better view
        width: "150px", // Increased width for better view
        border: "1px solid blue",
        flexShrink: 0,
        margin: "20px 10px",
        position: "relative", // This is important to position the title over the image
        backgroundColor: "yellow",
        cursor: "pointer", // Better UX for clickable element
        display: "flex", // Flexbox for centering
        justifyContent: "center", // Center title horizontally
        alignItems: "center", // Center title vertically
        borderRadius: "10px",
      }}
      onClick={onClick}
    >
      {/* Title in the center */}
      <h1
        style={{
          position: "absolute",
          color: "white", // Make the title readable
          fontSize: "1.5rem",
          textAlign: "center",

          zIndex: 2, // Make sure the title is above the image
        }}
      >
        {title}
      </h1>

      {/* Image as background */}
      <img
        src={image}
        alt="card"
        style={{
          height: "100%",
          borderRadius: "10px",

          width: "100%",
          objectFit: "cover", // Makes sure the image covers the card area properly
          zIndex: 1, // Below the title
        }}
      />
    </div>
  );
};

export default Card;
