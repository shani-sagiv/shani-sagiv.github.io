import { Destination } from "models/Destination";
import IMAGES from "./images";
import { createDate } from "helpers/dateHelpers";

export const MUI_NE: Destination = {
  id: "MUI_NE",
  displayName: {
    hebrew: "מוי נה",
    english: "mui ne",
  },
  images: IMAGES.general,
  description: "",
  profileImg: IMAGES.profileImg,
  hotels: [
    {
      name: "Mui Ne Sunlight Villa",
      type: "Hotel",
      dates: [{ from: createDate("07/12/2024"), to: createDate("11/12/2024") }],
      description:
        "מלון ממש ממש חמוד היה כיף רק קצת באסה להגיע רגלית אבל שווה את זה",
      images: IMAGES.SunlightVilla,
    },
    {
      name: "Dynasty Beach Mui Ne Resort - Hoang Trieu",
      type: "Hotel",
      dates: [{ from: createDate("05/12/2024"), to: createDate("07/12/2024") }],
      description: "מלון נחמד יקר מדי",
      images: IMAGES.Dynasty,
    },
  ],
  foods: [
    {
      type: "Restaurant",
      name: "Pineapple Mũi Né",
      description: "ביץ קלאב ממש נחמד לפעמים יש מוזיקה אחלה מקום",
      googleMapLink: "https://maps.app.goo.gl/15eTriBKMxtsaWXZ8",
      images: IMAGES.Pineapple,
    },
    {
      type: "Restaurant",
      name: "PIT STOP",
      description: "מקום חמוד עם כמה מסעדות נחמדות",
      googleMapLink: "https://maps.app.goo.gl/wnotedRxmVjLtF5Y8",
      images: IMAGES.PitStop,
    },
    {
      type: "Restaurant",
      name: "Dong Vui Food Court",
      description: "מקום יותר חמוד עם יותר מסעדות יותר נחמדות",
      googleMapLink: "https://maps.app.goo.gl/jHat72ZhFVQZR4wy9",
      images: IMAGES.DongVui,
    },
  ],
  attractions: [
    {
      type: "Attraction",
      name: "Fairy Stream",
      description:
        "נחל קצר שהולכים בו קצת בתי קפה וגני חיות של התעללות בדרך חמוד",
      googleMapLink: "https://maps.app.goo.gl/HdegoSEaayJTHJFGA",
      images: IMAGES.FairyStream,
    },
    {
      type: "Attraction",
      name: "Muine Fishing Village",
      description: "מלא סירות דייגים מלא צדפים אחלה נוף יפה",
      googleMapLink: "https://maps.app.goo.gl/NgEu8a1KKD8yDDiG6",
      images: IMAGES.FishingVillage,
    },
    {
      type: "Attraction",
      name: "Chùa Thiện Quang",
      description: "מקדש ממש ממש יפה ומעעניין",
      googleMapLink: "https://maps.app.goo.gl/3ASTtqKLzpNyUvLT9",
      images: IMAGES.ChuaTemple,
    },
    {
      type: "Attraction",
      name: "TROPICAL Mini Golf and restaurant",
      description: "מיני גולף דלוח",
      googleMapLink: "https://maps.app.goo.gl/f8GRvdc4LgENBnX76",
      images: IMAGES.minigolf,
    },
  ],
  nightlife: [],
  shells: [],
};

// {
//   name: "",
//   type: "Hotel",
//   dates: [{ from: createDate("00/00/2024"), to: createDate("00/00/2024") }],
//   description:"",
//   images: IMAGES.,
// }

// {
//   type: "",
//   name: "",
//   description: "",
//   googleMapLink: "",
//   images: IMAGES.,
// }
