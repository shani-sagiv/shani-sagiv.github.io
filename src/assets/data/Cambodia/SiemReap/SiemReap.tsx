import { Destination, Info } from "models/Destination";
import IMAGES from "./images";
import { createDate } from "helpers/dateHelpers";

export const SIEM_REAP: Destination = {
  id: "SIEM_REAP",
  displayName: {
    hebrew: "סיאם ריפ",
    english: "siem reap",
  },
  images: IMAGES.general,
  description: "אחלה של מקום חיי לילה ברים מקדשים מה צריך יותר",
  profileImg: IMAGES.profileImg,
  hotels: [
    {
      name: "Golden Bayon Boutique Hotel",
      type: "Hotel",
      dates: [{ from: createDate("24/12/2024"), to: createDate("06/01/2025") }],
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
      name: "K2 skate Park Club",
      description: "רמפות חשמל רק רולר",
      googleMapLink: "https://maps.app.goo.gl/Y1xV1DEUojspaHEg8",
      images: IMAGES.skatePark,
      price: "3 דולר ליום כולל ציוד משהו כזה",
    },
    {
      type: "Attraction",
      name: "Royal Independence Gardens",
      description: "מלא עטלפים fox bat",
      googleMapLink: "https://maps.app.goo.gl/YFzeVTbktzwbdHr16",
      images: IMAGES.RoyalIndependence,
    },
  ],
  attractionsGroups: [
    {
      type: "AttractionGroup",
      name: "יום טיול עם סים הנסיך שבחר לאן נלך",
      description: "",
      attractions: [
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
    },
    {
      type: "AttractionGroup",
      name: "יום טיול ערב עם סים הנסיך לחוות לוטוסים",
      description: "",
      attractions: [
        {
          type: "Attraction",
          name: "Khmer Restaurant",
          description: "מקום חמוד חוות לוטוסים",
          googleMapLink: "https://maps.app.goo.gl/McSN4sRNFhL4UbKAA",
          images: IMAGES.KhmerRestaurant,
        },
        {
          type: "Attraction",
          name: "Best Sunset in Siem Reap: Phnom Krom",
          description: "היינו למטה עם הילדים ולמעלה לשקיעה",
          googleMapLink: "https://maps.app.goo.gl/4C6Eqdfk8xwUhnYw7",
          images: IMAGES.PhnomKrom,
        },
      ],
    },
    {
      type: "AttractionGroup",
      name: "יום מקדשים 1 עם סים הנסיך (2.1)",
      description: "",
      attractions: [
        {
          type: "Attraction",
          name: "Angkor Wat",
          description: "אנגקור וואט",
          googleMapLink: "https://maps.app.goo.gl/vcrcjSe3SJoxmC6B9",
          images: IMAGES.AngkorWat,
        },
        {
          type: "Attraction",
          name: "Bayon Temple",
          description: "מקדש הפרצופים המרובים",
          googleMapLink: "https://maps.app.goo.gl/9NNj8RaESA5U1biW9",
          images: IMAGES.Bayon,
        },
        {
          type: "Attraction",
          name: "Spean Thmor",
          description: "פעם היה סכר",
          googleMapLink: "https://maps.app.goo.gl/r5jWLeyz1GnBE3679",
          images: IMAGES.SpeanThmor,
        },
        {
          type: "Attraction",
          name: "PrasatTaKeo Ta Keo",
          description: "",
          googleMapLink: "https://maps.app.goo.gl/dwNANHgTmAWfN95JA",
          images: IMAGES.PrasatTaKeo,
        },
        {
          type: "Attraction",
          name: "Ta Prohm",
          description: "",
          googleMapLink: "https://maps.app.goo.gl/eWhtrwt87JWWqwzw8",
          images: IMAGES.TaProhm,
        },
      ],
    },
    {
      type: "AttractionGroup",
      name: "יום מקדשים 2 עם סים הנסיך (3.1)",
      description: "",
      attractions: [
        {
          type: "Attraction",
          name: "PrasatTaKeo Preah Khan",
          description: "",
          googleMapLink: "https://maps.app.goo.gl/YJRPqsJGTWRdbMjv9",
          images: IMAGES.PrasatPreahKhan,
        },
        {
          type: "Attraction",
          name: "Neak Poan",
          description: "מקדש מרפאה",
          googleMapLink: "https://maps.app.goo.gl/moDpJQjEAYDd5feb8",
          images: IMAGES.NeakPoan,
        },
        {
          type: "Attraction",
          name: "Ta Som",
          description: "",
          googleMapLink: "https://maps.app.goo.gl/RDjxp9eM5T4aoNvX7",
          images: IMAGES.TaSom,
        },
        {
          type: "Attraction",
          name: "Pre Rup",
          description: "ראינו מפה את השקיעה",
          googleMapLink: "https://maps.app.goo.gl/f3oHpe3ts4hNHAxg7",
          images: IMAGES.PreRup,
        },
      ],
    },
    {
      type: "AttractionGroup",
      name: "יום מקדשים 3 עם סים הנסיך (5.1)",
      description: "",
      attractions: [
        {
          type: "Attraction",
          name: "Angkor Wat",
          description: "טיול זריחה",
          googleMapLink: "https://maps.app.goo.gl/97r9sxYNemTgyMyL7",
          images: IMAGES.AngkorWatSunrise,
        },
        {
          type: "Attraction",
          name: "Banteay Kdei",
          description: "",
          googleMapLink: "https://maps.app.goo.gl/PiHnytLcNdeHM3a1A",
          images: IMAGES.BanteayKdei,
        },
      ],
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
  moreInfo: [
    {
      name: "Apsara",
      description: "ריקוד מסורתי",
      images: IMAGES.Apsara,
    },
    {
      name: "Rahu",
      description: "רשע אוכל את הירח",
      images: IMAGES.Rahu,
    },
    {
      name: "Garuda",
      description: "ציפור שנלחם בנחשים (נאגות) ומסמל את הניצחון על כוחות האופל",
      images: IMAGES.Garuda,
    },
    {
      name: "Naga",
      description: "נחשוש",
      images: IMAGES.Naga,
    },
  ],
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
