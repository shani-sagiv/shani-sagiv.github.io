import { Destination } from "models/Destination";
import IMAGES from "./images";
import {createDate} from "helpers/dateHelpers";

export const ChamIslands: Destination = {
  id: "ChamIslands",
  displayName: {
    hebrew: "צאם איילנד",
    english: "Chàm Islands",
  },
  images:IMAGES.general,
  description: "אחלה של אי קרוב להוי אן מאוד מומלץ אין הרבה אבל מאוד יפה",
  profileImg: IMAGES.profileImg,
  hotels: [
    {
  name: "Sunbay Homestay Cù Lao Chàm & Restaurant",
  dates: [{ from: createDate("27/07/2025"), to: createDate("29/07/2025") }],
  description:"מלון מינימלי אבל היה אחלה, אחלה דגים",
  images: IMAGES.sunbay,
}
  ],
  foods: [],
  attractions: [
    {
  name: "XEP Beach",
  description: "הליכה לשם עלייה וירידה אפשרי אבל כבר עדיף אופנוע ולטייל, חוף מטורף חובה שנורקלים",
  googleMapLink: "https://maps.app.goo.gl/CuX8nksX1uvyFwGB8",
  images: IMAGES.XEP,
},
    {
  name: "MONKEY BEACH BAR Cocktail - Relax & More",
  description: "אחלה חוף נחמד אבל יותר עמוס, להיזהר מהקופים כשכולם הולכים, אני בשוק רק עכשיו הבנתי למה קוראים לו ככה",
  googleMapLink: "https://maps.app.goo.gl/zroiNi9LE3kJp5g3A",
  images: IMAGES.MONKEYBEACH,
}
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