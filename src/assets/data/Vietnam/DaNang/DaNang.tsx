import { Destination } from "models/Destination";
import IMAGES from "./images";
import { createDate } from "helpers/dateHelpers";

export const DA_NANG: Destination = {
  id: "DA_NANG",
  displayName: {
    hebrew: "דה נאנג",
    english: "Da Nang",
  },
  images: IMAGES.general,
  description: "אחלה של מקום יש הכל מפוצץ עובדים מרחוק",
  profileImg: IMAGES.profileImg,
  hotels: [
    {
      name: "Platinum Danang Hotel",
      dates: [{ from: createDate("11/03/2025"), to: createDate("15/03/2025") }],
      description: "כל החדר ריח של שירותים בתחנה מרכזית לא מומלץ",
      // images: IMAGES.,
    },
  ],
  foods: [],
  attractions: [
    {
      name: "Aqua Betty",
      description: "בר מאוד חמוד אחלה קריוקי",
      googleMapLink: "https://maps.app.goo.gl/e3zsQK4PT6ueoKKc6",
      images: IMAGES.AquaBetty,
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
