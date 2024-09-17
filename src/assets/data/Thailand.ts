import { createDate } from "helpers/dateHelpers";
import { Country, Destination } from "models";
import simSrc from "assets/img/Thailand/sim.jpeg";
import { KHO_LANTA } from "assets/img/Thailand/KohLanta";

export const THAILAND: Country = {
  id: "THA",
  name: "THAILAND",
  displayName: {
    hebrew: "תאילנד",
    english: "Thailand",
  },
  description:
    "תאילנד היא מדינה טרופית בדרום-מזרח אסיה, המפורסמת בחופים קסומים, מקדשים בודהיסטיים מרהיבים ותרבות עשירה. בנוסף, המדינה מציעה חוויות קולינריות מגוונות, חיי לילה תוססים ושווקים ססגוניים",
  gold_recommendation: [
    {
      name: "תחבורה 🚌",
      type: "Info",
      description:
        "כל נסיעה כמעט אפשר לסגור דרך 12go(כולל מעבורות), הסליפרים השווים זה הvip, המספר זה כמות המיטות אז ככל שנמוך יותר המיטות יותר גדולות(20+-30~)" +
        "\n" +
        "יש שם את הגוגל מיקום של התחנה עלייה וירידה חשוב לבדוק לפני",
    },
    {
      name: "יתושים 🦟",
      type: "Info",
      description:
        "נגד יתושים: ספריי ורוד מה7/11 " + "\n" + "נגד עקיצות: קוף מחזיק אפרסק",
      images: KHO_LANTA.mosquitos,
    },
    {
      name: "סים ☎️",
      type: "Info",
      description:
        "יש ב7/11 סימים ממש בזול, יש להם לכמה מספרי ימים, כל אחד הוא כמות גיגה פר יום אז כדאי לבדוק כמה משתמשים כי לא תמיד צריך הרבה",
      images: [simSrc],
    },
  ],
  profileImg: KHO_LANTA.profile,
};

export const KOH_LANTA: Destination = {
  id: "KOH_LANTA",
  name: "KOH LANTA",
  profileImg: KHO_LANTA.profile,
  displayName: {
    hebrew: "קו לנטה",
    english: "Koh Lanta",
  },
  dates: [{ from: createDate("17/04/2024"), to: createDate("29/04/2024") }],
  shells: KHO_LANTA.shells,
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
      images: KHO_LANTA.hotelLantaRiviera,
    },
  ],
  foods: [
    {
      name: "Lanta Riviera Resort",
      type: "Restaurant",
      description: "המסעדה בבריכה של המלון הייתה אחלה ממש, אכלנו בה מלאאא  ",
      coordinates: "7.577414295436549, 99.0335781460971",
      googleMapLink: "https://maps.app.goo.gl/URVK9gTZAGHwMBpV8",
      images: KHO_LANTA.restaurantsLantaRiviera,
    },
    {
      name: "Moonwalk Restaurant & Bar",
      type: "Restaurant",
      description:
        "מסעדה ממש חמודה על החוף, כמה דק הליכה מהחוף של המלון. המלצריות היו ממש נחמדות והאוכל מצויין",
      coordinates: "7.573421274671827, 99.03362313707707",
      googleMapLink: "https://maps.app.goo.gl/t66ajYqb2s9AKVnw5",
      images: KHO_LANTA.restaurantsMoonwalk,
    },

    {
      name: "M Thai Food",
      type: "Restaurant",
      description:
        "ארוחת בוקר חמודה ב100 באט!! יש גם אחלה של צהריים/ערב. ממש דקה הליכה מהמלון",
      coordinates: "7.5774966710527485, 99.03474611595301",
      googleMapLink: "https://maps.app.goo.gl/9T8JspxesXBq9HnTA",
      // images: KHO_LANTA.restaurantsMoonwalk,
    },
  ],
  attractions: [
    {
      name: "Following Giants",
      type: "Attraction",
      description:
        "חוות פילים ממש מוסרית, הפילים משוחררים בחופשיות, לא נוגעים בהם או מציקים להם. הסבירו לנו בכניסה על שיקום פילים ששימשו לבידור בני אדם.",
      coordinates: "7.495899016237173, 99.0867636",
      googleMapLink: "https://maps.app.goo.gl/1B1HYB4Soi51KvLU8",
      images: KHO_LANTA.attractionsFollowingGiants,
    },
    {
      name: "גאות ושפל ממש גדולים",
      type: "Attraction",
      description: "יש שם גאות ושפל ממש חזקים אז אפשר לבוא לשם לראות המון מהים",
      images: KHO_LANTA.beachTravelImages,
    },
    {
      name: "שוק לילה",
      type: "Attraction",
      description:
        "בצפון האי יש שוק קטן וחמוד בלילה, יש דוכני אוכל נחמד וכיף להסתובב",
      coordinates: "7.649099594951741, 99.03700163322618",
      googleMapLink: "https://maps.app.goo.gl/FxiaFTCA2EckFqUV6",
      images: KHO_LANTA.attractionsMarket,
    },
  ],
  nightlife: [
    {
      name: "Beach Bars",
      type: "NightLife",
      description:
        "יש על החוף מלא ברים, מושלם לראות את השקיעה ולשבת בלילה. לפעמים גם יש מופעי אש, אפשר לשאול",
      images: KHO_LANTA.nightLife,
    },
  ],
};
