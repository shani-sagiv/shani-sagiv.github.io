import { DisplayName } from "models/GenericModels";
import { HotelRecommendation } from "models";
import { Destination } from "models/Destination";

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

export function getNameToDisplay(displayName: DisplayName): string {
  return `${displayName.hebrew} ${displayName.english}`;
}
export const parseDaysToHebrew = (totalDays: number): string => {
  const years = Math.floor(totalDays / 360); // Assuming 360 days in a year (12 * 30)
  const remainingDaysAfterYears = totalDays % 360;

  const months = Math.floor(remainingDaysAfterYears / 30);
  const days = remainingDaysAfterYears % 30;

  let parts: string[] = [];

  if (years > 0) {
    parts.push(years === 1 ? "שנה" : `${years} שנים`);
  }

  if (months > 0) {
    parts.push(months === 1 ? "חודש" : `${months} חודשים`);
  }

  if (days > 0) {
    parts.push(`${days} ${days === 1 ? "יום" : "ימים"}`);
  }

  return parts.join(" ו-");
};

export const calculateTotalNightsAtAllDestinations = (
  destinations: Destination[],
): number => {
  return destinations.reduce((totalNights, destination) => {
    const destinationNights = calculateTotalTime(destination.hotels);
    return totalNights + destinationNights;
  }, 0);
};

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

export function hasImages(images: string[] | undefined): boolean {
  if (!images) {
    return false;
  }
  return images.length > 0;
}

export function parseDate(date: Date, hideYear = false): string | null {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: !hideYear ? "2-digit" : undefined,
  });
}
export function formatDateRange(from: Date, to: Date): string {
  // TODO: FIX LTR!!
  // ודא שהתאריכים בסדר עולה
  if (from > to) {
    [from, to] = [to, from];
  }

  const fromDay = from.getDate();
  const toDay = to.getDate();
  const fromMonth = from.getMonth() + 1;
  const toMonth = to.getMonth() + 1;

  if (fromMonth !== toMonth) {
    return `${fromDay}.${fromMonth} → ${toDay}.${toMonth}`;
  }

  if (fromDay === toDay) {
    return `${fromDay}.${fromMonth}`;
  }

  return `${fromDay}–${toDay}.${fromMonth}`;
}

const hebrewMonths = [
  "ינואר",
  "פברואר",
  "מרץ",
  "אפריל",
  "מאי",
  "יוני",
  "יולי",
  "אוגוסט",
  "ספטמבר",
  "אוקטובר",
  "נובמבר",
  "דצמבר",
];

export function getRandomNumbers(maxNumber: number, count: number): number[] {
  const numbers: Set<number> = new Set();

  while (numbers.size < count) {
    const randomNumber = Math.floor(Math.random() * maxNumber + 1);
    numbers.add(randomNumber);
  }
  return Array.from(numbers);
}

export const mergeDates = (allDates: { from: Date; to: Date }[]) => {
  const mergedDates: { from: Date; to: Date }[] = [];
  allDates.forEach((date) => {
    const last = mergedDates[mergedDates.length - 1];
    if (last && calculateDaysBetweenDates(last.to, date.from) == 0) {
      last.to = date.to; // מאחד טווחים רציפים
    } else {
      mergedDates.push({ ...date });
    }
  });
  return mergedDates;
};
