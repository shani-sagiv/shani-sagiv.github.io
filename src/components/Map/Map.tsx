import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import "./Map.scss";

const visitedCountries: Record<string, string> = {
  Thailand: "#FF5733",
  Vietnam: "#33FF57",
  Mexico: "#3357FF",
  Guatemala: "#FF33A1",
  Nicaragua: "#33FFF5",
  "Costa Rica": "#FFC300",
  Colombia: "#FF5733",
  Greece: "#DAF7A6",
  Romania: "#581845",
  Hungary: "#C70039",
};

interface MapProps extends React.HTMLAttributes<HTMLDivElement> {}

const Map: React.FC<MapProps> = ({}) => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
      .then((response) => response.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!geoData) return <div>Loading map...</div>;

  return (
    <div>
      <ComposableMap>
        <Geographies geography={geoData}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryName = geo.properties.name;
              const countryColor = visitedCountries[countryName]; // Get the color for the country
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={countryColor ? countryColor : "#DDD"} // Use the color if visited, otherwise gray
                  stroke="#FFF"
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default Map;
