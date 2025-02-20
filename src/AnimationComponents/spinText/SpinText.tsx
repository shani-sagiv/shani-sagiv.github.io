import React, { useState } from "react";
import "./SpinText.scss";

interface SpinTextProps extends React.HTMLAttributes<HTMLDivElement> {}

const SpinText: React.FC<SpinTextProps> = ({}) => {
  return (
    // <div className="spinTextBody">
    <div className="spin-container">
      <h1 className="spin-text">היידה</h1>
    </div>
    // </div>
  );
};
export default SpinText;
