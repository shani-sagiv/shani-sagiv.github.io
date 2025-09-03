import React from "react";
import {
  calculateDaysBetweenDates,
  parseDate,
  parseDaysToHebrew,
} from "helpers/dateHelpers";
import { findPeopleInRange,sumDaysWithPeople, Location } from "helpers/locations.helpers";
import { PEOPLES } from "assets/data/People";
// import { findPeopleInRange } from "helpers/people.helpers";

interface LocationsWithDatesProps extends React.HTMLAttributes<HTMLDivElement> {
  locations: Location[];
  showAllPeoples?:boolean
}

const LocationsWithDates: React.FC<LocationsWithDatesProps> = ({
  locations,
  style = {},
  showAllPeoples = false
}) => {
  const renderDaysMissing = (daysMissing: number,) => (
    <div
      className="flex-row"
      style={{
        marginTop: 5,
        marginBottom: -5,
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
  const stats = sumDaysWithPeople(locations);
  const sortedStats = stats.sort((a, b) => b.totalDays - a.totalDays);

  return (
    <div style={{ width: "100%", ...style }}>
      {locations.map((l, index) => {
        const previousLocation = locations[index - 1];
        const countryName = l.country.displayName.hebrew;
        const prevCountryName = previousLocation?.country.displayName.hebrew;
        const showCountry = index === 0 || countryName !== prevCountryName;

        const daysMissing =
          index === 0 ? 0 : calculateDaysBetweenDates(previousLocation.to, l.from);

        // 🔹 מי חופף ליעד הזה
         const overlappingPeople = findPeopleInRange(l.from, l.to);

        return (
          <React.Fragment key={`${l.id}-${index}`}>
            {daysMissing > 0 && renderDaysMissing(daysMissing)}
            <div
              className="flex-row"
              style={{
                gap: 10,
                marginTop: 2,
                marginRight: 20,
                fontSize: 10,
              }}
            >
              <b style={{ width: 40 }}>{showCountry ? countryName : null}</b>
              <b style={{ width: 60 }}>{l.displayName.hebrew}</b>
              <span className="flex-row" style={{ gap: 10 }}>
                <span>{parseDate(l.from)}</span>
                <span>{parseDate(l.to)}</span>
                <span>({calculateDaysBetweenDates(l.from, l.to)})</span>
                <div
                  style={{
                    fontSize: 8,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "30vw",
                  }}
                >
                  {l.hotelName}
                </div>
              </span>
              {/* 🔹 מציג את האנשים */}
            </div>

              {overlappingPeople.length > 0 && (
                <div style={{ fontSize: 8, color: "green",  margin:"0 70px 0 0 " }}>
                  {overlappingPeople.map((p) => p.name).join(", ")}
                </div>
              )}
          </React.Fragment>
        );
      })}

{showAllPeoples &&
      <div style={{ fontSize: 10, marginRight:10 }}>
        {sortedStats.map((s) => (
          <div key={s.name} style={{ marginBottom: 4 }}>
            <b>{s.name}</b> – {s.totalDays} ימים
            {s.places.length > 0 && (
              <span style={{ color: "gray", marginRight: 5 }}>
                ({s.places.join(", ")})
              </span>
            )}
          </div>
        ))}
      </div>}
    </div>
  );
};

export default LocationsWithDates;
