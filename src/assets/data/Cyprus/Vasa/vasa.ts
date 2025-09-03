import { createDate } from "helpers/dateHelpers";
import { Destination } from "models";
import { VASA_IMAGES } from "./images";

export const VASA: Destination = {
  id: "VASA",
  profileImg: VASA_IMAGES.profile,
  displayName: {
    hebrew: "ואסה",
    english: "Vasa",
  },
  // images: VASA_IMAGES.general,
  description: "כפר עם מעט מאוד אנשים חנויות או משהו לעשות",
  hotels: [
    {
      name: "Andre Marie studios",
      dates: [{ from: createDate("11/03/2024"), to: createDate("17/03/2024") }],
      description: "דירה ממש יפה וחמודה וגדולה",
      price: "1484 שח לכל הלילות",
      googleMapLink: "https://maps.app.goo.gl/ANyHN6FZTPJdtLAt5",
      images: VASA_IMAGES.Andre,
    },
  ],
  foods: [],
  attractions: [
    {
      name: "Papaioannou winery",
      description: "יקב נחמד עם בעלים חמוד",
      googleMapLink: "https://maps.app.goo.gl/LWJ9BbJtyuuLzTP39",
      images: VASA_IMAGES.Papaioannou,
    },
    {
      name: "Linos Winery",
      description: "יקב נחמד עם אחלה יין כחול",
      googleMapLink: "https://maps.app.goo.gl/NrqabDKvBoo1don58",
      images: VASA_IMAGES.Linos,
    },
  ],
  nightlife: [],
};
