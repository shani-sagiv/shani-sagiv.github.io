import { Destination } from "models/Destination";
import IMAGES from "./images";
import { createDate } from "helpers/dateHelpers";

export const PhuQuoc: Destination = {
  id: "PhuQuoc",
  displayName: {
    hebrew: "פו קוק",
    english: "Phu Quoc",
  },
  images: IMAGES.general,
  description: "אי חשמל יש הכל אין סיבה למקום אחר",
  profileImg: IMAGES.profileImg,
  hotels: [
    {
      name: "NIGHT SEA HOTEL",
      description: "וואו מלון שווה כיף",
      dates: [
        { from: createDate("15/02/2025"), to: createDate("28/02/2025") },
        { from: createDate("03/03/2025"), to: createDate("11/03/2025") },
      ],
      googleMapLink: "https://maps.app.goo.gl/phzsuGyJsQRze1ir8",
      price: "112 ללילה כולל ארוחת בוקר",
      images: IMAGES.NIGHTSEA,
    },
    {
      name: "Tropical Bay",
      description: "סתם הכניס אותנו לחרדות אחלה של חדר",
      dates: [{ from: createDate("28/02/2025"), to: createDate("03/03/2025") }],
      googleMapLink: "https://maps.app.goo.gl/WXX1Rr6zMBrCQn5U8",
      images: IMAGES.Tropical,
      // price: "112 ללילה כולל ארוחת בוקר",
      // images: IMAGES.NIGHTSEA,
    },
  ],
  foods: [
    {
      name: "TacoLeo - Mexican Food and Beer",
      description: "אחלה של אוכל מקסיקני טעים שווה",
      googleMapLink: "https://maps.app.goo.gl/n4c8MNYpYszTDAWi8",
      id: "tacoleo",
    images: IMAGES.tacoleo,
    },
  ],
  attractions: [
    {
      name: "VinWonders",
      description: "משוגע כמו תמיד",
      googleMapLink: "https://maps.app.goo.gl/vDcHd4Nw8zqyhKeD8",
      id: "VinWonders",
    images: IMAGES.VinWonders,
    },
    {
      name: "VinWonders Aquarium Turtle",
      description: "הייתי חייב להפריד גם בוינוונדרס",
      googleMapLink: "https://maps.app.goo.gl/qQP5tEMQtKk3asyp9",
      id: "VinWondersAquariumTurtle",
    images: IMAGES.VinWondersAquariumTurtle,
    },
    {
      name: "Grand World",
      description: "סתם פארק חינמי של העשיר שישנו שם כמה לילות",
      googleMapLink: "https://maps.app.goo.gl/o5tiweUTCiDinN8W6",
      id: "GrandWorld",
    images: IMAGES.GrandWorld,
    },
    {
      name: "Teddy Bear Museum",
      description: "ממש אין סיבה הכל שקרים",
      googleMapLink: "https://maps.app.goo.gl/31Pv6JEkE2nqBcsJ7",
      id: "TeddyBearMuseum",
    images: IMAGES.TeddyBearMuseum,
    },
    {
      name: "Vinpearl Safari Phú Quốc",
      description: "",
      googleMapLink: "https://maps.app.goo.gl/pa5HCqyA68mwMHbv6",
      id: "Safari",
    images: IMAGES.Safari,
    },
    {
      name: "Tinh Hoa Vietnam Quintessence of Vietnam",
      description: "מופעים חמודים",
      googleMapLink: "https://maps.app.goo.gl/mWCcEbkcrrNuxCmY7",
      id: "VietnamQuintessence",
    images: IMAGES.VietnamQuintessence,
    },
    {
      name: "חוף כוכבי הים",
      description: "ללכת ברגל לא הרבה",
      googleMapLink: "https://maps.app.goo.gl/C6Gdf8PENMKhnCpn8",
      id: "starfish",
    images: IMAGES.starfish,
    },
    {
      name: "ביץ קלאבים",
      description: "מלא ביץ קלאבים ממש כיפים אחלה ארוחות ערב דיגיים שקיעות",
      googleMapLink: "https://maps.app.goo.gl/99AcohUhHssYbE6R8",
      id: "beachclubs",
    images: IMAGES.beachclubs,
    },
    {
      name: "Sunset Beach Bar & Restaurant",
      description: "אחלב ביץ קלאב אחלה מוזיקה ויש עוד נחמדים ליד",
      googleMapLink: "https://maps.app.goo.gl/ZZogHenKcBTpHX3U8",
      id: "SunsetBeachBar",
    images: IMAGES.SunsetBeachBar,
    },
    {
      name: "שוק לילה",
      description: "",
      googleMapLink: "https://maps.app.goo.gl/5ArGS3QrcJ53WeV68",
      id: "nightmarket",
    images: IMAGES.nightmarket,
    },
  ],
  attractionsGroups: [],
  nightlife: [],
  shells: [],
  gold_recommendation: [],
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
