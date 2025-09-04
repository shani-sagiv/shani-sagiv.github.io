import { Destination } from "models/Destination";
// import { PHONG_NHA_IMAGES } from "../../img/Vietnam";
import { createDate } from "helpers/dateHelpers";
import PHONG_NHA_IMAGES from "./images";

export const PhongNha: Destination = {
  id: "PhongNha",
  displayName: {
    hebrew: "פונג נה",
    english: "phong nha",
  },
    // images:PhongNha.general,

  description:
    "ממש אמצע הדרך מהויאן לצפון, שווה עצירה רק אם אין כח לנסיעה ארוכה ואם אוהבים מאוד מערות",
  profileImg: PHONG_NHA_IMAGES.profileImg,
  hotels: [
    {
      name: "green Homestay",
      dates: [{ from: createDate("07/07/2024"), to: createDate("10/07/2024") }],
      description: "מלון חמוד מיקום סבבה",
      googleMapLink: "https://maps.app.goo.gl/qP925KZHz5TuoKVP8",
      id: "greenHomestay", images: PHONG_NHA_IMAGES.greenHomestay,
    },
    {
      name: "Jade Phong Nha Hotel",
      dates: [{ from: createDate("10/07/2024"), to: createDate("13/07/2024") }],
      description: "חדר מינימלי אבל מלון ממש חמוד אחלה בריכה אחלה נוף",
      googleMapLink: "https://maps.app.goo.gl/KDRCDMS8rQ8gV3kg8",
      id: "jadeHotel", images: PHONG_NHA_IMAGES.jadeHotel,
    },
  ],
  foods: [],
  attractions: [
    {
      name: "Ồ Ồ Lake Silence",
      googleMapLink: "https://maps.app.goo.gl/BXKZ287tSxPJNYz46",
      description:
        "בית קפה חמוד על האגם, מקום יפה עם נוף יפה, משום מה הזמנו מנה קטנה של אורז עם עוף והביאו לנו עוף שלם אבל אחלה מקום",
      id: "lakeSilence", images: PHONG_NHA_IMAGES.lakeSilence,
    },
    {
      name: "Phong nha Rooftop Bar",
      googleMapLink: "https://maps.app.goo.gl/t45qzidHUpf6WmdQ8",
      description:
        "בר רופטופ, מאוד חמוד נוף מאוד יפה כי זה המקום הכי גבוה שם בערך",
      id: "rooftop", images: PHONG_NHA_IMAGES.rooftop,
    },
    {
      name: "Paradise Cave",
      googleMapLink: "https://maps.app.goo.gl/4oWTF7TAm3DkvejS7",
      description:
        "מערת נטיפים חמודה, הליכה קצרה בגונגל בדרך המערה ממש קרה ויש שם מסלול הליכה הלוך חזור לא ארוך",
      id: "paradiseCave", images: PHONG_NHA_IMAGES.paradiseCave,
    },
  ],
  nightlife: [],
  shells: [],
};
