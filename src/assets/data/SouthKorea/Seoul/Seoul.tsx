import { Destination } from "models/Destination";
import IMAGES from "./images";
import {createDate} from "helpers/dateHelpers";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L, { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";


// --- מיפוי לינקים לקואורדינטות (ידני) ---
const coordsMap: Record<string, [number, number]> = {
  "https://maps.app.goo.gl/sub8foPesA1PsgiGA": [37.5740, 126.9856], // Insa-dong
  "https://maps.app.goo.gl/hvc93enJYaiCtSa87": [37.5735, 126.9830], // Jogyesa
  "https://maps.app.goo.gl/4SqiVentgrWgL6ig6": [37.5826, 126.9830], // Bukchon
  "https://maps.app.goo.gl/n8ehhnQotjKQTbZZ8": [37.5704, 126.9915], // Running Man
  "https://maps.app.goo.gl/DMQTgvH6zGZkMbrf7": [37.5571, 126.9245], // Hongdae
  "https://maps.app.goo.gl/t2huShr7ticSvTmt5": [37.5536, 126.9226], // La Bamba
  "https://maps.app.goo.gl/K43WCaYKu5Fet3G79": [37.5554, 126.9239], // Razer
  "https://maps.app.goo.gl/HMCwmhpnWgrsu6Kc7": [37.5725, 126.9872], // Jongno Bar Street
};

// פונקציה לאיסוף כל הנקודות מה־Seoul
function getFirstImageUrl(img: any): string | undefined {
  if (!img) return undefined;
  if (Array.isArray(img)) return getFirstImageUrl(img[0]);
  if (typeof img === "string") return img;
  if (typeof img === "object") return img.src || img.url || img.default || undefined;
  return undefined;
}

// --- בניית רשימת נקודות מה־Seoul ---
type Point = {
  name: string;
  description?: string;
  pos?: [number, number];
  image?: string;
};

const getPoints = (): Required<Point>[] => {
  const hotels: Point[] = (Seoul.hotels ?? []).map((h) => ({
    name: h.name,
    description: h.description,
    pos: coordsMap[h.googleMapLink ?? ""],
    image: getFirstImageUrl(h.images),
  }));

  const attractionsGroups: Point[] = (Seoul.attractionsGroups ?? []).flatMap((g) =>
    g.attractions.map((a) => ({
      name: a.name,
      description: a.description,
      pos: coordsMap[a.googleMapLink ?? ""],
      image: getFirstImageUrl(a.images),
    }))
  );

  const attractions: Point[] = (Seoul.attractions ?? []).map((a) => ({
    name: a.name,
    description: a.description,
    pos: coordsMap[a.googleMapLink ?? ""],
    image: getFirstImageUrl(a.images),
  }));

  const nightlife: Point[] = (Seoul.nightlife ?? []).map((n) => ({
    name: n.name,
    description: n.description,
    pos: coordsMap[n.googleMapLink ?? ""],
    image: getFirstImageUrl(n.images),
  }));

  // מסננים רק מה שיש להם קואורדינטות
  return [...hotels, ...attractionsGroups, ...attractions, ...nightlife].filter(
    (p): p is Required<Point> => Array.isArray(p.pos) && p.pos.length === 2
  );
};

// --- אייקון מסוג תמונה (divIcon עם thumbnail) ---
function createPhotoDivIcon(imageUrl?: string, size = 44) {
  const safeUrl = imageUrl ? String(imageUrl) : "";
  const border = "2px solid white";
  const shadow = "0 1px 6px rgba(0,0,0,0.35)";
  const html = `
    <div style="
      width:${size}px;height:${size}px;
      border-radius:50%;
      overflow:hidden;
      border:${border};
      box-shadow:${shadow};
      background:#ddd url('${safeUrl}') center/cover no-repeat;
    "></div>
  `;
  return L.divIcon({
    className: "photo-marker",
    html,
    iconSize: [size, size],
    // anchor למרכז תחתון של העיגול
    iconAnchor: [size / 2, size],
    // ה־Popup יופיע טיפה מעל
    popupAnchor: [0, -size / 2],
  });
}

const SeoulMap: React.FC = () => {
  const points = getPoints();
const USE_PHOTO_AS_MARKER = true;       // תמונת־תצוגה על הנקודה
const SHOW_LABELS_OUTSIDE = true;       // שם בחוץ (Tooltip קבוע)

  return (
    <MapContainer
      center={[37.5665, 126.9780]} // מרכז סיאול
      zoom={14}
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {points.map((p, i) => {
        const icon = USE_PHOTO_AS_MARKER
          ? createPhotoDivIcon(p.image) // תמונה על הנקודה
          : undefined;                  // אייקון ברירת־מחדל

        return (
          <Marker key={i} position={p.pos as LatLngExpression} icon={icon}>
            {SHOW_LABELS_OUTSIDE && (
            <Tooltip
              direction="right"
              offset={[0, -500]}   // למרכז מעל התמונה
              permanent
              opacity={1}
              className="marker-label"
            >
              {p.name}
            </Tooltip>
            )}
            <Popup>
              <b>{p.name}</b>
              <br />
              {p.description}
              {p.image && (
                <div style={{ marginTop: 6 }}>
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{
                      width: 180,
                      maxHeight: 140,
                      objectFit: "cover",
                      borderRadius: 8,
                      display: "block",
                    }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              )}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default SeoulMap;





export const Seoul: Destination = {
  id: "Seoul",
  displayName: {
    hebrew: "סיאול",
    english: "Seoul",
  },
  images:IMAGES.general,
  description: "ממש חמודה וענקית ויש מליון לעשות",
  profileImg: IMAGES.profileImg,
  hotels: [
    {
  name: "PIPE Hostel Myeongdong - 402",
  dates: [{ from: createDate("07/08/2025"), to: createDate("14/08/2025") }],
  description:"חדר בגודל של קופסאת גפרורים אבל וואלה היה ממש אחלה ונקי והמיקום פצצה",
  googleMapLink: "https://www.airbnb.com/rooms/24947938?c=.pi80.pkYm9va2luZy9ndWVzdC9SZXNlcnZhdGlvbkNvbmZpcm1hdGlvblRlbXBsYXRl&euid=d9728e2c-5568-11c7-d941-1c25cf2debf3&source_impression_id=p3_1755069652_P3MMrw7tToJDGRqU",
  images: IMAGES.Pipe,
},  {
  name: "Entire home in Donggyo-dong, Mapo-gu, South Korea",
  dates: [{ from: createDate("14/08/2025"), to: createDate("07/09/2025") }],
  description:"קצת שבורה אבל ממש כיפית ואחלה מיקום ויש הכל",
  googleMapLink: "https://www.airbnb.com/rooms/46609346?c=.pi80.pkYm9va2luZy9ndWVzdC9SZXNlcnZhdGlvblBlbmRpbmdUZW1wbGF0ZQ%3D%3D&euid=3970760f-eae6-adbe-9d80-e2fe471b6283&source_impression_id=p3_1755069824_P3TiCKLDMdveeXrC",
  images: IMAGES.Donggyodong,
}
  ],
  foods: [],
  attractionsGroups:[
    {
      name: "מרכז-צפון (Insadong / Jongno / Ikseon-dong)\n צפון-מערב (Gyeongbokgung / Bukchon / Samcheong-dong)",
      description:"",
      // description: "אזור מאוד חמוד להסתובב, מלא גלריות, מסעדות, בתי קפה וחנויות",}
      attractions:[
      {
        name: "Ssamziegil / Insa-dong Culture Street",
        description:"אזור מאוד חמוד להסתובב",
        googleMapLink: "https://maps.app.goo.gl/sub8foPesA1PsgiGA",
        id: "InsaDong",
    images: IMAGES.InsaDong,
      },
      {
        name:"jogyesa temple",
        description:"מקדש בודהיסטי מאוד יפה",
        googleMapLink:"https://maps.app.goo.gl/hvc93enJYaiCtSa87",
        id: "jogyesa",
    images: IMAGES.jogyesa,
      },
      {
        name: "Bukchon Hanok Village",
        description:"כפר מסורתי עם בתים יפים",
        googleMapLink: "https://maps.app.goo.gl/4SqiVentgrWgL6ig6",
        id: "bukchon",
    images: IMAGES.bukchon,
      }
  ]
}],
  attractions: [
    {
      name:"Running man & Dynamic maze",
      description:"אטרקציית מבוך קצת מורה אבל הrunning man נדיר מאוד",
      googleMapLink: "https://maps.app.goo.gl/n8ehhnQotjKQTbZZ8",
      id: "runningMan",
    images: IMAGES.runningMan,
    }

  ],
  // attractionsGroups: [],
  nightlife: [
    {
    name: "Hongdae",
    description: "אזור מאוד חזק עם הרבה מועדונים וברים",
    googleMapLink: "https://maps.app.goo.gl/DMQTgvH6zGZkMbrf7",
    id: "hongdaeNightLife",
    images: IMAGES.hongdaeNightLife,
  },
  {
    name: "La Bamba",
    description: "אחלה בר רגאטון",
    googleMapLink:"https://maps.app.goo.gl/t2huShr7ticSvTmt5",
    id: "LaBamba",
    images: IMAGES.LaBamba,
  },
    {
    name: "홍대클럽 레이저 hongdae club razer seoul nightclub edm",
    description: "אחלה מייז",
    googleMapLink:"https://maps.app.goo.gl/K43WCaYKu5Fet3G79",
    id: "Razer",
    images: IMAGES.Razer,
  },
  {
    name: "Jongno Bar Street",
    description: "אזור ברים מאוד חזק",
    googleMapLink: "https://maps.app.goo.gl/HMCwmhpnWgrsu6Kc7",
    id: "Jongno",
    images: IMAGES.Jongno,

  }
  ],
  shells: [],
  moreInfo: {title:"אוכל", info:[
    {
      name: "Cheese Dakgalbi",
      description: "טעים מאוד עוף גבינה ופוקים",
      images: IMAGES.Dakgalbi,
    },
    {
      name: "Bibimbap",
      description: "קערת סושי מאוד טעים",
      images: IMAGES.Bibimbap,
    },
    {
      name: "Gimbap / Kimbap",
      description: "סושי טעים",
      images: IMAGES.Gimbap,
    },
    // {
    //   name: "Naga",
    //   description: "נחשוש",
    //   images: IMAGES.Naga,
    // },
  ]},

  gold_recommendation: [
  {
    name: "תחבצ",
    description:"אפשר להשתמש בnaver צריך לקנות tmoney בכל סבן אילבן ולהטעין, אפשר להטעין רק במזומן ומתקפים גם בעלייה וגם בירידה מהאוטובוס"
  },
  ],
  additionalCode: <SeoulMap/>,
};


// {
//   name: "",
//   dates: [{ from: createDate("00/00/2025"), to: createDate("00/00/2025") }],
//   description:"",
//   images: IMAGES.,
// }

// {
//   name: "",
//   description: "",
//   googleMapLink: "",
//   images: IMAGES.,
// }


