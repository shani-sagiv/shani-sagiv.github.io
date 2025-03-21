import React, { useState } from "react";
import { COUNTRIES } from "../../Routes";
import "./Random.scss";

import { getNameToDisplay, getRandomNumbers } from "helpers/dateHelpers";
import classnames from "classnames";
import { Button } from "components/Button";
import SpinText from "../../AnimationComponents/spinText/SpinText";
import RainbowText from "../../AnimationComponents/RainbowText/RainbowText";
import { getAllLocationsImages } from "../../helpers/locations.helpers";
interface HomePageProps extends React.HTMLAttributes<HTMLDivElement> {}

export type imagesOptions = {
  images: string[];
  key: string;
  // object: Recommendation;
  countryName: string;
};

const Random: React.FC<HomePageProps> = ({}) => {
  const optionsCount = 7;
  const [optionsWithImages, setOptionsWithImages] = useState<
    imagesOptions[] | null
  >(null);

  const [dests, steDests] = useState<string[]>([]);
  const [randomDestinations, setRandomDestinations] = useState<string[]>([]);

  const [answerImageIndex, setAnswerImageIndex] = useState<number>(0);
  const [answerIndex, setAnswerIndex] = useState<null | number>(null);
  const answer: imagesOptions | null =
    optionsWithImages && answerIndex ? optionsWithImages[answerIndex] : null;

  const [destinationAnswered, setDestinationAnswered] = useState(false);

  const [failedIndexes, setFailedIndexes] = useState<number[]>([]);

  React.useEffect(() => {
    const { destsOptions, optionsWithImages } = getAllLocationsImages();
    setOptionsWithImages(optionsWithImages);
    steDests(destsOptions);
    reset();
    randomize(destsOptions, optionsWithImages);

    // LoadAllOptionsData(destsOptions, optionsWithImages);
  }, []);

  const reset = () => {
    setDestinationAnswered(false);
    setAnswerIndex(null);
    setFailedIndexes([]);
  };

  const randomize = (destsOptions_: string[], optionsWithImages_: any) => {
    const randomIndexes: number[] = getRandomNumbers(
      optionsWithImages_.length - 1,
      optionsCount + 1,
    );

    // @ts-ignore
    const randomPickId: number = randomIndexes.pop();
    const currentAnswer = optionsWithImages_[randomPickId];
    setOptionsWithImages(optionsWithImages_);
    setAnswerIndex(randomPickId);

    const temp_dests = destsOptions_.filter(
      (d: any) => d !== optionsWithImages_[randomPickId].countryName,
    );

    const randomDestIndexes: number[] = getRandomNumbers(
      temp_dests.length - 1,
      optionsCount,
    );
    const shuffledDestinations = [
      ...randomDestIndexes.map((i) => temp_dests[i]),
      currentAnswer.countryName,
    ].sort(() => Math.random() - 0.5);
    setRandomDestinations(shuffledDestinations);
    setAnswerImageIndex(
      Math.floor(Math.random() * currentAnswer.images.length),
    );
  };

  const refresh = () => {
    reset();
    if (!optionsWithImages) {
      return;
    }
    randomize(dests, optionsWithImages);
  };

  const renderOptions = () => {
    if (!optionsWithImages) {
      return null;
    }
    const onCorrectOptionClick = () => {
      setFailedIndexes([]);
      // if (!destinationAnswered) {
      setDestinationAnswered(true);
      // }
      // setAllAnswered(true);
    };

    const onWrongOptionClick = (i: number) => {
      setFailedIndexes([...failedIndexes, i]);
    };

    return (!destinationAnswered ? randomDestinations : randomDestinations).map(
      (dest, i) => (
        <div
          className={classnames("option", { wrong: failedIndexes.includes(i) })}
          onClick={() => {
            // @ts-ignore
            dest === optionsWithImages[answerIndex].countryName
              ? onCorrectOptionClick()
              : onWrongOptionClick(i);
          }}
        >
          {dest}
        </div>
      ),
    );
  };

  interface OptionsProps {
    style?: React.CSSProperties;
  }
  const Options: React.FC<OptionsProps> = ({ style = {} }) => {
    return !destinationAnswered ? (
      <div
        className={"flex-row"}
        style={{
          flexWrap: "wrap",
          justifyContent: "space-around",
          ...style,
        }}
      >
        {renderOptions()}
      </div>
    ) : (
      <RainbowText text={"היידה"} />
    );
  };
  interface ImageProps {
    style?: React.CSSProperties;
  }
  const Image: React.FC<ImageProps> = ({ style = {} }) => {
    return (
      <img
        src={answer?.images[answerImageIndex]}
        style={{
          // height: "20vh",
          height: "60vh",
          width: "100%",
          // transform: "rotate(-180deg)",

          objectFit: "cover",
          paddingBottom: 10,
          ...style,
        }}
      />
    );
  };

  if (!optionsWithImages || !answer) {
    return null;
  }
  return (
    <div className={"random-image"}>
      <Image />

      <Options />

      <Button onClick={() => refresh()}>רענון</Button>
    </div>
  );
};
export default Random;
