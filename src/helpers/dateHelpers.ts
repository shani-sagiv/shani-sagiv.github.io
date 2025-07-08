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
  const total = destinations.reduce((totalNights, destination) => {
    const destinationNights = calculateTotalTime(destination.hotels);
    return totalNights + destinationNights;
  }, 0);

  return Number(total.toFixed());
};

export const calculateTotalTime = (hotels: HotelRecommendation[]): number => {
  const total = hotels.reduce((totalDays, hotel) => {
    const hotelDays = hotel.dates.reduce((days, dateRange) => {
      const from = dateRange.from.getTime();
      const to = dateRange.to.getTime();
      return days + (to - from) / (1000 * 60 * 60 * 24); // Convert ms to days
    }, 0);
    return totalDays + hotelDays;
  }, 0);
  return Number(total.toFixed());
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

export function parseDateDOT(date: Date, hideYear = false): string {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(2);

  return hideYear ? `${day}.${month}` : `${day}.${month}.${year}`;
}

export function formatHebrewDate(dateRaw: Date | string): string {
  const date = new Date(dateRaw);

  return date.toLocaleDateString("he-IL", {
    day: "numeric",
    month: "long",
    year: "numeric",
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
  const sorted = allDates.sort((a, b) => a.from.getTime() - b.from.getTime());
  const mergedDates: { from: Date; to: Date }[] = [];

  for (const date of sorted) {
    const last = mergedDates[mergedDates.length - 1];
    if (last && date.from <= last.to) {
      // Merge overlapping or touching ranges
      last.to = new Date(Math.max(last.to.getTime(), date.to.getTime()));
    } else {
      mergedDates.push({ ...date });
    }
  }

  return mergedDates;
};

