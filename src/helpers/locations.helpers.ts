import { COUNTRIES, COUNTRIES_WITHOUT_IMAGES } from "../Routes";
import { calculateDaysBetweenDates } from "./dateHelpers";
import {
  Country as CountryModel,
  Country,
  Destination,
  DisplayName,
  HotelRecommendation,
} from "models";
import { imagesOptions } from "pages/Random1on1/Randomoneonone";

export interface Location {
  displayName: DisplayName;
  hotelName?: string;
  id: string;
  country: Country;

  from: Date;
  to: Date;
  // profileImg?: string; //todo(sagiv) Check
  profileImg: string;
}

// Define `AggregatedLocation` as a single object with `totalNights` and `data` properties
type AggregatedLocation = {
  totalNights: number;
  data: Location[];
};

// `LocationsToInfo` is a mapping of unique place IDs to `AggregatedLocation` objects
type LocationsToInfo = Record<string, AggregatedLocation>;

export const sortAllDestinationsByDate = (): Location[] => {
  const locations: Location[] = [];

  COUNTRIES_WITHOUT_IMAGES.forEach((countryObj) => {
    locations.push(
      ...getAllHotels(countryObj.country, countryObj.destinations),
    );
  });

  locations.sort((a, b) => a.from.getTime() - b.from.getTime());
  return locations;
};

export const mergeLocationsByPlaceAndDate = (locationsByDate?: Location[]) => {
  const mergedLocations: Location[] = [];
  const locations = locationsByDate || sortAllDestinationsByDate();

  // locations.sort((a, b) => new Date(a.from) - new Date(b.from)); // Sort by date

  locations.forEach((location) => {
    const lastMerged = mergedLocations[mergedLocations.length - 1];

    if (lastMerged && lastMerged.id === location.id) {
      // Extend the 'to' date of the last merged location
      lastMerged.to = location.to;
    } else {
      // Add new location
      mergedLocations.push({
        id: location.id,
        displayName: location.displayName,
        country: location.country,
        profileImg: location.profileImg,
        from: location.from,
        to: location.to,
      });
    }
  });

  return mergedLocations;
};

export const sortDestinationsByDate = (
  country: CountryModel,
  destinations: Destination[],
): Location[] => {
  return getAllHotels(country, destinations).sort(
    (a, b) => a.from.getTime() - b.from.getTime(),
  );
};

export const getAggregateLocations = (): LocationsToInfo => {
  const locations = sortAllDestinationsByDate();
  return locations.reduce((acc: LocationsToInfo, location: Location) => {
    const nights = calculateDaysBetweenDates(location.from, location.to);

    if (!acc[location.id]) {
      acc[location.id] = { totalNights: 0, data: [] };
    }
    acc[location.id].totalNights += nights;
    acc[location.id].data.push(location);

    return acc;
  }, {} as LocationsToInfo); // Ensuring accumulator is of type LocationsToInfo
};

export const getTopPlaces = (count: number = 6) =>
  Object.entries(getAggregateLocations())
    .sort(([, a], [, b]) => b.totalNights - a.totalNights)
    .slice(0, count);

const getAllHotels = (
  country: CountryModel,
  destinations: Destination[],
): Location[] => {
  let locations: Location[] = [];

  destinations.forEach((destination: Destination) => {
    destination.hotels.forEach((hotel: HotelRecommendation) => {
      hotel.dates.forEach((dateRange) => {
        locations.push({
          displayName: destination.displayName,
          from: dateRange.from,
          to: dateRange.to,
          hotelName: hotel.name,
          country: country,
          id: destination.id,
          profileImg: destination.profileImg,
        });
      });
    });
  });
  return locations;
};

export const getAllLocationsImages = () => {
  let destsOptions: string[] = [];
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
  const destinationsOptions = [
    "hotels",
    "foods",
    "attractions",
    "kids",
    "nightlife",
    "gold_recommendation",
  ];

  COUNTRIES.forEach((country) => {
    country.destinations?.forEach((destination: any) => {
      // const destName: string = getNameToDisplay(destination.displayName);
      const destName: string = `${destination.displayName.hebrew}`;
      destsOptions.push(destName);

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
  // console.log({ destsOptions });
  // console.log({ optionsWithImagesTemp });
  return { destsOptions, optionsWithImages: optionsWithImagesTemp };
};
