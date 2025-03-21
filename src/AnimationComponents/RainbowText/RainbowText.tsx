import React, { useState } from "react";
import "./RainbowText.scss";

interface SpinTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  style?: React.CSSProperties;
}

const RainbowText: React.FC<SpinTextProps> = ({ text, style }) => {
  return (
    <ul className="c-rainbow" style={style}>
      <li className="c-rainbow__layer c-rainbow__layer--white">{text}</li>
      <li className="c-rainbow__layer c-rainbow__layer--orange">{text}</li>
      <li className="c-rainbow__layer c-rainbow__layer--red">{text}</li>
      <li className="c-rainbow__layer c-rainbow__layer--violet">{text}</li>
      <li className="c-rainbow__layer c-rainbow__layer--blue">{text}</li>
      <li className="c-rainbow__layer c-rainbow__layer--green">{text}</li>
      <li className="c-rainbow__layer c-rainbow__layer--yellow">{text}</li>
    </ul>
  );
};
export default RainbowText;
