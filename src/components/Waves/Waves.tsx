import React, { ReactNode, memo } from "react";
import "./Waves.scss"; // Updated styles

interface WavesProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const WavesComponent: React.FC<WavesProps> = memo(({ children }) => {
  return (
    <div className="header">
      {/* Waves */}
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
            y="10"
            fill="rgba(202, 236, 251, 0.8)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="10"
            fill="rgba(195, 231, 239, 0.8)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="13"
            fill="rgba(202, 236, 251, 0.6)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="13"
            fill="rgba(194, 230, 238, 0.6)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(202, 236, 251, 0.6)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(202, 236, 251, 0.4)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="6"
            fill="rgba(202, 236, 251, 0.3)"
          />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="9"
            fill="rgba(202, 236, 251, 0.2)"
          />
        </g>
      </svg>

      {/* Content */}
      <div className="content">{children}</div>
    </div>
  );
});

export default WavesComponent;
