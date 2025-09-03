import { Destination } from "models/Destination";
// import { SAPA_IMAGES } from "../../img/Vietnam";
import { createDate } from "helpers/dateHelpers";
import { SAPA_IMAGES } from "./images";

export const SAPA: Destination = {
  id: "SAPA",
  displayName: {
    hebrew: "סאפה",
    english: "sapa",
  },
  description: "עיר מאוד חמודה בצפון ויאטנם, הרבה ברים מסעדות שופינג",
  profileImg: SAPA_IMAGES.profileImg,
  hotels: [
    {
      name: "central sapa serenity",
      googleMapLink: "https://maps.app.goo.gl/pD3KWsF6NZZT88in7",
      images: SAPA_IMAGES.serenity,
      dates: [{ from: createDate("08/08/2024"), to: createDate("16/08/2024") }],
      description: "מלון חמוד מיקום סבבה כמות מדרגות שעדיף לישון ברחוב",
    },
    {
      name: "Sapa Snow Hotel",
      googleMapLink: "https://maps.app.goo.gl/gArZfgGaTvVP4oby6",
      // images: SAPA_IMAGES.serenity,
      dates: [{ from: createDate("26/08/2024"), to: createDate("28/08/2024") }],
      description: "מלון חמוד מיקום סבבה עדיף לישון יותר קרוב למרכז",
    },
  ],
  foods: [
    {
      description: "אחלה מסעדה ארוחות בוקר מערביות",
      name: "Anise Kitchen",
      googleMapLink: "https://maps.app.goo.gl/wYeBDcS8F81oRP3F8",
      images: SAPA_IMAGES.Anise,
    },
    {
      name: "Aloha Coffe & Fastfood",
      description: "אחלה מסעדה בית קפה אחלה נוף",
      googleMapLink: "https://maps.app.goo.gl/UgpFcTBJMjedp75W7",
      images: SAPA_IMAGES.Aloha,
    },
  ],
  attractions: [
    {
      name: "Lá Đỏ 2 Homestay & Coffee",
      description: "בית קפה עם נוף מהמם לכל העמק למטה",
      googleMapLink: "https://maps.app.goo.gl/uFWah5LqCJvY1JhdA",
      images: SAPA_IMAGES.lado,
    },
    {
      name: "Huân Đậu Đậu Coffee & Homestay",
      description: "בית קפה עם נוף מהמם לשדות אורז",
      googleMapLink: "https://maps.app.goo.gl/N8aQ2aU3LHZK24jV6",
      images: SAPA_IMAGES.huan,
    },
    {
      name: "Fansipan",
      description: "הר מטורף עם מקדשים ושטויות",
      googleMapLink: "https://maps.app.goo.gl/hEEe8SxyGuZjkr756",
      images: SAPA_IMAGES.Fansipan,
    },
  ],
  nightlife: [],
  shells: [],
  images: SAPA_IMAGES.general,
};
