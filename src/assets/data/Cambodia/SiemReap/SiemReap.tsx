import { Destination } from "models/Destination";
import IMAGES from "./images";
import { createDate } from "helpers/dateHelpers";

export const SIEM_REAP: Destination = {
  id: "SIEM_REAP",
  displayName: {
    hebrew: "סיאם ריפ",
    english: "siem reap",
  },
  images: IMAGES.general,
  description: "",
  profileImg: IMAGES.profileImg,
  hotels: [
    {
      name: "Golden Bayon Boutique Hotel",
      type: "Hotel",
      dates: [{ from: createDate("24/12/2024"), to: createDate("02/01/2025") }],
      description: "מללון ממוצע נחמד בדיוק שיפצו ופתחו את הבחוץ אז נחמד",
      images: IMAGES.GoldenBayon,
    },
  ],
  foods: [],
  attractions: [
    {
      type: "Attraction",
      name: "Floating Village, on Tonle Sap Lake",
      description: "היה ממש כיף עם המדיך סים הנסיך",
      googleMapLink: "https://maps.app.goo.gl/5oPpPnKK6Lp2mBSk7",
      images: IMAGES.FloatingVillage,
      price:
        "עלה 18 דולר היום עם סים המדריך ו18 דולר כניסה לכל אחד לסירה פרטית",
    },
    {
      type: "Attraction",
      name: "Wat Svay Romeat Pagoda",
      description: "היה ממש כיף עם המדיך סים הנסיך",
      googleMapLink: "https://maps.app.goo.gl/quEEaBH9WuFUMqnw5",
      images: IMAGES.RomeatPagoda,
    },
    {
      type: "Attraction",
      name: "Angkor Botanical Garden",
      description: "לא מאוד גן בוטני חמוד מתגעגע אל הקוף המסכן",
      googleMapLink: "https://maps.app.goo.gl/k6SJajyQDN6qn7EE9",
      images: IMAGES.Botanical,
    },
  ],
  nightlife: [],
  gold_recommendation: [
    {
      name: "סים המדריך הנסיך",
      type: "Info",
      description: "פשט להגיד לו קח אותי למקום כיף",
      phones: ["+855 96 681 8940"],
      images: IMAGES.sim,
      // links: ["https://g.co/kgs/Tvd53dR"],
    },
  ],
  shells: [],
};

// {
//   name: "",
//   type: "Hotel",
//   dates: [{ from: createDate("00/00/2024"), to: createDate("00/00/2024") }],
//   description:"",
//   images: IMAGES.,
// }

// {
//   type: "",
//   name: "",
//   description: "",
//   googleMapLink: "",
//   images: IMAGES.,
// }
