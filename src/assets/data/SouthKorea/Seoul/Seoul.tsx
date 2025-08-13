import { Destination } from "models/Destination";
import IMAGES from "./images";
import {createDate} from "helpers/dateHelpers";

export const SEOUL: Destination = {
  id: "SEOUL",
  displayName: {
    hebrew: "סיאול",
    english: "seoul",
  },
  images:IMAGES.general,
  description: "ממש חמודה וענקית ויש מליון לעשות",
  profileImg: IMAGES.profileImg,
  hotels: [
    {
  name: "PIPE Hostel Myeongdong - 402",
  dates: [{ from: createDate("07/08/2025"), to: createDate("14/08/2025") }],
  description:"חדר בגודל של קופסאת גפרורים אבל וואלה היה ממש אחלה והמיקום פצצה",
  googleMapLink: "https://www.airbnb.com/rooms/24947938?c=.pi80.pkYm9va2luZy9ndWVzdC9SZXNlcnZhdGlvbkNvbmZpcm1hdGlvblRlbXBsYXRl&euid=d9728e2c-5568-11c7-d941-1c25cf2debf3&source_impression_id=p3_1755069652_P3MMrw7tToJDGRqU",
  images: IMAGES.PIPE,
},  {
  name: "Entire home in Donggyo-dong, Mapo-gu, South Korea",
  dates: [{ from: createDate("14/08/2025"), to: createDate("28/08/2025") }],
  description:"",
  googleMapLink: "https://www.airbnb.com/rooms/46609346?c=.pi80.pkYm9va2luZy9ndWVzdC9SZXNlcnZhdGlvblBlbmRpbmdUZW1wbGF0ZQ%3D%3D&euid=3970760f-eae6-adbe-9d80-e2fe471b6283&source_impression_id=p3_1755069824_P3TiCKLDMdveeXrC",
  // images: IMAGES.PIPE,
}
  ],
  foods: [],
  attractions: [],
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