import { AttractionRecommendation } from "models/Recommendation";
import HANOI_IMAGES from "./Hanoi/images";
import HA_LONG_IMAGES from "./HaLong/images";

export const HanoiHaLongCruise: { [key: string]: AttractionRecommendation } =
  {
    Hanoi: {
      name: "שיט במפרץ הא לונג עם אוטובוס הלוך חזור",
      description:
        "נסיעה עצירה באיזה חוות פינים אחכ נסיעה שיט של כמה שעיות במפרץ, כולל מערץ נטיפים וקייאקים ואיזה חגיגת שגיאה על הסירה דווקא חמוד פירות עניינים",
      id: "cruise", images: HANOI_IMAGES.cruise,
    },
    HaLong: {
      name: "שיט במפרץ הא לונג",
      description: "שיט של כמה שעיות במפרץ, כולל מערץ נטיפים וקייאקים",
      // googleMapLink: "https://maps.app.goo.gl/F9rEa4qJxXuamdf1A",
      id: "cruise", images: HA_LONG_IMAGES.cruise,
    },
  };
