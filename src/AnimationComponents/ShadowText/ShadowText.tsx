import React from "react";
import "./ShadowText.scss";

interface ShadowTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

const ShadowText: React.FC<ShadowTextProps> = ({ text }) => {
  return (
    <>
      <div className={"text-shadow"}>
        <p>Default paint-order</p>
        <h1>
          <span>Super</span>
          <div>
            <span>CSS</span>
            <span>World</span>
          </div>
        </h1>
      </div>

      <div className={"text-shadow"}>
        <p>paint-order: stroke fill</p>
        <h1 className="paint-order">
          <span>Super</span>
          <div>
            <span>CSS</span>
            <span>World</span>
          </div>
        </h1>
      </div>
    </>
  );
};
export default ShadowText;
