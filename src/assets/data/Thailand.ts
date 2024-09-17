import { createDate } from "helpers/dateHelpers";
import { Recommendation, Country, Destination } from "../../models";
import { shell1 } from "../img/Thailand/KohLanta/index";

export const THAILAND: Country = {
  id: "THA",
  name: "THAILAND",
  displayName: {
    hebrew: "תאילנד",
    english: "Thailand",
  },
  description:
    "תאילנד היא מדינה טרופית בדרום-מזרח אסיה, המפורסמת בחופים קסומים, מקדשים בודהיסטיים מרהיבים ותרבות עשירה. בנוסף, המדינה מציעה חוויות קולינריות מגוונות, חיי לילה תוססים ושווקים ססגוניים",
  gold_recommendation: [],
};

export const KOH_LANTA: Destination = {
  id: "KOH_LANTA",
  name: "KOH LANTA",
  displayName: {
    hebrew: "קו לנטה",
    english: "Koh Lanta",
  },
  dates: [{ from: createDate("17/04/2024"), to: createDate("29/04/2024") }],
  // shells: [shell1],
  shells: [],
  description:
    "קו לנטה הוא אי שקט ורגוע בדרום תאילנד, הידוע בחופים זהובים, מי טורקיז ושוניות אלמוגים מושלמות לצלילה ושנורקלינג. האי מציע אווירה נינוחה עם עיירות חוף קטנות, נופים ירוקים ומקומות מפלט למי שמחפש להתרחק מהמולת התיירות.",
  hotels: [
    {
      name: "Lanta Riviera Resort",
      type: "Hotel",
      description:
        "מלון על החוף, חדרים גדולים ונקיים, בריכה כייפית! המקום ממש לא עמוס ויש המון ברים ומסעדות על החוף במרחק הליכה",
      price: "75 ש״ח ללילה",
      coordinates: "7.577414295436549, 99.0335781460971",
      googleMapLink: "https://maps.app.goo.gl/URVK9gTZAGHwMBpV8",
    },
  ],
  foods: [],
  attractions: [],
  nightlife: [],
};
