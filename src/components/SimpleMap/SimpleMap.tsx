import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { sortLocationsByDate } from "../../helpers/locations.helpers";
import L from "leaflet";

// Mapping of place names to their latitude and longitude
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
};

// Your provided location data
const locationData = sortLocationsByDate();

const SimpleMap: React.FC = () => {
  // const initialPosition: [number, number] = [34.7071, 33.0226]; // Centered on Limassol
  const initialPosition: [number, number] = placeCoordinates["Bangkok"];

  // Extract LatLng pairs for Polyline and create markers
  const polylinePositions = locationData
    .map((location) => placeCoordinates[location.placeName])
    .filter(Boolean); // Filter out any undefined coordinates

  const createCustomIcon = (imageUrl: string) => {
    return L.icon({
      iconUrl: imageUrl,
      iconSize: [30, 30], // Adjust the size as needed
      iconAnchor: [15, 30], // Anchor point for the icon
      popupAnchor: [0, -40], // Position of the popup
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
            icon={createCustomIcon(location.profileImg)}
          >
            <Popup>
              <strong>{location.placeName}</strong> ({location.countryName})
              <br />
              Hotel: {location.hotelName}
              <br />
              From: {new Date(location.from).toLocaleDateString()}
              <br />
              To: {new Date(location.to).toLocaleDateString()}
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
