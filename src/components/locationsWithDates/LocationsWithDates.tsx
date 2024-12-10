import React from "react";
import {
  calculateDaysBetweenDates,
  parseDate,
  parseDaysToHebrew,
} from "helpers/dateHelpers";
import { Location } from "helpers/locations.helpers";

interface locationsWithDatesProps extends React.HTMLAttributes<HTMLDivElement> {
  locations: Location[];
}

const LocationsWithDates: React.FC<locationsWithDatesProps> = ({
  locations,
  style = {},
}) => {
  const renderDaysMissing = (daysMissing: number) => {
    return (
      <div
        className={"flex-row"}
        style={{
          gap: 10,
          height: 15,
          marginRight: 70,
          fontSize: 10,
          color: "red",
        }}
      >
        {parseDaysToHebrew(daysMissing)}
      </div>
    );
  };
  return (
    <div style={{ width: "100%", ...style }}>
      {locations.map((l, index) => {
        const previousLocation = locations[index - 1];
        const countryName = l.country.displayName.hebrew;
        const prevCountryName = previousLocation?.country.displayName.hebrew;
        const showCountry = index === 0 || countryName !== prevCountryName;

        const daysMissing =
          index === 0
            ? 0
            : calculateDaysBetweenDates(previousLocation.to, l.from);
        return (
          <>
            {daysMissing > 0 && renderDaysMissing(daysMissing)}
            <div
              className={"flex-row"}
              style={{
                gap: 10,
                height: 10,
                marginTop: daysMissing === 0 ? 5 : 0,
                marginRight: 20,
                fontSize: 10,
              }}
            >
              <b style={{ width: 40 }}>{showCountry ? countryName : null}</b>
              <b style={{ width: 60 }}>{l.displayName.hebrew}</b>
              <span className={"flex-row"} style={{ gap: 10 }}>
                <span>{parseDate(l.from)}</span>
                <span>{parseDate(l.to)}</span>
                <span>({calculateDaysBetweenDates(l.from, l.to)})</span>
                <span style={{ fontSize: 8 }}>{l.hotelName}</span>
              </span>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default LocationsWithDates;
