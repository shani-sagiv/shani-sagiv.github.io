import { Destination } from "models/Destination";
import IMAGES from "./images";
import { createDate } from "helpers/dateHelpers";

export const KAMPOT: Destination = {
  id: "KAMPOT",
  displayName: {
    hebrew: "קמפוט",
    english: "kampot",
  },
  images: IMAGES.general,
  description: "פלפלים ונחמד",
  profileImg: IMAGES.profileImg,
  hotels: [
    {
      name: "Park Inn Hostel and Bar",
      dates: [{ from: createDate("11/02/2025"), to: createDate("15/02/2025") }],
      description: "אחלה חדר סבבה",
      images: IMAGES.ParkInn,
    },
  ],
  foods: [],
  attractions: [],
  attractionsGroups: [
    {
      name: "יום טיול אופנוע",
      description: "",
      attractions: [
        {
          name: "La Plantation",
          description: "חוות פלפלים מאוד חמודה עם גן בוטני קטן",
          googleMapLink: "https://maps.app.goo.gl/YrHCwcNDQ4Y79yNc6",
          images: IMAGES.LaPlantation,
        },
        {
          name: "BoTree Farm",
          description: "חוות פלפלים אותו דבר לא היה סיבה באמת לנסוע",
          googleMapLink: "https://maps.app.goo.gl/b26psW6fi7aK72hw5",
          images: IMAGES.BoTree,
        },
        {
          name: "אגם",
          description: "אגם",
          googleMapLink: "https://maps.app.goo.gl/nRByfvtcwQHnP1e39",
          images: IMAGES.lake,
        },
        {
          name: "Natural Salt Fields",
          description: "יפה מאוד מלוח",
          googleMapLink: "https://maps.app.goo.gl/vTT7H3MgVYXiMhti6",
          images: IMAGES.salt,
        },
      ],
    },
  ],
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
