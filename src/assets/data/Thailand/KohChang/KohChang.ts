import { Destination } from "models/Destination";
import { createDate } from "helpers/dateHelpers";
import {KOH_CHANG_IMAGES as IMAGES} from "./images";

export const KOH_CHANG: Destination = {
  id: "KOH_CHANG",
  profileImg: IMAGES.profile,
  displayName: {
    hebrew: "קו צ'אנג",
    english: "koh chang",
  },
  description: "",
  images: IMAGES.general,
  hotels: [
    {
      name: "Chang Buri",
      googleMapLink: "https://maps.app.goo.gl/H7ABRp8YLYxExFkd8",
      dates: [{ from: createDate("06/09/2024"), to: createDate("12/09/2024") }],
      description:
        "מלון ממש שווה, אחלה בריכות באסה שאי אפשר להיכנס למים שם והחיי לילה הקרובים מוזרים",
      images: IMAGES.ChangBuri,
    },
    {
      name: "Flora I Talay Resort",
      googleMapLink: "https://maps.app.goo.gl/GdHD6pPnrvg4MXwr7",
      dates: [{ from: createDate("12/09/2024"), to: createDate("19/09/2024") }],
      description: "מלון ממש ממש חמוד ושווה היה מאוד כיף",
      images: IMAGES.Flora,
    },
  ],
  foods: [],
  attractions: [],
  nightlife: [],
};
