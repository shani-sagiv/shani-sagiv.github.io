import { Destination } from "models/Destination";
import { createDate } from "helpers/dateHelpers";
import {PATTAYA_IMAGES as IMAGES} from "./images/index";

export const PATTAYA: Destination = {
  id: "PATTAYA",
  profileImg: IMAGES.profile,
  displayName: {
    hebrew: "פאטאיה",
    english: "Pattaya",
  },
  images: IMAGES.general,
  description: "מלא זונות מלא חיי לילה אחלה חופים",
  hotels: [
    {
      name: "The Bayview",
      googleMapLink: "https://maps.app.goo.gl/iqbrRfp7k3Qw3Vmy9",
      images: IMAGES.Bayview,
      dates: [{ from: createDate("19/09/2024"), to: createDate("22/09/2024") }],
      description: "מלון סבבה אחלה של מיקום אחלה של בריכה ואוכל",
    },
    {
      name: "The Base inn",
      googleMapLink: "https://maps.app.goo.gl/HhDXgbDy8uJ2jd3XA",
      dates: [{ from: createDate("22/09/2024"), to: createDate("27/09/2024") }],
      description: "מלון חמוד אחלה של מיקום",
    },
  ],
  foods: [],
  attractions: [
    {
      name: "Nong Nooch Botanical Garden",
      description: "מקום ענק דינוזאורים פארק בוטני",
      googleMapLink: "https://maps.app.goo.gl/1khPab9MEfXiEnK99",
      images: IMAGES.NongNooch,
    },
  ],
  nightlife: [],
};
