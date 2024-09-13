import React from "react";
import "./Title.scss";

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <div
      style={{
        width: "90%",
        height: "auto",
        textAlign: "right",
        border: "2px solid red",
      }}
    >
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
