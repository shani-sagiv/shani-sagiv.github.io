import { Destination } from "models/Destination";
// import { IMAGES } from "../../img/Vietnam";
import { createDate } from "helpers/dateHelpers";
import { HanoiHaLongCruise } from "../HanoiHaLongCruise";
import IMAGES from "./images";

export const HaLong: Destination = {
  id: "HaLong",
  displayName: {
    hebrew: "הא לונג",
    english: "ha long",
  },
  description:
    "האזור חוף של הא לונג, חופים מהממים, נראה מאוד שווה אבל הכל ריק מבפנים שקרנים",
  profileImg: IMAGES.profileImg,
  hotels: [
    {
      name: "The Marine Hotel",
      googleMapLink: "https://maps.app.goo.gl/dQtSJ4Mqr7L9N3w39",
      dates: [{ from: createDate("02/08/2024"), to: createDate("08/08/2024") }],
      description: "מלןו קצת דלוח",
    },
  ],
  foods: [],
  attractions: [
    {
      name: "Chill Beach Bar",
      description: "בר חוף ממש חמוד",
      googleMapLink: "https://maps.app.goo.gl/F9rEa4qJxXuamdf1A",
      id: "chillBar", images: IMAGES.chillBar,
    },
    HanoiHaLongCruise.HaLong,
    {
      name: "Bãi tắm",
      description: "אזור מאוד נחמד עם ברים ומסעדות על החוף",
      // googleMapLink: "https://maps.app.goo.gl/F9rEa4qJxXuamdf1A",
      id: "baitam", images: IMAGES.baitam,
    },
  ],
  nightlife: [],
  shells: [
    IMAGES.shells
  ],
  images: IMAGES.general,
};
