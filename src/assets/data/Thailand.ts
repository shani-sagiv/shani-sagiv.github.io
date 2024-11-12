import { createDate } from "helpers/dateHelpers";
import { Country, Destination } from "models";
import simSrc from "assets/img/Thailand/sim.jpeg";
import {
  KHO_LANTA_IMAGES,
  KHO_PHA_NGAN_IMAGES,
  CHINAG_MAI_IMAGES,
  BANGKOK_IMAGES,
  sushiImages,
} from "assets/img/Thailand";

export const THAILAND: Country = {
  id: "THA",
  name: "THAILAND",
  displayName: {
    hebrew: "תאילנד",
    english: "Thailand",
  },
  description: "המדינה הכי קלה, אחלה של חופים אוכל טוב חיי לילה כל מה שצריך",
  // description:
  //   "תאילנד היא מדינה טרופית בדרום-מזרח אסיה, המפורסמת בחופים קסומים, מקדשים בודהיסטיים מרהיבים ותרבות עשירה. בנוסף, המדינה מציעה חוויות קולינריות מגוונות, חיי לילה תוססים ושווקים ססגוניים",
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
      images: KHO_LANTA_IMAGES.mosquitos,
    },
    {
      name: "סים ☎️",
      type: "Info",
      description:
        "יש ב7/11 סימים ממש בזול, יש להם לכמה מספרי ימים, כל אחד הוא כמות גיגה פר יום אז כדאי לבדוק כמה משתמשים כי לא תמיד צריך הרבה",
      images: [simSrc],
    },
    {
      name: "סושי בשקל 🍣",
      type: "Info",
      description:
        "בכללל שוק שהיינו בו יש דוכן של סושי ב10 באט. תקשיבו זה תמיד טעים ברמות ובחיים לא עשה לי בעיות בבטן (ואני רגישה). קיצר מוממלץ מאוד",
      images: sushiImages,
    },
  ],
  profileImg: KHO_LANTA_IMAGES.profile,
};

export const KOH_LANTA: Destination = {
  id: "KOH_LANTA",
  profileImg: KHO_LANTA_IMAGES.profile,
  displayName: {
    hebrew: "קו לנטה",
    english: "Koh Lanta",
  },
  shells: KHO_LANTA_IMAGES.shells,
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
      images: KHO_LANTA_IMAGES.hotelLantaRiviera,
    },
  ],
  foods: [
    {
      name: "Lanta Riviera Resort",
      type: "Restaurant",
      description: "המסעדה בבריכה של המלון הייתה אחלה ממש, אכלנו בה מלאאא  ",
      googleMapLink: "https://maps.app.goo.gl/URVK9gTZAGHwMBpV8",
      images: KHO_LANTA_IMAGES.restaurantsLantaRiviera,
    },
    {
      name: "Moonwalk Restaurant & Bar",
      type: "Restaurant",
      description:
        "מסעדה ממש חמודה על החוף, כמה דק הליכה מהחוף של המלון. המלצריות היו ממש נחמדות והאוכל מצויין",
      googleMapLink: "https://maps.app.goo.gl/t66ajYqb2s9AKVnw5",
      images: KHO_LANTA_IMAGES.restaurantsMoonwalk,
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
      images: KHO_LANTA_IMAGES.attractionsFollowingGiants,
    },
    {
      name: "גאות ושפל ממש גדולים",
      type: "Attraction",
      description: "יש שם גאות ושפל ממש חזקים אז אפשר לבוא לשם לראות המון מהים",
      images: KHO_LANTA_IMAGES.beachTravelImages,
    },
    {
      name: "שוק לילה",
      type: "Attraction",
      description:
        "בצפון האי יש שוק קטן וחמוד בלילה, יש דוכני אוכל נחמד וכיף להסתובב",
      googleMapLink: "https://maps.app.goo.gl/FxiaFTCA2EckFqUV6",
      images: KHO_LANTA_IMAGES.attractionsMarket,
    },
  ],
  nightlife: [
    {
      name: "Beach Bars",
      type: "NightLife",
      description:
        "יש על החוף מלא ברים, מושלם לראות את השקיעה ולשבת בלילה. לפעמים גם יש מופעי אש, אפשר לשאול",
      images: KHO_LANTA_IMAGES.nightLife,
    },
  ],
};

export const BANGKOK: Destination = {
  id: "BANGKOK",
  profileImg: BANGKOK_IMAGES.profile,
  displayName: {
    hebrew: "בנגקוק",
    english: "Bangkok",
  },
  images: BANGKOK_IMAGES.general,
  description: "סתם היינו 3 ימים למעבר ולחג מים שלהם",
  hotels: [
    {
      name: "New Siam II",
      type: "Hotel",
      dates: [{ from: createDate("13/04/2024"), to: createDate("17/04/2024") }],
      description: "מלון חמוד אחלה אזור בריכה חמדודה",
      googleMapLink: "https://maps.app.goo.gl/aPa7xCb6AwvWzWWq6",
      images: BANGKOK_IMAGES.NewSiam,
    },
    {
      name: "Bangkok ​Sleep ​Nest​ Hostel",
      type: "Hotel",
      dates: [{ from: createDate("05/09/2024"), to: createDate("06/09/2024") }],
      description:
        "רצינו מלון שקרוב לשדה התעופה כי נחתנו בערב וכבר למחרת בבוקר יצאנו מבנגקוק. מלון ממש נוח עם חדר גדול ומרווח!",
      googleMapLink: "https://maps.app.goo.gl/3Z2WW9aSzZpok8KU8",
    },
  ],
  foods: [],
  attractions: [],
  nightlife: [],
};

export const KOH_PHA_NGAN: Destination = {
  id: "KOH_PHA_NGAN",
  profileImg: KHO_PHA_NGAN_IMAGES.profile,
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
      images: KHO_PHA_NGAN_IMAGES.islandLife,
    },
    {
      name: "The Sea Resort",
      type: "Hotel",
      dates: [{ from: createDate("07/05/2024"), to: createDate("17/05/2024") }],
      description: "מצריך אופנוע אבל מקום ממש שווה",
      price: "",
      googleMapLink: "https://maps.app.goo.gl/yBoVNcQYotoZzSqy8",
      images: KHO_PHA_NGAN_IMAGES.seaResortImages,
    },
  ],
  foods: [
    {
      name: "Mama Homemade Restaurant",
      type: "Restaurant",
      description: "מסעדה ממש נחמדה ליד הsea resort, מקומית תאילדית זולה",
      googleMapLink: "https://maps.app.goo.gl/p6UneWTsZG4MehoYA",
      images: KHO_PHA_NGAN_IMAGES.mamaRestaurant,
    },
    {
      name: "Pantip Market שוק אוכל",
      type: "Restaurant",
      description: "אזור עם כמה דוכני אוכל  ושטויות וברים",
      googleMapLink: "https://maps.app.goo.gl/fzSnN2UaiK2rrfhV6",
      images: KHO_PHA_NGAN_IMAGES.pantip,
    },
  ],
  attractions: [
    {
      name: "Halfmoon festival",
      type: "Attraction",
      description:
        "ממש פחדנו שלא יהיו כרטיסים כי החלטנו להגיע ממש ברגע האחרון, בפועל ממש לא בעיה לקנות יום לפני בקבלה במלון.. היה כיף",
      googleMapLink: "https://maps.app.goo.gl/EUHfANZURF8T8S5B9",
      images: KHO_PHA_NGAN_IMAGES.halfmoon,
    },
    {
      name: "Saturday Walking Street Market",
      type: "Attraction",
      description: "שוק לילה ממש נחמד שפתוח בסופש. יש גם אוכל וגם קניות",
      googleMapLink: "https://maps.app.goo.gl/swCqNZDrkTy6AJd46",
      images: KHO_PHA_NGAN_IMAGES.walkingStreet,
    },
    {
      name: "Chaloklum Sunday market",
      type: "Attraction",
      description: " שוק עם אוכל ממש נחמד! אזור יפה להסתובב ואפשר גם להכנס לים",
      googleMapLink: "https://maps.app.goo.gl/yNymoUHjqMCMfmh16",
      images: KHO_PHA_NGAN_IMAGES.chaloklumMarket,
    },

    {
      name: "מקום בדרך עם המון קופים",
      type: "Attraction",
      description:
        "לשים לב אם מגיעים עם אופנוע לא להשאיר כלום בתא ולקחת את המפתחות הם חכמים",
      googleMapLink: "https://maps.app.goo.gl/DQBcudn59LarPh7w7",
      images: KHO_PHA_NGAN_IMAGES.monkeys,
    },
    {
      name: "Zen Beach",
      type: "Attraction",
      description:
        "חוף חמוד עם אחלה נוף לשקיעה, הרבה אנשים שבאים לעשות יוגה ערסלים ואנערף, יש באחד הצדדים חוף נודיסטים",
      googleMapLink: "https://maps.app.goo.gl/JKr5o76eoi3Q6EdA8",
      images: KHO_PHA_NGAN_IMAGES.zen,
    },
    {
      name: "Bluerama",
      type: "Attraction",
      description:
        "בר על הר, נוף מהמם עלייה של אי אפשר להנות שם כי אתה עסוק בלחשוב איך תרד את זה" +
        "\n" +
        "משלמים בכניסה איזה 600 באט לראש אבל אפשר לקנות שם עם הכסף הזה",
      googleMapLink: "https://maps.app.goo.gl/ZDENA8MKoXWqXrAP7",
      images: KHO_PHA_NGAN_IMAGES.bluerama,
    },
    {
      name: "קפה חתולים",
      type: "Attraction",
      description:
        "בית קפה עם מלא חתולים, ממש התלבטנו אם להכנס כי חשבנו שאולי החתולים סובלים. בסוף היינו שם שעה והעובדים התייחסו לכל החתולים ממש יפה, האכילו ושיחקו איתם והחתולים באמת נראים שמחים והיה כיף מאווווווווווווווווד!!!!",
      googleMapLink: "https://maps.app.goo.gl/8QGYfNaTWFEHJTeu6",
      images: KHO_PHA_NGAN_IMAGES.catCafe,
    },
  ],
  nightlife: [
    {
      name: "Haad Rin beach bars",
      type: "NightLife",
      description:
        "יש על החוף כל ערב מלא ברים עם מופעי אש. באף אחד לא היה כתוב שיש האפי האוור אבל ברגע ששאלנו אז הם ענו שכן חחח קיצר תשאלו אם יש",
      googleMapLink: "https://maps.app.goo.gl/wzWoLNs6X7HBrCuG7",
      images: KHO_PHA_NGAN_IMAGES.HaadRinBeachBars,
    },
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

export const CHINAG_MAI: Destination = {
  id: "CHINAG_MAI",
  profileImg: CHINAG_MAI_IMAGES.profile,
  displayName: {
    hebrew: "צ'אנג מאי",
    english: "Chinag Mai",
  },
  shells: [],
  description: "",
  hotels: [
    {
      name: "Manee House",
      type: "Hotel",
      dates: [{ from: createDate("17/05/2024"), to: createDate("22/05/2024") }],
      description: "מיקום טוב מלון סביר בלי מעלית",
      price: "",
      googleMapLink: "https://maps.app.goo.gl/Ssm3BDcZ1Q4Emzrz6",
      images: [],
    },
    {
      name: "Astra Condo",
      type: "Hotel",
      dates: [{ from: createDate("22/05/2024"), to: createDate("05/06/2024") }],
      description: "קונדו עם מלא דירות שוות חדכ בריכה אחלה מיקום",
      price: "",
      googleMapLink: "https://maps.app.goo.gl/dQGTVUSJVTStZ2uSA",
      images: CHINAG_MAI_IMAGES.astra,
    },
  ],
  foods: [
    {
      type: "Restaurant",
      name: "Shabushi <3",
      description:
        "הוטפוט עם מסועים וסושי ומלא כיף מומלץ מאוד! שימו לב שזה רשת אז אפשר למצוא אותם בעוד מלאאא מקומות (היינו בכמה כאלה וזה תמיד מושלם)",
      price: "400 באט לראש אכול כפי יכולתך",
      googleMapLink: "https://maps.app.goo.gl/NorSJuHavaQ4c9Fi7",
      images: CHINAG_MAI_IMAGES.shabushi,
    },
  ],
  attractions: [
    {
      name: "מקדש Wat Chiang Man",
      type: "Attraction",
      description: "מקדש מאוד יפה",
      googleMapLink: "",
      images: CHINAG_MAI_IMAGES.watTemple,
    },
    {
      name: "Doi Suthep",
      type: "Attraction",
      description:
        "מקדש מאוד יפה, דורש נסיעה אנחנו לקחנו נהג מהאלה שמחכים עם הטנדר שלהם לשם ולכפר Hmong Doi Pui Village ",
      googleMapLink: "https://maps.app.goo.gl/NXcxFVRpv6YKteZ87",
      price: "הכניסה חינם, נהג שהיה איתנו לכל היום עלה בערך 800 באט",
      images: CHINAG_MAI_IMAGES.doiSutep,
    },
    {
      name: "Hmong Doi Pui Village",
      type: "Attraction",
      description:
        "כפר מאוד חמוד מסתובבים שם ברגל, יש שם מוזיאון חמוד של שבט ההמונג, שוק וגן בוטני מהמם",
      googleMapLink: "https://maps.app.goo.gl/KD1GMysjxa3e66Du8",
      images: CHINAG_MAI_IMAGES.doiPui,
    },
    {
      name: "King Cobra",
      type: "Attraction",
      description:
        "סגרנו יום טיול בקוברה, מוזיאון חרקים והגנים הבוטנים של המלכה סיקריט עם נהג טנדר מהרחוב, היה ממש כיף והמדריך דיבר מלא עברית",
      price: "800-1000 באט",
      googleMapLink: "https://maps.app.goo.gl/nyJfYjgpwKPdvS1BA",
      images: CHINAG_MAI_IMAGES.cobra,
    },
    {
      name: "Siam Insect Zoo",
      type: "Attraction",
      description: "מוזיאון חרקים וזוחלים חמוד",
      price: "ביחד עם הקוברה והגן הבוטני של המלכה",
      googleMapLink: "https://maps.app.goo.gl/7GEjcNViCwRyzZoD8",
      images: CHINAG_MAI_IMAGES.insectZoo,
    },
    {
      name: "Queen Sirikit Botanic Garden",
      type: "Attraction",
      description: "גן בוטני עצום ומטורף",
      price: "ביחד עם הקוברה והמוזיאון חרקים",
      googleMapLink: "https://maps.app.goo.gl/VESrFySdsmfk9BVu7",
      images: CHINAG_MAI_IMAGES.sirikit,
    },
    {
      name: "חנות/מוזיאון של גילופים בעץ",
      type: "Attraction",
      description:
        "מקום עם אין סוף גילופים, יש שם דברים שלקח להכין 10 שנים ו5 אנשים שעובדים עליו כל יום, מטורף לגמרי (היה אסור לצלם בפנים)",
      price: "כניסה חינם, גילוף עלה איזה 100באט לראש",
      googleMapLink: "https://maps.app.goo.gl/xJ5wqTTWCbb1RxKH9",
      images: CHINAG_MAI_IMAGES.woodCarve,
    },
    {
      name: "מפלים דביקים",
      type: "Attraction",
      description:
        "מפלים שבגלל מינרל האבנים ממש מחוספסות אז אפשר לטפס על המפל ברגל, ממש מיוחד וכיף ולא כבד מדי",
      price:
        "כניסה חינם, לקחנו נהג שיהיה איתנו כל היום עלה בערך 800 באט נראה לי",
      googleMapLink: "https://maps.app.goo.gl/QZBh82aBmZ32BYw69",
      images: CHINAG_MAI_IMAGES.stickyWaterfall,
    },
    {
      name: "Ginger Farm",
      type: "Attraction",
      description: "מקום יפה אוכל טעים מדברים שהם מגדלים שם!!! חיות חמודות",
      price: "חינם ואפשר לקנות אוכל להאכיל את החיות באיזה 30 באט",
      googleMapLink: "https://maps.app.goo.gl/3U9vwE3jGe41X7fi7",
      images: CHINAG_MAI_IMAGES.gingerFarm,
    },
    {
      name: "ארקייד Echo-Ex10",
      type: "Attraction",
      description: "ארקייד ממש כיף בקניון מאיה",
      price: "שילמנו 300 באט ושיחקנו שנינו שעה",
      googleMapLink: "https://maps.app.goo.gl/ojyDynVNrULzjvBb6",
      images: CHINAG_MAI_IMAGES.arcade,
    },
    {
      name: "Sunday walking street",
      type: "Attraction",
      description:
        "שוק ענק כל יום ראשון. מחירים זולים ברמות ויש המון המון דוכנים שונים. לדעתי כן שונה מבנגקוק אז אם אתם רואים משהו שאהבתם תקנו!!",
      googleMapLink: "https://maps.app.goo.gl/mf4va7Pw5An85NrRA",
      images: CHINAG_MAI_IMAGES.sundayMarket,
    },
  ],
  nightlife: [
    {
      name: "Lanna Square",
      type: "NightLife",
      description:
        "אזור עם מלא ברים ושוק אוכל, פתוח כמעט כל יום בערב עד מאוחר, מומלץ",
      googleMapLink: "https://maps.app.goo.gl/zkTs4wN3E72t7YNeA",
      images: CHINAG_MAI_IMAGES.lanna,
    },
  ],
  gold_recommendation: [
    {
      name: "מוניות",
      type: "Info",
      description:
        "מוניות סופר נוחות, לא לקח להן יותר מ2 דק להגיע ומחירים זולים ממש דרך בולט",
    },
    {
      name: "ברים",
      type: "Info",
      description:
        "כל העיר העתיקה מלאה בברים, מומלץ להסתובב או לקחת מונית כל פעם למקום אחר" +
        "\n" +
        "גם האזור של One Nimman, ליד הקניון אחלה אזור ברים מסיבות שוק",
    },
    {
      name: "קניון",
      type: "Info",
      description: "יש שם קניון ענק MAYA אחלה חנויות דוכנים אוכל",
      links: ["https://maps.app.goo.gl/PTtWHMUuMR9531N77"],
    },
    {
      name: "שווקים",
      type: "Info",
      description:
        "!כמעט כל יום יש שם שוק במקום אחר, כדאי לבדוק כי הם מטורפים! וגם בכל שוק יש סוכן של סושי, יחידה ב10 באט. אני תמייייד אוכלת וזה ממש סבבה בבטן! לא לפחד מקלקולי קיבה זה באמת טרי וטעים",
    },
  ],
};
