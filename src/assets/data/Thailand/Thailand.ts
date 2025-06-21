import { createDate } from "helpers/dateHelpers";
import { Country, Destination } from "models";
import simSrc from "assets/img/Thailand/sim.jpeg";
import {
  KHO_PHA_NGAN_IMAGES,
  CHINAG_MAI_IMAGES,
  sushiImages,
  KOH_CHANG_IMAGES,
  PATTAYA_IMAGES,
  KOH_SAMUI_IMAGES,
  KOH_TAO_IMAGES,
  THAILAND_IMAGES,
} from "assets/img/Thailand";
import { Mushon } from "../../img/Thailand/KohSamui";

import { BANGKOK } from "./Bangkok";
import { KOH_LANTA } from "./KohLanta";
import profileImg from "./main.jpg";
import { KOH_PHA_NGAN } from "./KohPhaNgan";


export const THAILAND: Country = {
  id: "THA",
  name: "THAILAND",
  displayName: {
    hebrew: "תאילנד",
    english: "Thailand",
  },
  description: "המדינה הכי קלה, אחלה של חופים אוכל טוב חיי לילה כל מה שצריך",
  gold_recommendation: [
    {
      name: "תחבורה 🚌",
      description:
        "כל נסיעה כמעט אפשר לסגור דרך 12go(כולל מעבורות), הסליפרים השווים זה הvip, המספר זה כמות המיטות אז ככל שנמוך יותר המיטות יותר גדולות(20+-30~)" +
        "\n" +
        "יש שם את הגוגל מיקום של התחנה עלייה וירידה חשוב לבדוק לפני",
    },
    {
      name: "יתושים 🦟",
      description:
        "נגד יתושים: ספריי ורוד מה7/11 " +
        "\n" +
        "נגד עקיצות: קוף מחזיק אפרסק או הטייגר גם טוב",
      images: THAILAND_IMAGES.mosquitos,
    },
    {
      name: "סים ☎️",
      description:
        "יש ב7/11 סימים ממש בזול, יש להם לכמה מספרי ימים, כל אחד הוא כמות גיגה פר יום אז כדאי לבדוק כמה משתמשים כי לא תמיד צריך הרבה",
      images: [simSrc],
    },
    {
      name: "סושי בשקל 🍣",
      description:
        "בכללל שוק שהיינו בו יש דוכן של סושי ב10 באט. תקשיבו זה תמיד טעים ברמות ובחיים לא עשה לי בעיות בבטן (ואני רגישה). קיצר מוממלץ מאוד",
      images: sushiImages,
    },
  ],
  profileImg: profileImg,
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
      dates: [{ from: createDate("17/05/2024"), to: createDate("22/05/2024") }],
      description: "מיקום טוב מלון סביר בלי מעלית",
      price: "",
      googleMapLink: "https://maps.app.goo.gl/Ssm3BDcZ1Q4Emzrz6",
      images: [],
    },
    {
      name: "Astra Condo",
      dates: [{ from: createDate("22/05/2024"), to: createDate("11/06/2024") }],
      description: "קונדו עם מלא דירות שוות חדכ בריכה אחלה מיקום",
      price: "",
      googleMapLink: "https://maps.app.goo.gl/dQGTVUSJVTStZ2uSA",
      images: CHINAG_MAI_IMAGES.astra,
    },
  ],
  foods: [
    {
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
      description: "מקדש מאוד יפה",
      googleMapLink: "",
      images: CHINAG_MAI_IMAGES.watTemple,
    },
    {
      name: "Doi Suthep",
      description:
        "מקדש מאוד יפה, דורש נסיעה אנחנו לקחנו נהג מהאלה שמחכים עם הטנדר שלהם לשם ולכפר Hmong Doi Pui Village ",
      googleMapLink: "https://maps.app.goo.gl/NXcxFVRpv6YKteZ87",
      price: "הכניסה חינם, נהג שהיה איתנו לכל היום עלה בערך 800 באט",
      images: CHINAG_MAI_IMAGES.doiSutep,
    },
    {
      name: "Hmong Doi Pui Village",
      description:
        "כפר מאוד חמוד מסתובבים שם ברגל, יש שם מוזיאון חמוד של שבט ההמונג, שוק וגן בוטני מהמם",
      googleMapLink: "https://maps.app.goo.gl/KD1GMysjxa3e66Du8",
      images: CHINAG_MAI_IMAGES.doiPui,
    },
    {
      name: "King Cobra",
      description:
        "סגרנו יום טיול בקוברה, מוזיאון חרקים והגנים הבוטנים של המלכה סיקריט עם נהג טנדר מהרחוב, היה ממש כיף והמדריך דיבר מלא עברית",
      price: "800-1000 באט",
      googleMapLink: "https://maps.app.goo.gl/nyJfYjgpwKPdvS1BA",
      images: CHINAG_MAI_IMAGES.cobra,
    },
    {
      name: "Siam Insect Zoo",
      description: "מוזיאון חרקים וזוחלים חמוד",
      price: "ביחד עם הקוברה והגן הבוטני של המלכה",
      googleMapLink: "https://maps.app.goo.gl/7GEjcNViCwRyzZoD8",
      images: CHINAG_MAI_IMAGES.insectZoo,
    },
    {
      name: "Queen Sirikit Botanic Garden",
      description: "גן בוטני עצום ומטורף",
      price: "ביחד עם הקוברה והמוזיאון חרקים",
      googleMapLink: "https://maps.app.goo.gl/VESrFySdsmfk9BVu7",
      images: CHINAG_MAI_IMAGES.sirikit,
    },
    {
      name: "חנות/מוזיאון של גילופים בעץ",
      description:
        "מקום עם אין סוף גילופים, יש שם דברים שלקח להכין 10 שנים ו5 אנשים שעובדים עליו כל יום, מטורף לגמרי (היה אסור לצלם בפנים)",
      price: "כניסה חינם, גילוף עלה איזה 100באט לראש",
      googleMapLink: "https://maps.app.goo.gl/xJ5wqTTWCbb1RxKH9",
      images: CHINAG_MAI_IMAGES.woodCarve,
    },
    {
      name: "מפלים דביקים",
      description:
        "מפלים שבגלל מינרל האבנים ממש מחוספסות אז אפשר לטפס על המפל ברגל, ממש מיוחד וכיף ולא כבד מדי",
      price:
        "כניסה חינם, לקחנו נהג שיהיה איתנו כל היום עלה בערך 800 באט נראה לי",
      googleMapLink: "https://maps.app.goo.gl/QZBh82aBmZ32BYw69",
      images: CHINAG_MAI_IMAGES.stickyWaterfall,
    },
    {
      name: "Ginger Farm",
      description: "מקום יפה אוכל טעים מדברים שהם מגדלים שם!!! חיות חמודות",
      price: "חינם ואפשר לקנות אוכל להאכיל את החיות באיזה 30 באט",
      googleMapLink: "https://maps.app.goo.gl/3U9vwE3jGe41X7fi7",
      images: CHINAG_MAI_IMAGES.gingerFarm,
    },
    {
      name: "ארקייד Echo-Ex10",
      description: "ארקייד ממש כיף בקניון מאיה",
      price: "שילמנו 300 באט ושיחקנו שנינו שעה",
      googleMapLink: "https://maps.app.goo.gl/ojyDynVNrULzjvBb6",
      images: CHINAG_MAI_IMAGES.arcade,
    },
    {
      name: "Sunday walking street",
      description:
        "שוק ענק כל יום ראשון. מחירים זולים ברמות ויש המון המון דוכנים שונים. לדעתי כן שונה מבנגקוק אז אם אתם רואים משהו שאהבתם תקנו!!",
      googleMapLink: "https://maps.app.goo.gl/mf4va7Pw5An85NrRA",
      images: CHINAG_MAI_IMAGES.sundayMarket,
    },
  ],
  nightlife: [
    {
      name: "Lanna Square",
      description:
        "אזור עם מלא ברים ושוק אוכל, פתוח כמעט כל יום בערב עד מאוחר, מומלץ",
      googleMapLink: "https://maps.app.goo.gl/zkTs4wN3E72t7YNeA",
      images: CHINAG_MAI_IMAGES.lanna,
    },
  ],
  gold_recommendation: [
    {
      name: "מוניות",
      description:
        "מוניות סופר נוחות, לא לקח להן יותר מ2 דק להגיע ומחירים זולים ממש דרך בולט",
    },
    {
      name: "ברים",
      description:
        "כל העיר העתיקה מלאה בברים, מומלץ להסתובב או לקחת מונית כל פעם למקום אחר" +
        "\n" +
        "גם האזור של One Nimman, ליד הקניון אחלה אזור ברים מסיבות שוק",
    },
    {
      name: "קניון",
      description: "יש שם קניון ענק MAYA אחלה חנויות דוכנים אוכל",
      links: ["https://maps.app.goo.gl/PTtWHMUuMR9531N77"],
    },
    {
      name: "שווקים",
      description:
        "!כמעט כל יום יש שם שוק במקום אחר, כדאי לבדוק כי הם מטורפים! וגם בכל שוק יש סוכן של סושי, יחידה ב10 באט. אני תמייייד אוכלת וזה ממש סבבה בבטן! לא לפחד מקלקולי קיבה זה באמת טרי וטעים",
    },
  ],
};

export const KOH_CHANG: Destination = {
  id: "KOH_CHANG",
  profileImg: KOH_CHANG_IMAGES.profile,
  displayName: {
    hebrew: "קו צ'אנג",
    english: "koh chang",
  },
  description: "",
  images: KOH_CHANG_IMAGES.general,
  hotels: [
    {
      name: "Chang Buri",
      googleMapLink: "https://maps.app.goo.gl/H7ABRp8YLYxExFkd8",
      dates: [{ from: createDate("06/09/2024"), to: createDate("12/09/2024") }],
      description:
        "מלון ממש שווה, אחלה בריכות באסה שאי אפשר להיכנס למים שם והחיי לילה הקרובים מוזרים",
      images: KOH_CHANG_IMAGES.ChangBuri,
    },
    {
      name: "Flora I Talay Resort",
      googleMapLink: "https://maps.app.goo.gl/GdHD6pPnrvg4MXwr7",
      dates: [{ from: createDate("12/09/2024"), to: createDate("19/09/2024") }],
      description: "מלון ממש ממש חמוד ושווה היה מאוד כיף",
      images: KOH_CHANG_IMAGES.Flora,
    },
  ],
  foods: [],
  attractions: [],
  nightlife: [],
};

export const PATTAYA: Destination = {
  id: "PATTAYA",
  profileImg: PATTAYA_IMAGES.profile,
  displayName: {
    hebrew: "פאטאיה",
    english: "Pattaya",
  },
  images: PATTAYA_IMAGES.general,
  description: "מלא זונות מלא חיי לילה אחלה חופים",
  hotels: [
    {
      name: "The Bayview",
      googleMapLink: "https://maps.app.goo.gl/iqbrRfp7k3Qw3Vmy9",
      images: PATTAYA_IMAGES.Bayview,
      dates: [{ from: createDate("19/09/2024"), to: createDate("22/09/2024") }],
      description: "מלון סבבה אחלה של מיקום אחלה של בריכה ואוכל",
    },
    {
      name: "The Base inn",
      googleMapLink: "https://maps.app.goo.gl/HhDXgbDy8uJ2jd3XA",
      dates: [{ from: createDate("22/09/2024"), to: createDate("27/09/2024") }],
      description: "מלון חמוד אחלה של מיקום",
    },
  ],
  foods: [],
  attractions: [
    {
      name: "Nong Nooch Botanical Garden",
      description: "מקום ענק דינוזאורים פארק בוטני",
      googleMapLink: "https://maps.app.goo.gl/1khPab9MEfXiEnK99",
      images: PATTAYA_IMAGES.NongNooch,
    },
  ],
  nightlife: [],
};

export const KOH_SAMUI: Destination = {
  id: "KOH_SAMUI",
  profileImg: KOH_SAMUI_IMAGES.profile,
  displayName: {
    hebrew: "קו סמוי",
    english: "Koh Samui",
  },
  images: KOH_SAMUI_IMAGES.general,
  description: "אחלה של אחלב של אי יש בו הכל לא מבין למה האחרים יותר בדיבור",
  hotels: [
    {
      name: "Bhundhari Chaweng Beach Resort",
      googleMapLink: "https://maps.app.goo.gl/wzBtKCQj6VKYQukE9",
      images: KOH_SAMUI_IMAGES.Bhundhari,
      dates: [{ from: createDate("27/09/2024"), to: createDate("29/09/2024") }],
      description: "מלון חמוד על הים קצת רחוק מהכל יותר מדי רעש של ישראלים",
    },
    {
      name: "Surisa Seaview Pool Villa",
      googleMapLink: "https://maps.app.goo.gl/pDP2JWJvjpFq3x1J7",
      images: KOH_SAMUI_IMAGES.Surisa,
      dates: [{ from: createDate("02/10/2024"), to: createDate("06/10/2024") }],
      description: "מלון סבבה אחלה של מיקום אחלה של בריכה ואוכל",
    },
    {
      name: "Nautilus Apartments",
      googleMapLink: "https://maps.app.goo.gl/v8hbSuQGC5E8ffJy9",
      images: KOH_SAMUI_IMAGES.Nautilus,
      dates: [{ from: createDate("17/10/2024"), to: createDate("03/11/2024") }],
      description:
        "אחלה של מקום קצת רחוק במידה שווה מהכל אז צריך אופנוע אבל דירה שווה רצח",
      price: "150 ללילה דרך איירבנב 130 במקום",
    },
    {
      name: "PTK Beach",
      googleMapLink: "https://maps.app.goo.gl/ZwTdShkmZL8SYrUh8",
      images: KOH_SAMUI_IMAGES.ptk,
      dates: [{ from: createDate("03/11/2024"), to: createDate("09/11/2024") }, { from: createDate("09/06/2025"), to: createDate("14/06/2025") }],
      description:
        "מיקום פצצה ויחסית לזה שכל המלונות באזור עולים פי 3 ממש נדיר",
      price: "700 באט ללילה",
    },
    {
      name: "ZAYN Samui Hotel",
      googleMapLink: "https://maps.app.goo.gl/uGxymu9v64w9RqKg8",
      // images: KOH_SAMUI_IMAGES.ptk,
      dates: [{ from: createDate("26/11/2024"), to: createDate("27/11/2024") }],
      description: "מיקום חמוד על השוק דייגים",
    },
  ],
  foods: [
    {
      name: "Napa Food",
      googleMapLink: "https://maps.app.goo.gl/qasQwsYdyWDP87S56",
      description: "מקומי היה ממש טעים",
      images: KOH_SAMUI_IMAGES.napa,
    },
    {
      name: "Ever Green מסעדה על החוף",
      googleMapLink: "https://maps.app.goo.gl/df4Y433ngxiPuUB5A",
      description: "אחלה של ארוחת בוקר סט ובכללי אחלה מקום לשבת חמודים",
      images: KOH_SAMUI_IMAGES.EverGreen,
    },
    {
      name: "בורקס רמלה קוסמוי-מסעדה כשרה",
      googleMapLink: "https://maps.app.goo.gl/uQsLEkyA4mEboEPv6",
      description: "אחלה של אוכל ישרלאי טעים רצח",
      images: KOH_SAMUI_IMAGES.ramle,
    },    {
      name: "vibes 360",
      googleMapLink: "https://maps.app.goo.gl/Lr91gpznPcTggJos7",
      description: "מסעדה בורמזית עם אחלה קריוקי",
      images: KOH_SAMUI_IMAGES.vibes,
    },
  ],
  attractions: [
    {
      name: "Grandfather and Grandmother Rocks (Hin Ta Hin Yai) סלע הבולבול פות ",
      description:
        "סלעים שאם ממש מנסים אפשר לראות בולבול ופות אפשר עוד יותר לנסות לוותר על זה",
      images: KOH_SAMUI_IMAGES.bulbul,
      googleMapLink: "https://maps.app.goo.gl/XVVjaNzQ3mM4k8TdA",
    },
  ],
  nightlife: [],
  gold_recommendation: [
    {
      name: "כביסה",
      description: "איזה טוב היא מריחה אינעל דינק",
      phones: ["+66 85 795 7771", "+66 95 661 6568"],
      links: ["https://g.co/kgs/Tvd53dR"],
    },
    {
      name: "אופנוע",
      description: "190 באט ל125 באים אליך",
      phones: ["+66 87 276 5927"],
      images: KOH_SAMUI_IMAGES.motorcycle,
      links: ["https://maps.app.goo.gl/5FQFrgc4dZUVsWx18"],
    },
    {
      name: "מושון",
      description: "מושון האגוז",
      images: KOH_SAMUI_IMAGES.Mushon,
    },
  ],
};

export const KOH_TAO: Destination = {
  id: "KOH_TAO",
  profileImg: KOH_TAO_IMAGES.profile,
  displayName: {
    hebrew: "קו טאו",
    english: "Koh Tao",
  },
  images: KOH_TAO_IMAGES.general,
  description:
    "אי קטן חמוד נחמד מאוד קל חוף עם הרבה ברים מסעדות נחמד אחלה אטרקציות",
  hotels: [
    {
      name: "Mama Ochai",
      googleMapLink: "https://maps.app.goo.gl/AoVWBfhQVJsfoiK26",
      images: KOH_TAO_IMAGES.Ochai,
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
      images: KOH_TAO_IMAGES.hutResort,
    },
  ],
  attractions: [
    {
      name: "Secret Bar",
      googleMapLink: "https://maps.app.goo.gl/BsUgE2JKJBmyW3eQA",
      description:
        "בר חמוד אחלה של נוף פנורמי גדול מלא שמש דרך להגיע סיוט אם אני זוכר נכון",
      images: KOH_TAO_IMAGES.secret,
    },
    {
      name: "Freedom Beach",
      googleMapLink: "https://maps.app.goo.gl/vVyZPusg4qVydKU58",
      description:
        "חוף חמוד כניסה 50 שנורקלים מטורפים, יש שם עליה של קיר טיםוס רמה 9000 לנקודת תצפית",
      images: KOH_TAO_IMAGES.FreedomBeach,
    },
  ],
  nightlife: [
    {
      name: "Escobar",
      googleMapLink: "https://maps.app.goo.gl/Aut1bXWx85H3cgjb9",
      description:
        "אחלה מסיבה כיפית אחלה רחבות שירותים ברים הכל נוח אפילו שיש עליות של השטן",
      images: KOH_TAO_IMAGES.Escobar,
    },
  ],
};

export const THAILAND_DESTINATION = [
  BANGKOK,
  KOH_LANTA,
  KOH_PHA_NGAN
];
