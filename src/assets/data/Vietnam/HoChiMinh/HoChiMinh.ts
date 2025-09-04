import { Destination } from "models/Destination";
// import { HO_CHI_MINH_IMAGES } from "../../img/Vietnam";
import { createDate } from "helpers/dateHelpers";
import HO_CHI_MINH_IMAGES from "./images";

export const HoChiMinh: Destination = {
  id: "HoChiMinh",
  displayName: {
    hebrew: "הו צי מין",
    english: "Ho Chi Minh",
  },
  description: "עיר גדולה רחוב כיף של ערב מאוד נחמד",
  profileImg: HO_CHI_MINH_IMAGES.profileImg,
  hotels: [
    {
      name: "Huazhu Hotel",
      description: "מלון מאוד נחמד קרוב לאזור המרכזי יקר מדי",
      dates: [{ from: createDate("02/12/2024"), to: createDate("05/12/2024") }],

      googleMapLink: "https://maps.app.goo.gl/dajy1fdGZ9Pi9EZHA",
      id: "Huazhu", images: HO_CHI_MINH_IMAGES.Huazhu,
    },
  ],
  foods: [],
  attractions: [],
  nightlife: [],
  shells: [],
  images: HO_CHI_MINH_IMAGES.general,
};
