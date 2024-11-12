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

  const handleChangeDest = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDest(event.target.value);
  };
  const handleChangeAttr = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedAttr(event.target.value);
  };

  React.useEffect(() => {
    LoadAllOptionsData();
  }, []);

  function LoadAllOptionsData() {
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
      <span style={{ height: "60vh", width: "100%", marginBottom: 20 }}>
        <ImageGallery
          style={{ height: "60vh", width: "100%" }}
          images={randomImageObject?.images || []}
        />
      </span>

      <OptionsSelect
        title={"איפה?"}
        onChange={(v) => setSelectedDest(v)}
        options={destinationsOptions || []}
      />

      {selectedDest && attractionsOptions && (
        <OptionsSelect
          title={"ואיפה בדיוק?"}
          options={attractionsOptions[selectedDest]}
          onChange={(v) => setSelectedAttr(v)}
        />
      )}

      {reveal && (
        <>
          <h1>{randomImageObject?.object.name}</h1>
          <h1>{randomImageObject ? randomImageObject?.countryName : null}</h1>
        </>
      )}
      <Button onClick={() => setReveal(!reveal)}>תשובה</Button>
      <Button onClick={() => LoadAllOptionsData()}>רענון</Button>
      {renderResult()}
    </div>
  );
};
export default Random;
