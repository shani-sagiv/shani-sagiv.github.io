import React, { useState } from "react";
import { COUNTRIES } from "../../Routes";
import "./Randomoneonone.scss";

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

const Randomoneonone: React.FC<HomePageProps> = ({}) => {
  const optionsCount = 5;
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

  const [failedIndexes1, setFailedIndexes1] = useState<number[]>([]);
  const [failedIndexes2, setFailedIndexes2] = useState<number[]>([]);

  const [successPlayerIndex, setSuccessPlayerIndex] = useState<number>(-1);

  const [player1totalWins, setPlayer1totalWins] = useState<number>(0);
  const [player2totalWins, setPlayer2totalWins] = useState<number>(0);

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
    setFailedIndexes1([]);
    setFailedIndexes2([]);
    setSuccessPlayerIndex(-1);
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
    if (successPlayerIndex === 1) {
      setPlayer1totalWins(player1totalWins + 1);
    } else if (successPlayerIndex === 2) {
      setPlayer2totalWins(player2totalWins + 1);
    }
    reset();
    if (!optionsWithImages) {
      return;
    }
    randomize(dests, optionsWithImages);
  };

  const renderOptions = (playerIndex: number) => {
    if (!optionsWithImages) {
      return null;
    }
    const onCorrectOptionClick = (playerIndex: number) => {
      setFailedIndexes1([]);
      setFailedIndexes2([]);
      // if (!destinationAnswered) {
      setDestinationAnswered(true);
      setSuccessPlayerIndex(playerIndex);
      // }
      // setAllAnswered(true);
    };

    const onWrongOptionClick = (i: number) => {
      if (playerIndex === 1) {
        setFailedIndexes1([...failedIndexes1, i]);
        setPlayer1totalWins(player1totalWins - 1);
      } else if (playerIndex === 2) {
        setFailedIndexes2([...failedIndexes2, i]);
        setPlayer2totalWins(player2totalWins - 1);
      }
    };

    return (!destinationAnswered ? randomDestinations : randomDestinations).map(
      (dest, i) => (
        <div
          className={classnames("option", {
            wrong:
              playerIndex === 1
                ? failedIndexes1.includes(i)
                : failedIndexes2.includes(i),
          })}
          onClick={() => {
            // @ts-ignore
            dest === optionsWithImages[answerIndex].countryName
              ? onCorrectOptionClick(playerIndex)
              : onWrongOptionClick(i);
          }}
          style={{ padding: "3px 4px" }}
        >
          {dest}
        </div>
      ),
    );
  };

  interface OptionsProps {
    style?: React.CSSProperties;
    playerIndex: number;
  }
  const Options: React.FC<OptionsProps> = ({ style = {}, playerIndex }) => {
    return !destinationAnswered ? (
      <>
        <h3 style={{ ...style, height: 0, margin: 0 }}>
          {playerIndex === 2 ? player2totalWins : null}
        </h3>
        <div
          className={"flex-row"}
          style={{
            flexWrap: "wrap",
            justifyContent: "space-around",
            ...style,
          }}
        >
          {renderOptions(playerIndex)}
        </div>
        <h3 style={{ ...style, height: 0, margin: 0 }}>
          {playerIndex === 1 ? player1totalWins : null}
        </h3>
      </>
    ) : (
      <>
        <span>
          {answerIndex && answer && destinationAnswered && (
            <span style={{ margin: 0 }}>
              {answer.countryName}
              <br />
              {answer.key}
            </span>
          )}
        </span>
        <span>
          {successPlayerIndex === playerIndex ? (
            <RainbowText style={style} text={"היידה"} />
          ) : (
            <RainbowText style={style} text={"מביך"} />
          )}
        </span>
      </>
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
          height: "26vh",
          width: "300px",
          objectFit: "cover",
          // paddingBottom: 10,
          ...style,
        }}
      />
    );
  };

  if (!optionsWithImages || !answer) {
    return null;
  }
  return (
    <div
      className={"random-image"}
      style={{
        justifyContent: "center",
        position: "relative",
        height: "calc(100% - 25px)",
        marginTop: 25,
      }}
    >
      <Options style={{ transform: "rotate(-180deg)" }} playerIndex={1} />
      <Image style={{ transform: "rotate(-180deg)" }} />
      <div
        style={{
          width: "100%",
          height: 2,
          margin: "2px 0",
          backgroundColor: "black",
        }}
      />
      <Image />

      <Options playerIndex={2} />

      <Button
        style={{
          position: "absolute",
          right: -20,
          transform: "rotate(-90deg)",
        }}
        onClick={() => refresh()}
      >
        רענון
      </Button>
    </div>
  );
};
export default Randomoneonone;
