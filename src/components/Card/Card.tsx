import React, { CSSProperties } from "react";
import "./Card.scss";
import { DisplayName } from "models";

// interface size = "small" | "medium" | "large"
// @ts-ignore
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  onClick: () => unknown;
  displayName: DisplayName;
  image: string;
  inProgress?: boolean;
  bottomData?: string;
  style?: CSSProperties;
  size?: "small" | "medium";
}

const Card: React.FC<CardProps> = ({
  onClick,
  displayName,
  image,
  inProgress,
  bottomData,
  style,
  size = "medium",
}) => {
  const H1FontSize = size === "medium" ? "2.2rem" : "1.5rem";
  const H2FontSize = size === "medium" ? "1rem" : "0.6rem";
  const cardStyle =
    size === "medium"
      ? {
          height: "42vw",
          width: "42vw",
        }
      : {
          height: "25vw",
          width: "25vw",
        };

  return (
    <div
      className={"card"}
      onClick={onClick}
      style={{ ...cardStyle, ...style }}
    >
      {/* Title in the center */}
      <h1
        style={{
          position: "absolute",
          color: "white", // Make the title readable
          fontSize: H1FontSize,
          textAlign: "center",
          zIndex: 2, // Make sure the title is above the image
          top: "16%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          width: "100%",
        }}
      >
        {displayName.hebrew}
      </h1>
      <h1
        style={{
          position: "absolute",
          color: "white", // Make the title readable
          fontSize: H2FontSize,
          textAlign: "center",
          top: "55%",
          zIndex: 2, // Make sure the title is above the image
        }}
      >
        {displayName.english}
      </h1>
      <span
        style={{
          position: "absolute",
          color: "white", // Make the title readable
          // fontSize: "1rem",
          textAlign: "center",
          bottom: "0",
          zIndex: 2, // Make sure the title is above the image
        }}
      >
        {bottomData}
      </span>
      {/* Image as background */}
      <img src={image} alt="" className={"card-image"} />
      {inProgress && <div className={"in-build"}>עובדים על זה</div>}
    </div>
  );
};

export default Card;
