import { Destination } from "models/Destination";
// import { HA_LONG_IMAGES } from "../../img/Vietnam";
import { createDate } from "helpers/dateHelpers";
import { HANOI_HA_LONG_CRUISE } from "../HANOI_HA_LONG_CRUISE";
import { HA_LONG_IMAGES } from "./images";

export const HA_LONG: Destination = {
  id: "HA_LONG",
  displayName: {
    hebrew: "הא לונג",
    english: "ha long",
  },
  description:
    "האזור חוף של הא לונג, חופים מהממים, נראה מאוד שווה אבל הכל ריק מבפנים שקרנים",
  profileImg: HA_LONG_IMAGES.profileImg,
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
      images: HA_LONG_IMAGES.chillBar,
    },
    HANOI_HA_LONG_CRUISE.HA_LONG,
    {
      name: "Bãi tắm",
      description: "אזור מאוד נחמד עם ברים ומסעדות על החוף",
      // googleMapLink: "https://maps.app.goo.gl/F9rEa4qJxXuamdf1A",
      images: HA_LONG_IMAGES.baitam,
    },
  ],
  nightlife: [],
  shells: [],
  images: HA_LONG_IMAGES.general,
};
