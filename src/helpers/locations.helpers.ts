import { COUNTRIES } from "../Routes";
import { calculateDaysBetweenDates } from "./dateHelpers";
import { Country } from "models";

export interface Location {
  placeName: string;
  hotelName?: string;
  // countryName?: string;
  from: Date;
  to: Date;
  profileImg?: string;
  id: string;
  country: Country;
}

// Define `AggregatedLocation` as a single object with `totalNights` and `data` properties
type AggregatedLocation = {
  totalNights: number;
  data: Location[];
};

// `LocationsToInfo` is a mapping of unique place IDs to `AggregatedLocation` objects
type LocationsToInfo = Record<string, AggregatedLocation>;

export const sortLocationsByDate = (): Location[] => {
  const locations: Location[] = [];

  // Loop through all countries and their destinations
  COUNTRIES.forEach((countryObj) => {
    const countryName = countryObj.country.displayName.english;

    // Loop through all destinations in each country
    countryObj.destinations.forEach((destination) => {
      // Loop through all hotels in each destination
      destination.hotels.forEach((hotel) => {
        // Loop through each date range of the hotel
        hotel.dates.forEach((dateRange) => {
          locations.push({
            placeName: destination.displayName.english,
            // countryName: countryName,
            from: dateRange.from,
            to: dateRange.to,
            hotelName: hotel.name,
            profileImg: destination.profileImg,
            id: destination.id,
            country: countryObj.country,
          });
        });
      });
    });
  });

  // Sort the locations by the 'from' date
  locations.sort((a, b) => a.from.getTime() - b.from.getTime());
  return locations;
};

export const getAggregateLocations = (): LocationsToInfo => {
  const locations = sortLocationsByDate();
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
