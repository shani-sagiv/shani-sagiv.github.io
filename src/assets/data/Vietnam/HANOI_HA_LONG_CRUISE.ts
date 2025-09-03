import { AttractionRecommendation } from "models/Recommendation";
import { HANOI_IMAGES } from "./hanoi/images";
import { HA_LONG_IMAGES } from "./HaLong/images";
// import { HA_LONG_IMAGES, HANOI_IMAGES } from "../../img/Vietnam";

export const HANOI_HA_LONG_CRUISE: { [key: string]: AttractionRecommendation } =
  {
    HANOI: {
      name: "שיט במפרץ הא לונג עם אוטובוס הלוך חזור",
      description:
        "נסיעה עצירה באיזה חוות פינים אחכ נסיעה שיט של כמה שעיות במפרץ, כולל מערץ נטיפים וקייאקים ואיזה חגיגת שגיאה על הסירה דווקא חמוד פירות עניינים",
      images: HANOI_IMAGES.cruise,
    },
    HA_LONG: {
      name: "שיט במפרץ הא לונג",
      description: "שיט של כמה שעיות במפרץ, כולל מערץ נטיפים וקייאקים",
      // googleMapLink: "https://maps.app.goo.gl/F9rEa4qJxXuamdf1A",
      images: HA_LONG_IMAGES.cruise,
    },
  };
