import { Destination } from "models/Destination";
import IMAGES from "./images";
import { createDate } from "helpers/dateHelpers";

export const KOH_RONG: Destination = {
  id: "KOH_RONG",
  displayName: {
    hebrew: "קו רונג",
    english: "koh_rong",
  },
  images: IMAGES.general,
  description: "",
  profileImg: IMAGES.profileImg,
  hotels: [
    {
      name: "The Small Guest House",
      type: "Hotel",
      dates: [{ from: createDate("07/01/2025"), to: createDate("11/01/2025") }],
      description: "לא",
      // images: IMAGES.SmallGuestHouse,
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
