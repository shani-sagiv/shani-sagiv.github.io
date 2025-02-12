import React, { useState } from "react";
import { COUNTRIES } from "../../Routes";
import "./Random.scss";
import {
  AllRecommendationTypes,
  AttractionGroupRecommendation,
  AttractionRecommendation,
  HotelRecommendation,
  Info,
  InfoRecommendation,
  KidsRecommendation,
  NightLifeRecommendation,
  Recommendation,
  RestaurantRecommendation,
} from "models";
import { getNameToDisplay, getRandomNumbers } from "helpers/dateHelpers";
import classnames from "classnames";
import { Button } from "components/Button";
import {
  getAggregateLocations,
  sortAllDestinationsByDate,
  sortDestinationsByDate,
} from "../../helpers/locations.helpers";
interface HomePageProps extends React.HTMLAttributes<HTMLDivElement> {}

type imagesOptions = {
  images: string[];
  key: string;
  // object: Recommendation;
  countryName: string;
};

const Random: React.FC<HomePageProps> = ({}) => {
  console.log("HERE");
  // console.log(sortAllDestinationsByDate());
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

  React.useEffect(() => {
    LoadAllOptionsData();
  }, [LoadAllOptionsData]);
  const reset = () => {
    setDestinationAnswered(false);
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
    let dests: string[] = [];
    COUNTRIES.forEach((country) => {
      country.destinations?.forEach((destination: any) => {
        const destName: string = getNameToDisplay(destination.displayName);
        dests.push(destName);
        const options = [
          "hotels",
          "foods",
          "attractions",
          "kids",
          "nightlife",
          "gold_recommendation",
        ];
        options.forEach((key) => {
          destination[key]?.forEach((single: any) => {
            handleAttraction(single.images, destName, key);
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
    if (!optionsWithImages) {
      return null;
    }
    const onCorrectOptionClick = () => {
      setFailedIndexes([]);
      if (!destinationAnswered) {
        setDestinationAnswered(true);
      }
    };

    const onWrongOptionClick = (i: number) => {
      setFailedIndexes([...failedIndexes, i]);
    };

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
      <div style={{ height: "30px", overflow: "hidden" }}>
        {answerIndex && (
          <>
            {destinationAnswered && (
              <div>
                {answer.countryName} {answer.key}
              </div>
            )}
          </>
        )}
      </div>
      {!destinationAnswered ? (
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
        <h1>היידה</h1>
      )}

      <Button onClick={() => LoadAllOptionsData()}>רענון</Button>
    </div>
  );
};
export default Random;
