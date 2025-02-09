import { TA_VAN_IMAGES } from "../../img/Vietnam";
import { createDate } from "../../../helpers/dateHelpers";
import { Destination } from "models/Destination";

export const TA_VAN: Destination = {
  id: "TA_VAN",
  displayName: {
    hebrew: "טה ואן",
    english: "ta van",
  },
  description:
    "כפר קרוב לסאפה איפה שכולם הולכים עם המאמות, אין הרבה לעשות אבל היינו בריזורט ממש ממש כיף וחמוד",
  profileImg: TA_VAN_IMAGES.profileImg,
  hotels: [
    {
      name: "Healing Homestay Sapa",
      googleMapLink: "https://maps.app.goo.gl/FK85hoQo7yxf2Vmw6",
      images: TA_VAN_IMAGES.Healing,
      dates: [{ from: createDate("16/08/2024"), to: createDate("26/08/2024") }],
      description: "ריזורט סופר חמוד עם נוף מהמם ואנשים ממש חמודים",
    },
  ],
  foods: [],
  attractions: [
    {
      name: "Ly House Ta Van",
      description: "בית קפה מסעדה מאודח חמוד על הנהר",
      googleMapLink: "https://maps.app.goo.gl/58uVPKB3BghKi45NA",
      images: TA_VAN_IMAGES.LyHouse,
    },
    {
      name: "Love Waterfall",
      description: " מסלול חמוד יפה ולא ארוך שמוביל למפל",
      googleMapLink: "https://maps.app.goo.gl/cacQvdGDcX3xBydV9",
      images: TA_VAN_IMAGES.LoveWaterfall,
    },
  ],
  nightlife: [],
  shells: [],
  images: TA_VAN_IMAGES.general,
};
