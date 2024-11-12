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

const locationsWithDates: React.FC<locationsWithDatesProps> = ({
  locations,
  style = {},
}) => {
  return (
    <div style={style}>
      {locations.map((l, index) => {
        const previousLocation = locations[index - 1];

        const daysMissing =
          index === 0
            ? 0
            : calculateDaysBetweenDates(previousLocation.to, l.from);
        return (
          <>
            {daysMissing > 0 && (
              <div
                className={"flex-row"}
                style={{
                  gap: 10,
                  height: 15,
                  marginRight: 20,
                  fontSize: 10,
                  color: "red",
                }}
              >
                {parseDaysToHebrew(daysMissing)}
              </div>
            )}
            <div
              className={"flex-row"}
              style={{
                gap: 10,
                height: 15,
                marginTop: daysMissing === 0 ? 8 : 0,
                marginRight: 20,
                fontSize: 10,
              }}
            >
              <b style={{ width: 75 }}>{l.placeName}</b>
              <span className={"flex-row"} style={{ gap: 10 }}>
                <span>{parseDate(l.from)}</span>
                <span>{parseDate(l.to)}</span>
                <span>({calculateDaysBetweenDates(l.from, l.to)})</span>
                <span>({l.hotelName})</span>
              </span>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default locationsWithDates;
