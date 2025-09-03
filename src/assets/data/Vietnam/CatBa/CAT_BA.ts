import { Destination } from "models/Destination";
// import { CAT_BA_IMAGES } from "../../img/Vietnam";
import { createDate } from "helpers/dateHelpers";
import CAT_BA_IMAGES from "./images";

export const CAT_BA: Destination = {
  id: "CAT_BA",
  displayName: {
    hebrew: "קאט בה",
    english: "cat ba",
  },
  description: "אי חמוד נחמד במפרץ הא לונג, אין ככ הרבה מה לעשות בו",
  profileImg: CAT_BA_IMAGES.profileImg,
  hotels: [
    {
      name: "Sun Flower Hotel",
      dates: [{ from: createDate("19/07/2024"), to: createDate("02/08/2024") }],
      description:
        "סגרנו באמרלד היה נראה כמו שירותים של תחנה מרכזית ועברנו חיש מהר לsun flower hotel" +
        "\n" +
        "מלון טוב חדרים טובים אחלה מיקום",
      images: CAT_BA_IMAGES.sunflower,
    },
  ],
  images: CAT_BA_IMAGES.general,
  foods: [],
  attractions: [
    {
      name: "Thung lũng Bướm - Butterfly Valley בית קפה",
      googleMapLink: "https://maps.app.goo.gl/TzPePDTti6GLQt1E9",
      description: "בית קפה נחמד עם נוף יפה ואזור נחמד להסתובב בו",
      images: CAT_BA_IMAGES.butterflyValley,
    },
    {
      name: "Secret Garden",
      googleMapLink: "https://maps.app.goo.gl/neab5BD1rHKZLhT97",
      description: "הוסטל עם אחלה מתחם לאוכל קפה בירה בריכה מה שרוצים",
      images: CAT_BA_IMAGES.SecretGarden,
    },
    {
      name: "Tung thu beach",
      googleMapLink: "https://maps.app.goo.gl/xYN2LeLQoxG34Avx7",
      description: "חוף מאוד נחמד עם כמה אזורים של ויאטנמים לשבת",
      images: CAT_BA_IMAGES.Tungthu,
    },
    {
      name: "Eden Bar & Coffee",
      googleMapLink: "https://maps.app.goo.gl/r5r3V8jUoK2534C87",
      description: "בית קפה חמוד באמצע שום מקום",
      images: CAT_BA_IMAGES.Eden,
    },
    {
      name: "Trung Tâm Y Tế Huyện Cát Hải",
      description: "בית חולים ממש טוב",
      googleMapLink: "https://maps.app.goo.gl/m4ZUzMm2LfhSNnqaA",
      images: CAT_BA_IMAGES.hospital,
    },
  ],
  nightlife: [],
  shells: CAT_BA_IMAGES.shells,
  gold_recommendation: [
    {
      name: "רכבל",
      description:
        "סגרנו להגיע לשם מהאנוי. הציעו לנו לעלות על הרכבל תמורת עוד כמה שקלים וזה היה ממש ממש יפה ושווה את זה!! מומלץ",
      images: CAT_BA_IMAGES.cable,
    },
  ],
};
