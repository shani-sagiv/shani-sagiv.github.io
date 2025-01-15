import { Destination } from "models/Destination";
import IMAGES from "./images";
import { createDate } from "helpers/dateHelpers";

export const KOH_RONG: Destination = {
  id: "KOH_RONG",
  displayName: {
    hebrew: "קו רונג",
    english: "koh rong",
  },
  images: IMAGES.general,
  description: "אי מאוד חמודי",
  profileImg: IMAGES.profileImg,
  hotels: [
    {
      name: "The Small Guest House",
      type: "Hotel",
      dates: [{ from: createDate("07/01/2025"), to: createDate("10/01/2025") }],
      description: "לא",
      price: "90 שקל ללילה לא שווה את זה",
      // images: IMAGES.SmallGuestHouse,
    },
    {
      name: "Sweet Jungle Bungalows & Restaurant",
      type: "Hotel",
      googleMapLink: "https://maps.app.goo.gl/RgHo1e9CuELyKbbR9",
      dates: [{ from: createDate("10/01/2025"), to: createDate("27/01/2025") }],
      description: "חמוד מאוד",
      price: "140 שקל ללילה",
      images: IMAGES.SweetJungleBungalows,
    },
  ],
  foods: [],
  attractions: [],
  nightlife: [],
  shells: [],
  gold_recommendation: [],
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
