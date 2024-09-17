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
