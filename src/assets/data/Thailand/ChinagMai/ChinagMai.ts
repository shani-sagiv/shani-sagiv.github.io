import { Destination } from "models/Destination";
import { createDate } from "helpers/dateHelpers";
import  IMAGES from "./images";

export const ChinagMai: Destination = {
  id: "ChinagMai",
  profileImg: IMAGES.profileImg,
    // images:IMAGES.general,
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
      // images: [],
    },
    {
      name: "Astra Condo",
      dates: [{ from: createDate("22/05/2024"), to: createDate("11/06/2024") }],
      description: "קונדו עם מלא דירות שוות חדכ בריכה אחלה מיקום",
      price: "",
      googleMapLink: "https://maps.app.goo.gl/dQGTVUSJVTStZ2uSA",
      images: IMAGES.astra,
    },
  ],
  foods: [
    {
      name: "Shabushi <3",
      description:
        "הוטפוט עם מסועים וסושי ומלא כיף מומלץ מאוד! שימו לב שזה רשת אז אפשר למצוא אותם בעוד מלאאא מקומות (היינו בכמה כאלה וזה תמיד מושלם)",
      price: "400 באט לראש אכול כפי יכולתך",
      googleMapLink: "https://maps.app.goo.gl/NorSJuHavaQ4c9Fi7",
      images: IMAGES.shabushi,
    },
  ],
  attractionsGroups:[
  {name:"יום טיול",description:"", attractions:[
 {
      name: "Doi Suthep",
      description:
        "מקדש מאוד יפה, דורש נסיעה אנחנו לקחנו נהג מהאלה שמחכים עם הטנדר שלהם לשם ולכפר Hmong Doi Pui Village ",
      googleMapLink: "https://maps.app.goo.gl/NXcxFVRpv6YKteZ87",
      price: "הכניסה חינם, נהג שהיה איתנו לכל היום עלה בערך 800 באט",
      images: IMAGES.doiSutep,
    },
    {
      name: "Hmong Doi Pui Village",
      description:
        "כפר מאוד חמוד מסתובבים שם ברגל, יש שם מוזיאון חמוד של שבט ההמונג, שוק וגן בוטני מהמם",
      googleMapLink: "https://maps.app.goo.gl/KD1GMysjxa3e66Du8",
      images: IMAGES.doiPui,
    },
  ]} ,
  
  {
    name:"יום טיול 2",
    description:"",
    attractions:[
          {
      name: "King Cobra",
      description:
        "סגרנו יום טיול בקוברה, מוזיאון חרקים והגנים הבוטנים של המלכה סיקריט עם נהג טנדר מהרחוב, היה ממש כיף והמדריך דיבר מלא עברית",
      price: "800-1000 באט",
      googleMapLink: "https://maps.app.goo.gl/nyJfYjgpwKPdvS1BA",
      images: IMAGES.cobra,
    },
    {
      name: "Siam Insect Zoo",
      description: "מוזיאון חרקים וזוחלים חמוד",
      price: "ביחד עם הקוברה והגן הבוטני של המלכה",
      googleMapLink: "https://maps.app.goo.gl/7GEjcNViCwRyzZoD8",
      images: IMAGES.insectZoo,
    },
    {
      name: "Queen Sirikit Botanic Garden",
      description: "גן בוטני עצום ומטורף",
      price: "ביחד עם הקוברה והמוזיאון חרקים",
      googleMapLink: "https://maps.app.goo.gl/VESrFySdsmfk9BVu7",
      images: IMAGES.sirikit,
    },
    ]
  }
  ],
  attractions: [
    {
      name: "מקדש Wat Chiang Man",
      description: "מקדש מאוד יפה",
      googleMapLink: "",
      images: IMAGES.watTemple,
    },
   

    {
      name: "חנות/מוזיאון של גילופים בעץ",
      description:
        "מקום עם אין סוף גילופים, יש שם דברים שלקח להכין 10 שנים ו5 אנשים שעובדים עליו כל יום, מטורף לגמרי (היה אסור לצלם בפנים)",
      price: "כניסה חינם, גילוף עלה איזה 100באט לראש",
      googleMapLink: "https://maps.app.goo.gl/xJ5wqTTWCbb1RxKH9",
      images: IMAGES.woodCarve,
    },
    {
      name: "מפלים דביקים",
      description:
        "מפלים שבגלל מינרל האבנים ממש מחוספסות אז אפשר לטפס על המפל ברגל, ממש מיוחד וכיף ולא כבד מדי",
      price:
        "כניסה חינם, לקחנו נהג שיהיה איתנו כל היום עלה בערך 800 באט נראה לי",
      googleMapLink: "https://maps.app.goo.gl/QZBh82aBmZ32BYw69",
      images: IMAGES.stickyWaterfall,
    },
    {
      name: "Ginger Farm",
      description: "מקום יפה אוכל טעים מדברים שהם מגדלים שם!!! חיות חמודות",
      price: "חינם ואפשר לקנות אוכל להאכיל את החיות באיזה 30 באט",
      googleMapLink: "https://maps.app.goo.gl/3U9vwE3jGe41X7fi7",
      images: IMAGES.gingerFarm,
    },
    {
      name: "ארקייד Echo-Ex10",
      description: "ארקייד ממש כיף בקניון מאיה",
      price: "שילמנו 300 באט ושיחקנו שנינו שעה",
      googleMapLink: "https://maps.app.goo.gl/ojyDynVNrULzjvBb6",
      images: IMAGES.arcade,
    },
    {
      name: "Sunday walking street",
      description:
        "שוק ענק כל יום ראשון. מחירים זולים ברמות ויש המון המון דוכנים שונים. לדעתי כן שונה מבנגקוק אז אם אתם רואים משהו שאהבתם תקנו!!",
      googleMapLink: "https://maps.app.goo.gl/mf4va7Pw5An85NrRA",
      images: IMAGES.sundayMarket,
    },
  ],
  nightlife: [
    {
      name: "Lanna Square",
      description:
        "אזור עם מלא ברים ושוק אוכל, פתוח כמעט כל יום בערב עד מאוחר, מומלץ",
      googleMapLink: "https://maps.app.goo.gl/zkTs4wN3E72t7YNeA",
      images: IMAGES.lanna,
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
