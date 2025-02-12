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
import { getNameToDisplay } from "helpers/dateHelpers";
import { Button, ImageGallery, OptionsSelect } from "components";
interface HomePageProps extends React.HTMLAttributes<HTMLDivElement> {}

type imagesOptions = {
  images: string[];
  object: Recommendation;
  countryName: string;
};

const Random: React.FC<HomePageProps> = ({}) => {
  const [selectedDest, setSelectedDest] = useState<string | null>(null);
  const [selectedAttr, setSelectedAttr] = useState<string | null>(null);
  const [reveal, setReveal] = useState<boolean>(false);

  const [randomImageObject, setRandomImageObject] =
    useState<imagesOptions | null>(null);
  const [optionsWithImages, setOptionsWithImages] = useState<
    imagesOptions[] | null
  >(null);
  const [destinationsOptions, setDestinationsOptions] = useState<
    string[] | null
  >(null);
  const [attractionsOptions, setAttractionsOptions] = useState<{
    [key: string]: string[];
  } | null>(null);

  React.useEffect(() => {
    LoadAllOptionsData();
  }, [LoadAllOptionsData]);

  function LoadAllOptionsData() {
    setSelectedAttr(null);
    setSelectedDest(null);
    setReveal(false);
    let optionsWithImagesTemp: imagesOptions[] = [];
    let destinationsOptionsTemp: string[] = [];
    let attractionsOptionsTemp: { [key: string]: string[] } = {};

    function handleAttraction(item: AllRecommendationTypes, destName: string) {
      if (item.images?.length) {
        attractionsOptionsTemp[destName].push(item.name);
        optionsWithImagesTemp.push({
          images: item.images,
          object: item,
          countryName: destName,
        });
      }
    }

    COUNTRIES.forEach((country) => {
      country.destinations?.forEach((destination: any) => {
        const destName: string = getNameToDisplay(destination.displayName);
        destinationsOptionsTemp.push(destName);
        if (!attractionsOptionsTemp[destName]) {
          attractionsOptionsTemp[destName] = [];
        }
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

    setAttractionsOptions(attractionsOptionsTemp);
    setDestinationsOptions(destinationsOptionsTemp);
    setOptionsWithImages(optionsWithImagesTemp);
    setRandomImageObject(
      optionsWithImagesTemp[
        Math.floor(Math.random() * optionsWithImagesTemp.length)
      ],
    );
  }

  const renderResult = () => {
    if (selectedAttr && selectedDest) {
      {
        if (
          randomImageObject?.countryName === selectedDest &&
          randomImageObject.object.name === selectedAttr
        ) {
          return <h1>צדקתתת</h1>;
        }
      }
      return <h1>טעותתתת</h1>;
    }
    return null;
  };

  if (!optionsWithImages) {
    return null;
  }
  return (
    <div className={"random-image"}>
      {/*<span style={{ height: "60vh", width: "100%" }}>*/}
      <img
        src={randomImageObject?.images[0]}
        style={{
          // maxHeight: "60vh",
          height: "60vh",
          width: "100%",
          objectFit: "contain",
          paddingBottom: 10,
        }}
      />
      {/*</span>*/}

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "60%",
          alignItems: "center",
        }}
      >
        <div style={{ width: "80%", marginLeft: 10 }}>
          <OptionsSelect
            title={"איפה?"}
            onChange={(v) => setSelectedDest(v)}
            options={destinationsOptions || []}
          />
        </div>
        {selectedDest
          ? randomImageObject?.countryName === selectedDest
            ? "✓"
            : "✗"
          : null}
      </div>

      {selectedDest && attractionsOptions && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "60%",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <div style={{ width: "80%", marginLeft: 10 }}>
            <OptionsSelect
              title={"ואיפה בדיוק?"}
              options={attractionsOptions[selectedDest]}
              onChange={(v) => setSelectedAttr(v)}
            />
          </div>
          {selectedAttr
            ? randomImageObject?.object.name === selectedAttr
              ? "✓"
              : "✗"
            : null}
        </div>
      )}

      {reveal && (
        <>
          <span>{randomImageObject?.object.name}</span>
          <span>
            {randomImageObject ? randomImageObject?.countryName : null}
          </span>
        </>
      )}
      <div className={"flex-row flex-center"} style={{ marginTop: 20 }}>
        <Button onClick={() => setReveal(!reveal)}>ויתור</Button>
        <Button onClick={() => LoadAllOptionsData()}>רענון</Button>
      </div>
    </div>
  );
};
export default Random;
