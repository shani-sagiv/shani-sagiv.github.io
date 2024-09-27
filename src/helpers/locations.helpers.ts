import { COUNTRIES } from "../Routes";

export const sortLocationsByDate = (): {
  hotelName: string;
  placeName: string;
  countryName: string;
  from: Date;
  to: Date;
  profileImg: string;
}[] => {
  const locations: {
    placeName: string;
    countryName: string;
    from: Date;
    to: Date;
    hotelName: string;
    profileImg: string;
  }[] = [];

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
            countryName: countryName,
            from: dateRange.from,
            to: dateRange.to,
            hotelName: hotel.name,
            profileImg: destination.profileImg,
          });
        });
      });
    });
  });

  // Sort the locations by the 'from' date
  locations.sort((a, b) => a.from.getTime() - b.from.getTime());
  return locations;
};
