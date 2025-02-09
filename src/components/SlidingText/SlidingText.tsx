import React from "react";
import "./SlidingText.scss";

const SlidingText: React.FC<any> = ({ children }) => {
  return (
    <div className="sliding-text-container ">
      <span className="sliding-text">{children}</span>
    </div>
  );
};

export default SlidingText;
