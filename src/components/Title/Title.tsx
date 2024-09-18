import React from "react";
import "./Title.scss";

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title, style }) => {
  return (
    <h1
      style={{
        // width: "100%",
        fontSize: 40,
        // boxSizing: "border-box",
        fontWeight: "bold",
        margin: "0 10px 0",
        ...style,
        // margin: "0",
      }}
    >
      {title}
    </h1>
  );
  const wordArtIds = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty",
    "twentyone",
    "twentytwo",
  ];

  // Function to return a random ID from the array
  const getRandomWordArtId = () => {
    const randomIndex = Math.floor(Math.random() * wordArtIds.length);
    return wordArtIds[randomIndex];
  };

  return (
    <section
      className={`style-${getRandomWordArtId()}`}
      style={{ margin: "10px 30px" }}
    >
      <div className="wordart">
        <div className={`preview`}>{title}</div>
      </div>
    </section>
  );
};

export default Title;
