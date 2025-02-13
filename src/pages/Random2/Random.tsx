import React, { useState } from "react";
import { COUNTRIES } from "../../Routes";
import "./Random.scss";
import {
  AllRecommendationTypes,
  AttractionRecommendation,
  HotelRecommendation,
  NightLifeRecommendation,
  Recommendation,
} from "models";
import { getNameToDisplay, getRandomNumbers } from "helpers/dateHelpers";
import classnames from "classnames";
import { Button } from "components/Button";
interface HomePageProps extends React.HTMLAttributes<HTMLDivElement> {}

type imagesOptions = {
  images: string[];
  object: Recommendation;
  countryName: string;
};

const Random: React.FC<HomePageProps> = ({}) => {
  const optionsCount = 5;
  const [optionsWithImages, setOptionsWithImages] = useState<
    imagesOptions[] | null
  >(null);
  const [answerImageIndex, setAnswerImageIndex] = useState<number>(0);

  const [randomDestinations, setRandomDestinations] = useState<string[]>([]);

  const [failedIndexes, setFailedIndexes] = useState<number[]>([]);
  const [answerIndex, setAnswerIndex] = useState<null | number>(null);
  const [shuffledIndexes, setShuffledIndexes] = useState<null | number[]>(null);

  const answer: imagesOptions | null =
    optionsWithImages && answerIndex ? optionsWithImages[answerIndex] : null;

  const [destinationAnswered, setDestinationAnswered] = useState(false);
  const [nameAnswered, setNameAnswered] = useState(false);
  const [descriptionAnswered, setDescriptionAnswered] = useState(false);

  React.useEffect(() => {
    LoadAllOptionsData();
  }, []);
  const reset = () => {
    setDestinationAnswered(false);
    setNameAnswered(false);
    setDescriptionAnswered(false);
    setFailedIndexes([]);
  };

  function LoadAllOptionsData() {
    reset();
    let optionsWithImagesTemp: imagesOptions[] = [];

    function handleAttraction(item: AllRecommendationTypes, destName: string) {
      if (item.images?.length) {
        optionsWithImagesTemp.push({
          images: item.images,
          object: item,
          countryName: destName,
        });
      }
    }
    let dests: string[] = [];

    COUNTRIES.forEach((country) => {
      country.destinations?.forEach((destination: any) => {
        const destName: string = destination.displayName.hebrew;
        dests.push(destName);
        destination.hotels?.forEach((hotel: HotelRecommendation) =>
          handleAttraction(hotel, destName),
        );
        destination.foods?.forEach((food: AttractionRecommendation) =>
          handleAttraction(food, destName),
        );
        destination.attractions?.forEach(
          (attraction: AttractionRecommendation) =>
            handleAttraction(attraction, destName),
        );
        destination.nightlife?.forEach((nightlife: NightLifeRecommendation) =>
          handleAttraction(nightlife, destName),
        );
      });
    });

    const randomIndexes: number[] = getRandomNumbers(
      optionsWithImagesTemp.length - 1,
      optionsCount + 1,
    );
    // @ts-ignore
    const randomPickId: number = randomIndexes.pop();
    const currentAnswer = optionsWithImagesTemp[randomPickId];

    setOptionsWithImages(optionsWithImagesTemp);
    setAnswerIndex(randomPickId);
    setShuffledIndexes(
      [...randomIndexes, randomPickId].sort(() => Math.random() - 0.5),
    );
    dests = dests.filter(
      (d) => d !== optionsWithImagesTemp[randomPickId].countryName,
    );

    const randomDestIndexes: number[] = getRandomNumbers(
      dests.length - 1,
      optionsCount,
    );
    const shuffledDestinations = [
      ...randomDestIndexes.map((i) => dests[i]),
      currentAnswer.countryName,
    ].sort(() => Math.random() - 0.5);
    setRandomDestinations(shuffledDestinations);
    setAnswerImageIndex(
      Math.floor(Math.random() * currentAnswer.images.length),
    );
  }

  const renderOptions = () => {
    if (!optionsWithImages || descriptionAnswered) {
      return null;
    }
    const onCorrectOptionClick = () => {
      setFailedIndexes([]);
      if (!destinationAnswered) {
        setDestinationAnswered(true);
      } else if (!nameAnswered) {
        setNameAnswered(true);
      } else if (!descriptionAnswered) {
        setDescriptionAnswered(true);
      }
    };

    const onWrongOptionClick = (i: number) => {
      setFailedIndexes([...failedIndexes, i]);
    };

    const renderOption = (option: imagesOptions) => {
      if (!destinationAnswered) {
        return option.countryName;
      } else if (!nameAnswered) {
        return option.object.name;
      } else if (!descriptionAnswered) {
        return option.object.description;
      }
    };

    if (!destinationAnswered) {
      return randomDestinations.map((dest, i) => (
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
      ));
    }

    return shuffledIndexes?.map((i) => {
      const currentCorrect = i === answerIndex;
      return (
        <div
          className={classnames("option", { wrong: failedIndexes.includes(i) })}
          onClick={() => {
            currentCorrect ? onCorrectOptionClick() : onWrongOptionClick(i);
          }}
        >
          {renderOption(optionsWithImages[i])}
        </div>
      );
    });
  };

  if (!optionsWithImages || !answer) {
    return null;
  }
  return (
    <div className={"random-image"}>
      {/*<span style={{ height: "60vh", width: "100%" }}>*/}
      <img
        src={answer.images[answerImageIndex]}
        style={{
          maxHeight: "60vh",
          // height: "60vh",
          width: "100%",
          objectFit: "cover",
          paddingBottom: 10,
        }}
      />
      <div style={{ height: "80px", overflow: "hidden" }}>
        {answerIndex && (
          <>
            {destinationAnswered && <div>{answer.countryName}</div>}
            {nameAnswered && <div>{answer.object.name}</div>}
            {descriptionAnswered && <div>{answer.object.description}</div>}
          </>
        )}
      </div>
      <div
        className={"flex-row"}
        style={{
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {renderOptions()}
      </div>
      {/*</span>*/}

      {/*<div className={"flex-row flex-center"} style={{ marginTop: 20 }}>*/}
      {/*  <Button onClick={() => setReveal(!reveal)}>ויתור</Button>*/}
      <Button onClick={() => LoadAllOptionsData()}>רענון</Button>
      {/*</div>*/}
    </div>
  );
};
export default Random;
