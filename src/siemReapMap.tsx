import React from "react";
import ReactDOMServer from "react-dom/server";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

// נתונים על המקדשים
const templeData = [
  {
    name: "Angkor Wat",
    description: "אנגקור וואט",
    position: [13.4125, 103.8667],
    day: 1,
  },
  {
    name: "Bayon Temple",
    description: "מקדש הפרצופים המרובים",
    position: [13.4412, 103.8597],
    day: 1,
  },
  {
    name: "Spean Thmor",
    description: "פעם היה סכר",
    position: [13.43, 103.8568],
    day: 1,
  },
  {
    name: "PrasatTaKeo Ta Keo",
    description: "",
    position: [13.4458, 103.8594],
    day: 1,
  },
  { name: "Ta Prohm", description: "", position: [13.4358, 103.8894], day: 1 },
  {
    name: "PrasatTaKeo Preah Khan",
    description: "",
    position: [13.4628, 103.8761],
    day: 2,
  },
  {
    name: "Neak Poan",
    description: "מקדש מרפאה",
    position: [13.4655, 103.8961],
    day: 2,
  },
  { name: "Ta Som", description: "", position: [13.4633, 103.9233], day: 2 },
  {
    name: "Pre Rup",
    description: "ראינו מפה את השקיעה",
    position: [13.4342, 103.9236],
    day: 2,
  },
  {
    name: "Banteay Kdei",
    description: "",
    position: [13.4165, 103.8917],
    day: 3,
  },
];

const CustomMarker: React.FC<{
  name: string;
  description: string;
  day: number;
}> = ({ name, description, day }) => (
  <div
    style={{
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
      backgroundColor: "#3498db",
    }}
  >
    {name}
    <br />
    {/*{description}*/}
    {day}
  </div>
);

// פונקציה ליצירת איקון מותאם אישית
const createCustomDivIcon = (
  name: string,
  description: string,
  day: number,
) => {
  return L.divIcon({
    className: "custom-div-icon",
    html: ReactDOMServer.renderToString(
      <CustomMarker name={name} description={description} day={day} />,
    ),
    iconSize: [50, 50],
    iconAnchor: [25, 25],
    popupAnchor: [0, -25],
  });
};

const SiemReapMap = () => {
  return (
    <MapContainer
      center={[13.4125, 103.8967]}
      zoom={12}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {templeData.map((temple, Index) => (
        <Marker
          key={Index}
          position={temple.position as LatLngExpression}
          icon={createCustomDivIcon(
            temple.name,
            temple.description,
            temple.day,
          )}
        >
          <Popup>
            <strong>{temple.name}</strong>
            <br />
            {temple.description}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default SiemReapMap;
