import { Destination } from "models/Destination";
import { createDate } from "helpers/dateHelpers";
import  IMAGES from "./images";

export const KohTao: Destination = {
  id: "KohTao",
  profileImg: IMAGES.profileImg,
  displayName: {
    hebrew: "קו טאו",
    english: "Koh Tao",
  },
  images: IMAGES.general,
  description:
    "אי קטן חמוד נחמד מאוד קל חוף עם הרבה ברים מסעדות נחמד אחלה אטרקציות",
  hotels: [
    {
      name: "Mama Ochai",
      googleMapLink: "https://maps.app.goo.gl/AoVWBfhQVJsfoiK26",
      images: IMAGES.Ochai,
      dates: [
        { from: createDate("06/10/2024"), to: createDate("15/10/2024") },
        { from: createDate("12/11/2024"), to: createDate("26/11/2024") },
      ],
      description: "אחלה מאמא יוחאי, בונגלו בסוף הרצועה חשמל",
    },
  ],
  foods: [
    {
      name: "Sairee Hut Resort And Restaurant",
      googleMapLink: "https://maps.app.goo.gl/5Pv5KRGiJuqZY1ed9",
      description: "אחלה מקום על הים אוכל זול נחמד מאוד",
      images: IMAGES.hutResort,
    },
  ],
  attractions: [
    {
      name: "Secret Bar",
      googleMapLink: "https://maps.app.goo.gl/BsUgE2JKJBmyW3eQA",
      description:
        "בר חמוד אחלה של נוף פנורמי גדול מלא שמש דרך להגיע סיוט אם אני זוכר נכון",
      images: IMAGES.secret,
    },
    {
      name: "Freedom Beach",
      googleMapLink: "https://maps.app.goo.gl/vVyZPusg4qVydKU58",
      description:
        "חוף חמוד כניסה 50 שנורקלים מטורפים, יש שם עליה של קיר טיםוס רמה 9000 לנקודת תצפית",
      images: IMAGES.FreedomBeach,
    },
  ],
  nightlife: [
    {
      name: "Escobar",
      googleMapLink: "https://maps.app.goo.gl/Aut1bXWx85H3cgjb9",
      description:
        "אחלה מסיבה כיפית אחלה רחבות שירותים ברים הכל נוח אפילו שיש עליות של השטן",
      images: IMAGES.Escobar,
    },
  ],
};
