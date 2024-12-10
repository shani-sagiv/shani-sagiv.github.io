import { COUNTRIES } from "../Routes";
import { calculateDaysBetweenDates } from "./dateHelpers";
import {
  Country as CountryModel,
  Country,
  Destination,
  DisplayName,
  HotelRecommendation,
} from "models";

export interface Location {
  displayName: DisplayName;
  hotelName?: string;
  id: string;
  country: Country;

  from: Date;
  to: Date;
  profileImg?: string;
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

  COUNTRIES.forEach((countryObj) => {
    locations.push(
      ...getAllHotels(countryObj.country, countryObj.destinations),
    );
  });

  locations.sort((a, b) => a.from.getTime() - b.from.getTime());
  return locations;
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
