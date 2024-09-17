import { DisplayName } from "models/GenericModels";
import { HotelRecommendation } from "models/Recommendation";

export function createDate(dateString: string): Date {
  const [day, month, year] = dateString.split("/").map(Number);
  const date = new Date(year, month - 1, day);

  return date;
}

export function calculateDaysBetweenDates(startDate: Date, endDate: Date) {
  // @ts-ignore
  const days = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
  return days;
}

export function getNameToDisplay(displayName: DisplayName) {
  return `${displayName.hebrew} ${displayName.english}`;
}

export const calculateTotalTime = (hotels: HotelRecommendation[]): number => {
  return hotels.reduce((totalDays, hotel) => {
    const hotelDays = hotel.dates.reduce((days, dateRange) => {
      const from = dateRange.from.getTime();
      const to = dateRange.to.getTime();
      return days + (to - from) / (1000 * 60 * 60 * 24); // Convert ms to days
    }, 0);
    return totalDays + hotelDays;
  }, 0);
};
export const getStartAndEndDate = (
  hotels: HotelRecommendation[],
): { startDate: Date; endDate: Date } => {
  let startDate: Date | null = null;
  let endDate: Date | null = null;

  hotels.forEach((hotel) => {
    hotel.dates.forEach((dateRange) => {
      if (!startDate || dateRange.from < startDate) {
        startDate = dateRange.from;
      }
      if (!endDate || dateRange.to > endDate) {
        endDate = dateRange.to;
      }
    });
  });

  if (!startDate || !endDate) {
    throw new Error("No valid dates found.");
  }

  return { startDate, endDate };
};
