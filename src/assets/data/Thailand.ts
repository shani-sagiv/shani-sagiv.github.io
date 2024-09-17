import { createDate } from "helpers/dateHelpers";
import { Country, Destination } from "models";
import simSrc from "assets/img/Thailand/sim.jpeg";
import { KHO_LANTA, KHO_PHA_NGAN } from "assets/img/Thailand";
import { seaResortImages } from "../img/Thailand/KohPhaNgan";

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
  shells: KHO_LANTA.shells,
  description:
    "קו לנטה הוא אי שקט ורגוע בדרום תאילנד, הידוע בחופים זהובים, מי טורקיז ושוניות אלמוגים מושלמות לצלילה ושנורקלינג. האי מציע אווירה נינוחה עם עיירות חוף קטנות, נופים ירוקים ומקומות מפלט למי שמחפש להתרחק מהמולת התיירות.",
  hotels: [
    {
      name: "Lanta Riviera Resort",
      type: "Hotel",
      dates: [{ from: createDate("17/04/2024"), to: createDate("30/04/2024") }],
      description:
        "מלון על החוף, חדרים גדולים ונקיים, בריכה כייפית! המקום ממש לא עמוס ויש המון ברים ומסעדות על החוף במרחק הליכה",
      price: "75 ש״ח ללילה",

      googleMapLink: "https://maps.app.goo.gl/URVK9gTZAGHwMBpV8",
      images: KHO_LANTA.hotelLantaRiviera,
    },
  ],
  foods: [
    {
      name: "Lanta Riviera Resort",
      type: "Restaurant",
      description: "המסעדה בבריכה של המלון הייתה אחלה ממש, אכלנו בה מלאאא  ",
      googleMapLink: "https://maps.app.goo.gl/URVK9gTZAGHwMBpV8",
      images: KHO_LANTA.restaurantsLantaRiviera,
    },
    {
      name: "Moonwalk Restaurant & Bar",
      type: "Restaurant",
      description:
        "מסעדה ממש חמודה על החוף, כמה דק הליכה מהחוף של המלון. המלצריות היו ממש נחמדות והאוכל מצויין",
      googleMapLink: "https://maps.app.goo.gl/t66ajYqb2s9AKVnw5",
      images: KHO_LANTA.restaurantsMoonwalk,
    },

    {
      name: "M Thai Food",
      type: "Restaurant",
      description:
        "ארוחת בוקר חמודה ב100 באט!! יש גם אחלה של צהריים/ערב. ממש דקה הליכה מהמלון",
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
export const KOH_PHA_NGAN: Destination = {
  id: "KOH_PHA_NGAN",
  name: "KOH LANTA",
  profileImg: KHO_PHA_NGAN.profile,
  displayName: {
    hebrew: "קו פנגן",
    english: "Koh Pha Ngan",
  },
  shells: [],
  description: "",
  hotels: [
    {
      name: "Island Life Bungalows",
      type: "Hotel",
      dates: [{ from: createDate("30/04/2024"), to: createDate("07/05/2024") }],
      description:
        "דיי ממוצע המלון והאזור אחלה בריכה וקרוב לhalf moon שהיה ממוצע גם כן",
      price: "",
      googleMapLink: "https://maps.app.goo.gl/wFpmvsshdNTRJXPf7",
      images: KHO_PHA_NGAN.islandLife,
    },
    {
      name: "The Sea Resort",
      type: "Hotel",
      dates: [{ from: createDate("07/05/2024"), to: createDate("17/05/2024") }],
      description: "מצריך אופנוע אבל מקום ממש שווה",
      price: "",
      googleMapLink: "https://maps.app.goo.gl/yBoVNcQYotoZzSqy8",
      images: KHO_PHA_NGAN.seaResortImages,
    },
  ],
  foods: [
    {
      name: "Mama Homemade Restaurant",
      type: "Restaurant",
      description: "מסעדה ממש נחמדה ליד הsea resort, מקומית תאילדית זולה",
      googleMapLink: "https://maps.app.goo.gl/p6UneWTsZG4MehoYA",
      images: KHO_PHA_NGAN.mamaRestaurant,
    },
    {
      name: "Pantip Market שוק אוכל",
      type: "Restaurant",
      description: "אזור עם כמה דוכני אוכל  ושטויות וברים",
      googleMapLink: "https://maps.app.goo.gl/fzSnN2UaiK2rrfhV6",
      images: KHO_PHA_NGAN.pantip,
    },
    //
    // {
    //   name: "M Thai Food",
    //   type: "Restaurant",
    //   description:
    //     "ארוחת בוקר חמודה ב100 באט!! יש גם אחלה של צהריים/ערב. ממש דקה הליכה מהמלון",
    //   coordinates: "7.5774966710527485, 99.03474611595301",
    //   googleMapLink: "https://maps.app.goo.gl/9T8JspxesXBq9HnTA",
    //   // images: KHO_LANTA.restaurantsMoonwalk,
    // },
  ],
  attractions: [
    {
      name: "מקום בדרך עם המון קופים",
      type: "Attraction",
      description:
        "לשים לב אם מגיעים עם אופנוע לא להשאיר כלום בתא ולקחת את המפתחות הם חכמים",
      googleMapLink: "https://maps.app.goo.gl/DQBcudn59LarPh7w7",
      images: KHO_PHA_NGAN.monkeys,
    },
    {
      name: "Zen Beach",
      type: "Attraction",
      description:
        "חוף חמוד עם אחלה נוף לשקיעה, הרבה אנשים שבאים לעשות יוגה ערסלים ואנערף, יש באחד הצדדים חוף נודיסטים",
      googleMapLink: "https://maps.app.goo.gl/JKr5o76eoi3Q6EdA8",
      images: KHO_PHA_NGAN.zen,
    },
    {
      name: "Bluerama",
      type: "Attraction",
      description:
        "בר על הר, נוף מהמם עלייה של אי אפשר להנות שם כי אתה עסוק בלחשוב איך תרד את זה" +
        "\n" +
        "משלמים בכניסה איזה 600 באט לראש אבל אפשר לקנות שם עם הכסף הזה",
      googleMapLink: "https://maps.app.goo.gl/ZDENA8MKoXWqXrAP7",
      images: KHO_PHA_NGAN.bluerama,
    },
    // {
    //   name: "גאות ושפל ממש גדולים",
    //   type: "Attraction",
    //   description: "יש שם גאות ושפל ממש חזקים אז אפשר לבוא לשם לראות המון מהים",
    //   images: KHO_LANTA.beachTravelImages,
    // },
    // {
    //   name: "שוק לילה",
    //   type: "Attraction",
    //   description:
    //     "בצפון האי יש שוק קטן וחמוד בלילה, יש דוכני אוכל נחמד וכיף להסתובב",
    //   coordinates: "7.649099594951741, 99.03700163322618",
    //   googleMapLink: "https://maps.app.goo.gl/FxiaFTCA2EckFqUV6",
    //   images: KHO_LANTA.attractionsMarket,
    // },
  ],
  nightlife: [
    // {
    //   name: "Beach Bars",
    //   type: "NightLife",
    //   description:
    //     "יש על החוף מלא ברים, מושלם לראות את השקיעה ולשבת בלילה. לפעמים גם יש מופעי אש, אפשר לשאול",
    //   images: KHO_LANTA.nightLife,
    // },
  ],
  gold_recommendation: [
    {
      name: "אירועים",
      type: "Info",
      description: "יש מסיבות כל יום, פה ראינו שיש כמעט אם לא את כל המידע",
      links: ["https://phangan.events/"],
    },
  ],
};
