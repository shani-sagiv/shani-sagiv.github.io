import React from "react";
import "./WordArtTitle.scss";

interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  random?: boolean;
  pickId?: number;
}

const WordArtTitle: React.FC<TitleProps> = ({
  title,
  style,
  random = false,
  pickId,
}) => {
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
  // const wordId = getRandomWordArtId();
  const wordId = random
    ? getRandomWordArtId()
    : pickId
      ? wordArtIds[pickId]
      : wordArtIds[10];
  return (
    <section
      className={`style-${wordId}`}
      style={{ margin: "10px 0 0 0", ...style }}
    >
      <div className="wordart">
        <div className={`preview`} style={style}>{title}</div>
      </div>
    </section>
  );
};

export default WordArtTitle;
