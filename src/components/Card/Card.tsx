import React from "react";
import "./Card.scss";
import { DisplayName } from "models";

// @ts-ignore
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick: () => unknown;
  displayName: DisplayName;
  image: string;
  inProgress?: boolean;
}

const Card: React.FC<CardProps> = ({
  onClick,
  displayName,
  image,
  inProgress,
}) => {
  return (
    <div className={"card"} onClick={onClick}>
      {/* Title in the center */}
      <h1
        style={{
          position: "absolute",
          color: "white", // Make the title readable
          fontSize: "2.2rem",
          textAlign: "center",
          zIndex: 2, // Make sure the title is above the image
          top: "16%",
        }}
      >
        {displayName.hebrew}
      </h1>
      <h1
        style={{
          position: "absolute",
          color: "white", // Make the title readable
          fontSize: "1rem",
          textAlign: "center",
          top: "55%",
          zIndex: 2, // Make sure the title is above the image
        }}
      >
        {displayName.english}
      </h1>

      {/* Image as background */}
      <img src={image} alt="" className={"card-image"} />
      {inProgress && <div className={"in-build"}>עובדים על זה</div>}
    </div>
  );
};

export default Card;
