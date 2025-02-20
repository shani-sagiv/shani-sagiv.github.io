import { Destination } from "models/Destination";
import IMAGES from "./images";
import { createDate } from "helpers/dateHelpers";

export const PHU_QUOC: Destination = {
  id: "PHU_QUOC",
  displayName: {
    hebrew: "פו קוק",
    english: "phu quoc",
  },
  images: IMAGES.general,
  description: "",
  profileImg: IMAGES.profileImg,
  hotels: [
    {
      name: "NIGHT SEA HOTEL",
      description: "וואו מלון שווה כיף",
      dates: [{ from: createDate("15/02/2025"), to: createDate("26/02/2025") }],
      googleMapLink: "https://maps.app.goo.gl/phzsuGyJsQRze1ir8",
      price: "112 ללילה כולל ארוחת בוקר",
      images: IMAGES.NIGHTSEA,
    },
  ],
  foods: [],
  attractions: [
    {
      name: "שוק לילה",
      description: "",
      googleMapLink: "https://maps.app.goo.gl/5ArGS3QrcJ53WeV68",
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
