import {
  KOH_CHANG_IMAGES,
} from "assets/img/Thailand";
import { createDate } from "helpers/dateHelpers";
import { Destination } from "models/Destination";
export const KOH_CHANG: Destination = {
  id: "KOH_CHANG",
  profileImg: KOH_CHANG_IMAGES.profile,
  displayName: {
    hebrew: "קו צ'אנג",
    english: "koh chang",
  },
  description: "",
  images: KOH_CHANG_IMAGES.general,
  hotels: [
    {
      name: "Chang Buri",
      googleMapLink: "https://maps.app.goo.gl/H7ABRp8YLYxExFkd8",
      dates: [{ from: createDate("06/09/2024"), to: createDate("12/09/2024") }],
      description:
        "מלון ממש שווה, אחלה בריכות באסה שאי אפשר להיכנס למים שם והחיי לילה הקרובים מוזרים",
    //   images: KOH_CHANG_IMAGES.ChangBuri,
      id:"ChangBuri",
    },
    {
      name: "Flora I Talay Resort",
      googleMapLink: "https://maps.app.goo.gl/GdHD6pPnrvg4MXwr7",
      dates: [{ from: createDate("12/09/2024"), to: createDate("19/09/2024") }],
      description: "מלון ממש ממש חמוד ושווה היה מאוד כיף",
    //   images: KOH_CHANG_IMAGES.Flora,
    id:"Flora"
    },
  ],
  foods: [],
  attractions: [],
  nightlife: [],
};