import React from "react";
import ReactDOMServer from "react-dom/server";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  sortLocationsByDate,
  Location,
  getAggregateLocations,
} from "helpers/locations.helpers";
import L from "leaflet";
import { calculateDaysBetweenDates } from "../../helpers/dateHelpers";
import { Button } from "components/Button";
import { useNavigate } from "react-router-dom";

const placeCoordinates: Record<string, [number, number]> = {
  Limassol: [34.7071, 33.0226],
  Vasa: [34.8692, 32.5044],
  Paphos: [34.7767, 32.4245],
  Larnaca: [34.9167, 33.629],
  Bangkok: [13.7563, 100.5018],
  "Koh Lanta": [7.6277, 99.0415],
  "Koh Pha Ngan": [9.7297, 100.0375],
  "Chinag Mai": [18.7883, 98.9853],
  "Hoi An": [15.8801, 108.338],
  "phong nha": [17.6158, 106.2823],
  hanoi: [21.0285, 105.8542],
  "cat ba": [20.7276, 107.0483],
  "ha long": [20.9504, 107.0732],
  sapa: [22.3402, 103.8448],
  "ta van": [22.2769, 103.8839],
  "Koh Tao": [10.0964, 99.8448],
  "Koh Samui": [9.512, 100.0135],
  Pattaya: [12.9236, 100.8825],
  "koh chang": [12.0464, 102.3236],
};

const locationData = sortLocationsByDate();

const LocationsToInfo = getAggregateLocations();

// Custom React component for the marker icon
const CustomMarker: React.FC<{ text: string; location: Location }> = ({
  text,
  location,
}) => (
  <div
    style={{
      // backgroundColor: "#3498db",
      color: "white",
      padding: "5px",
      borderRadius: "50%",
      textAlign: "center",
      fontWeight: "bold",
      width: "40px",
      fontSize: 10,
      height: "40px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid white",
      background: `url(${location.profileImg}) 100% 100%`,
      backgroundSize: "100% 100%",
      position: "relative",
    }}
  >
    <div
      style={{
        position: "absolute",
        top: -12,
        right: "-50%",
        width: "200%",
        color: "black",
        display: "flex",
        justifyContent: "center",
        // backgroundColor: "rgba(255,255,255,0.4)",
        textShadow: `
        -1px -1px 0 white,
        1px -1px 0 white,
        -1px 1px 0 white,
        1px 1px 0 white
      `,
      }}
    >
      {text}
    </div>
    <br />
    <div
      style={{
        position: "absolute",
        bottom: 3,
        right: 0,
        width: "100%",
        color: "black",
        display: "flex",
        justifyContent: "center",
        textShadow: `
        -1px -1px 0 white,
        1px -1px 0 white,
        -1px 1px 0 white,
        1px 1px 0 white
      `,
      }}
    >
      {LocationsToInfo[location.id]?.totalNights}
    </div>
  </div>
);

const SimpleMap: React.FC = () => {
  const initialPosition: [number, number] = placeCoordinates["Bangkok"];
  const navigate = useNavigate();

  // Extract LatLng pairs for Polyline and create markers
  const polylinePositions = locationData
    .map((location) => placeCoordinates[location.placeName])
    .filter(Boolean); // Filter out any undefined coordinates

  const createCustomDivIcon = (text: string, location: Location) => {
    return L.divIcon({
      className: "custom-div-icon",
      html: ReactDOMServer.renderToString(
        <CustomMarker text={text} location={location} />,
      ),
      iconSize: [30, 30],
      iconAnchor: [15, 15],
      popupAnchor: [0, -15],
    });
  };
  return (
    <MapContainer
      center={initialPosition}
      zoom={4.5}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
      />

      {/* Render markers and popups */}
      {locationData.map((location, index) => {
        const position = placeCoordinates[location.placeName];
        if (!position) return null; // Skip if no coordinates found for the place
        return (
          <Marker
            key={index}
            position={position}
            icon={createCustomDivIcon(location.placeName, location)} // Use placeName as marker text
          >
            <Popup>
              <strong>{location.placeName}</strong> (
              {location.country.displayName.hebrew}){/*<br />*/}
              <Button
                onClick={() =>
                  navigate(`${location.country.id}/${location.id}`)
                }
              >
                עבור
              </Button>
              {/*Hotel: {location.hotelName}*/}
              {/*<br />*/}
              {/*From: {new Date(location.from).toLocaleDateString()}*/}
              {/*<br />*/}
              {/*To: {new Date(location.to).toLocaleDateString()}*/}
            </Popup>
          </Marker>
        );
      })}

      {/* Draw the polyline connecting the points */}
      <Polyline positions={polylinePositions} color="black" />
    </MapContainer>
  );
};

export default SimpleMap;
