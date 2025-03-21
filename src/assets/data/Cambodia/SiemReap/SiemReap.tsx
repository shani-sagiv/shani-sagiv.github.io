import { Destination, Info } from "models/Destination";
import IMAGES from "./images";
import { createDate } from "helpers/dateHelpers";
import React from "react";
import SiemReapMap from "../../../../siemReapMap";

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
      dates: [{ from: createDate("24/12/2024"), to: createDate("06/01/2025") }],
      description: "מללון ממוצע נחמד בדיוק שיפצו ופתחו את הבחוץ אז נחמד",
      images: IMAGES.GoldenBayon,
    },
  ],
  foods: [],
  attractions: [
    {
      name: "Floating Village, on Tonle Sap Lake",
      description: "היה ממש כיף עם המדיך סים הנסיך",
      googleMapLink: "https://maps.app.goo.gl/5oPpPnKK6Lp2mBSk7",
      images: IMAGES.FloatingVillage,
      price:
        "עלה 18 דולר היום עם סים המדריך ו18 דולר כניסה לכל אחד לסירה פרטית",
    },
    {
      name: "K2 skate Park Club",
      description: "רמפות חשמל רק רולר",
      googleMapLink: "https://maps.app.goo.gl/Y1xV1DEUojspaHEg8",
      images: IMAGES.skatePark,
      price: "3 דולר ליום כולל ציוד משהו כזה",
    },
    {
      name: "Royal Independence Gardens",
      description: "מלא עטלפים fox bat",
      googleMapLink: "https://maps.app.goo.gl/YFzeVTbktzwbdHr16",
      images: IMAGES.RoyalIndependence,
    },
  ],
  attractionsGroups: [
    {
      name: "יום טיול עם סים הנסיך שבחר לאן נלך",
      description: "",
      attractions: [
        {
          name: "Wat Svay Romeat Pagoda",
          description: "היה ממש כיף עם המדיך סים הנסיך",
          googleMapLink: "https://maps.app.goo.gl/quEEaBH9WuFUMqnw5",
          images: IMAGES.RomeatPagoda,
        },
        {
          name: "Angkor Botanical Garden",
          description: "לא מאוד גן בוטני חמוד מתגעגע אל הקוף המסכן",
          googleMapLink: "https://maps.app.goo.gl/k6SJajyQDN6qn7EE9",
          images: IMAGES.Botanical,
        },
      ],
    },
    {
      name: "יום טיול ערב עם סים הנסיך לחוות לוטוסים",
      description: "",
      attractions: [
        {
          name: "Khmer Restaurant",
          description: "מקום חמוד חוות לוטוסים",
          googleMapLink: "https://maps.app.goo.gl/McSN4sRNFhL4UbKAA",
          images: IMAGES.KhmerRestaurant,
        },
        {
          name: "Best Sunset in Siem Reap: Phnom Krom",
          description: "היינו למטה עם הילדים ולמעלה לשקיעה",
          googleMapLink: "https://maps.app.goo.gl/4C6Eqdfk8xwUhnYw7",
          images: IMAGES.PhnomKrom,
        },
      ],
    },
    {
      name: "יום מקדשים 1 עם סים הנסיך (2.1)",
      description: "",
      attractions: [
        {
          name: "Angkor Wat",
          description: "אנגקור וואט",
          googleMapLink: "https://maps.app.goo.gl/vcrcjSe3SJoxmC6B9",
          images: IMAGES.AngkorWat,
        },
        {
          name: "Bayon Temple",
          description: "מקדש הפרצופים המרובים",
          googleMapLink: "https://maps.app.goo.gl/9NNj8RaESA5U1biW9",
          images: IMAGES.Bayon,
        },
        {
          name: "Spean Thmor",
          description: "פעם היה סכר",
          googleMapLink: "https://maps.app.goo.gl/r5jWLeyz1GnBE3679",
          images: IMAGES.SpeanThmor,
        },
        {
          name: "PrasatTaKeo Ta Keo",
          description: "",
          googleMapLink: "https://maps.app.goo.gl/dwNANHgTmAWfN95JA",
          images: IMAGES.PrasatTaKeo,
        },
        {
          name: "Ta Prohm",
          description: "",
          googleMapLink: "https://maps.app.goo.gl/eWhtrwt87JWWqwzw8",
          images: IMAGES.TaProhm,
        },
      ],
    },
    {
      name: "יום מקדשים 2 עם סים הנסיך (3.1)",
      description: "",
      attractions: [
        {
          name: "PrasatTaKeo Preah Khan",
          description: "",
          googleMapLink: "https://maps.app.goo.gl/YJRPqsJGTWRdbMjv9",
          images: IMAGES.PrasatPreahKhan,
        },
        {
          name: "Neak Poan",
          description: "מקדש מרפאה",
          googleMapLink: "https://maps.app.goo.gl/moDpJQjEAYDd5feb8",
          images: IMAGES.NeakPoan,
        },
        {
          name: "Ta Som",
          description: "",
          googleMapLink: "https://maps.app.goo.gl/RDjxp9eM5T4aoNvX7",
          images: IMAGES.TaSom,
        },
        {
          name: "Pre Rup",
          description: "ראינו מפה את השקיעה",
          googleMapLink: "https://maps.app.goo.gl/f3oHpe3ts4hNHAxg7",
          images: IMAGES.PreRup,
        },
      ],
    },
    {
      name: "יום מקדשים 3 עם סים הנסיך (5.1)",
      description: "",
      attractions: [
        {
          name: "Angkor Wat",
          description: "טיול זריחה",
          googleMapLink: "https://maps.app.goo.gl/97r9sxYNemTgyMyL7",
          images: IMAGES.AngkorWatSunrise,
        },
        {
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
  additionalCode: (
    <div style={{ height: 500, width: "100vw" }}>
      <h1 style={{ margin: 0 }}>מפה של המקדשים</h1>

      <h3 style={{ margin: 0, marginBottom: 10 }}> איזה יפים הם על המפה</h3>
      <SiemReapMap />
    </div>
  ),
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
