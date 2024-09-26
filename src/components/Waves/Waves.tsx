import React, { ReactNode } from "react";
import "./Waves.scss"; // Assuming you have the CSS in a separate file

interface WavesProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const WavesComponent: React.FC<WavesProps> = ({ children }) => {
  return (
    <div className="header">
      {/* Waves Container */}
      {/*<div>*/}
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(173, 216, 230,0.7)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(0, 105, 148,0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(64, 224, 208,0.3)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="7"
            fill="rgba(64, 224, 208,0.2)"
          />

          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="8"
            fill="rgb(245, 245, 245, 0.5)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="10"
            fill="rgba(64, 224, 208,0.2)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="15"
            fill="rgb(245, 245, 245, 0.4)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="15"
            fill="rgb(245, 245, 245, 1)"
          />
        </g>
      </svg>
      {/*</div>*/}

      {/* Content */}
      <div className="content flex">{children}</div>
    </div>
  );
};

export default WavesComponent;
