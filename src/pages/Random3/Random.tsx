import React, { useState } from "react";
import { COUNTRIES } from "../../Routes";
import "./Random.scss";

import { getNameToDisplay, getRandomNumbers } from "helpers/dateHelpers";
import classnames from "classnames";
import { Button } from "components/Button";
import SpinText from "../../AnimationComponents/spinText/SpinText";
import RainbowText from "../../AnimationComponents/RainbowText/RainbowText";
interface HomePageProps extends React.HTMLAttributes<HTMLDivElement> {}

type imagesOptions = {
  images: string[];
  key: string;
  // object: Recommendation;
  countryName: string;
};

const Random: React.FC<HomePageProps> = ({}) => {
  const optionsCount = 7;
  const destinationsOptions = [
    "hotels",
    "foods",
    "attractions",
    "kids",
    "nightlife",
    "gold_recommendation",
  ];

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
  const [allAnswered, setAllAnswered] = useState<boolean>(false);

  const [failedIndexes, setFailedIndexes] = useState<number[]>([]);

  React.useEffect(() => {
    LoadAllOptionsData();
  }, []);

  const reset = () => {
    setAllAnswered(false);
    setDestinationAnswered(false);
    setAnswerIndex(null);
    // setOptionsWithImages(null);
    setFailedIndexes([]);
  };

  function LoadAllOptionsData() {
    reset();
    let optionsWithImagesTemp: imagesOptions[] = [];

    function handleAttraction(
      images: string[] | undefined,
      destName: string,
      key: string,
    ) {
      if (images?.length) {
        optionsWithImagesTemp.push({
          images: images,
          key: key,
          countryName: destName,
        });
      }
    }
    let temp_dests: string[] = [];
    COUNTRIES.forEach((country) => {
      country.destinations?.forEach((destination: any) => {
        // const destName: string = getNameToDisplay(destination.displayName);
        const destName: string = `${destination.displayName.hebrew}`;
        temp_dests.push(destName);

        destinationsOptions.forEach((key) => {
          destination[key]?.forEach((single: any) => {
            handleAttraction(single.images, destName, single?.name);
          });
        });
        handleAttraction(destination?.images, destName, "images");
        handleAttraction(destination?.shells || [], destName, "Shells");
        // todo: THIs
        // attractionsGroups?: AttractionGroupRecommendation[]; // Array of attraction recommendations
      });
    });
    if (optionsWithImagesTemp.length === 0) {
      return;
    }

    const randomIndexes: number[] = getRandomNumbers(
      optionsWithImagesTemp.length - 1,
      optionsCount + 1,
    );
    // @ts-ignore
    const randomPickId: number = randomIndexes.pop();
    const currentAnswer = optionsWithImagesTemp[randomPickId];
    setOptionsWithImages(optionsWithImagesTemp);
    setAnswerIndex(randomPickId);

    steDests(temp_dests);

    temp_dests = temp_dests.filter(
      (d) => d !== optionsWithImagesTemp[randomPickId].countryName,
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
  }

  const refresh = () => {
    reset();
    if (!optionsWithImages) {
      return;
    }
    const randomIndexes: number[] = getRandomNumbers(
      optionsWithImages.length - 1,
      optionsCount + 1,
    );
    // @ts-ignore
    const randomPickId: number = randomIndexes.pop();
    const currentAnswer = optionsWithImages[randomPickId];
    setAnswerIndex(randomPickId);
    let temp_dests = dests.filter(
      (d) => d !== optionsWithImages[randomPickId].countryName,
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

  const renderOptions = () => {
    if (!optionsWithImages) {
      return null;
    }
    const onCorrectOptionClick = () => {
      setFailedIndexes([]);
      if (!destinationAnswered) {
        setDestinationAnswered(true);
      }
      setAllAnswered(true);
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

  if (!optionsWithImages || !answer) {
    return null;
  }
  return (
    <div className={"random-image"}>
      <div className="blur-wrapper">
        <div className="circle">
          <img
            src={answer.images[answerImageIndex]}
            style={{
              height: "55vh",
              // height: "60vh",
              width: "100%",
              objectFit: "cover",
              paddingBottom: 10,
            }}
          />
        </div>
      </div>

      {answerIndex && (
        <>
          {destinationAnswered && (
            <h2 style={{ margin: 0 }}>
              {answer.countryName}
              <br />
              {answer.key}
            </h2>
          )}
        </>
      )}
      {!allAnswered ? (
        <div
          className={"flex-row"}
          style={{
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {renderOptions()}
        </div>
      ) : (
        <RainbowText text={"היידה"} />

        // <SpinText />
      )}

      <Button onClick={() => refresh()}>רענון</Button>
    </div>
  );
};
export default Random;
