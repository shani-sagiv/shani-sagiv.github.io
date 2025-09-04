import { Destination } from "models/Destination";
import IMAGES from "./images";
import { createDate } from "helpers/dateHelpers";

export const HoiAn: Destination = {
  id: "HoiAn",
  displayName: {
    hebrew: "הוי אן",
    english: "Hoi An",
  },
  gold_recommendation:[
    {
      name: "אופנוע",
      description:"אצל דודי הבית הישראלי 80 אלף ליום הכי זול שמצאתי",
    },     {
      name: "מספרה",
      images:IMAGES.LEBINH,
      links:["https://maps.app.goo.gl/aTjv95SCZEVFsMmy5"],
      description:"20 דק תספורת וזרן ו15 דק מסאז ראש וואו מפחיד",
    }, 
  ],
  images:IMAGES.general,
  description:
    "עיר ממש חמודה וצבעונית. אנחנו ישנו יומיים בעיר העתיקה איפה שכולם ישנים ועוד חודש(!!) באזור של an bang beachוהיה שם פשוט מושלםםם!!!אז באמת רוב ההמלצות פה הן לאזור שישנו בו והיה מושלם." +
    " אחכ עברנו לאזור שוב של העיר העתיקה לעוד כמה שבועות",
  profileImg: IMAGES.profileImg,
  hotels: [
    {
      name: "Aman Boutique Hotel",
      dates: [{ from: createDate("11/06/2024"), to: createDate("13/06/2024") }],
      description:
        "מלון ממש ממוצע ובמיקום בסדר, לא ברור למה כל הישראלים כל כך עפים עליו. היה ישראליאדה מדי, לא ממליצים",
      googleMapLink: "https://maps.app.goo.gl/wmprdpf3PvswGHK5A",
    },
    {
      name: "HUNG DO BEACH HOMESTAY",
      dates: [{ from: createDate("13/06/2024"), to: createDate("07/07/2024") }],
      description:
        "הום סטיי של משפחה מהממת, החדרים גדולים ונקיים, המשפחה ממש חמודה ועוזרת במה שצריך. 2 דקות הליכה לחוף ויש בריכה קטנה וכייפית. נהננו ממש ובטוח נחזור!! מומלץ ברמות.",
      googleMapLink: "https://maps.app.goo.gl/GbMWVUekZcY3b9Cq9",
      images: IMAGES.hungDo,
      price: "65 ש״ח ללילה כולל ארוחת בוקר",
    },
    {
      name: "Windbell Villa Hoi An",
      dates: [
        { from: createDate("15/03/2025"), to: createDate("04/04/2025") },
        { from: createDate("12/07/2025"), to: createDate("16/07/2025") }
      ],
      description:
        "הום סטיי ממש ממש חמוד קצת רחוק מהכל אבל משפחה ממש חמודה עם מיאו",
      googleMapLink: "https://maps.app.goo.gl/NLH7APssNG9RWPq2A",
      images: IMAGES.Windbell,
      // price: "75 ש״ח ללילה ",
    },
    {
      name: "Little Riverside Hoi An - Little Luxury Hotel & Spa",
      dates: [
        { from: createDate("16/07/2025"), to: createDate("19/07/2025") },
        { from: createDate("29/07/2025"), to: createDate("02/08/2025") }
      ],
      description:
        "מלון ממש שווה אחלה של בופה בוקר אחלה של חדר אחלה של מקלחת",
      googleMapLink: "Little Riverside Hoi An - Little Luxury Hotel & Spa",
      images: IMAGES.LittleRiverside,
      // price: "75 ש״ח ללילה ",
    },
    {
      name: "An Bang Beach Dolphin Homestay",
      dates: [
        { from: createDate("19/07/2025"), to: createDate("23/07/2025") }
      ],
      description:"נחמד לא מלהיב",
        googleMapLink: "https://maps.app.goo.gl/Q49of3GuFAAc8nHA8",
    },
     {
      name: "An Bang Gold Coast Beach Villa",
      dates: [
        { from: createDate("02/08/2025"), to: createDate("07/08/2025") }
      ],
      images: IMAGES.GoldCoast,
      description:"נחמד לא מלהיב",
        googleMapLink: "https://maps.app.goo.gl/XF1UcqbQZPSRrJMp8",
    },
    {
      name: "Winhouse An Bang Boutique Inn & Lounge",
      dates: [
        { from: createDate("23/07/2025"), to: createDate("27/07/2025") }
      ],
      images:IMAGES.Winhouse,
      description:"אני אהבתי שני פחות",
        googleMapLink: "https://maps.app.goo.gl/nKke6LvxYjJC7BMbA",
    },
  ],
  foods: [
    {
      name: "Tree Coconut Beach Restaurant",
      description:
        "מסעדה על החוף שישבנו בה כל יום!!! יש לו תמיד פירות טריים וקוקוסים מושלמים. אכלנו גם הרבה פעמים צהריים/ערב, ממליצים מאוד על דגים או פירות ים כי הכל טרי טרי והוא דג בעצמו חלק מהדברים. מומלץ ממש!",
      images: IMAGES.treeCoconut,
      googleMapLink: "https://maps.app.goo.gl/ZUacsEc3nBWSCsJc7",
    },
    {
      name: "Roving Chill house",
      description: "אחלה מקום נוף יפה אחלה אוכל",
      images: IMAGES.Roving,
      googleMapLink: "https://maps.app.goo.gl/JEb3cceGCDoBgTCaA",
    },
    {
      name:"LUCKY RESTAURANT",
      description: "מסעדה ממש חמודה עם אוכל טעים ועם סאני",
      images: IMAGES.lucky,
      googleMapLink: "https://maps.app.goo.gl/jAsrRfQGxHPTPywh7", 
    },
    {
      name:"Casa Loco An Bang - Mexican Restaurant",
      description: "מסעדה מקסיקנית ממש טעימה",
      images: IMAGES.casaLoco,
      googleMapLink: "https://maps.app.goo.gl/73j8CYKSe4M2gnAp7",
    },
    
    ],
  attractions: [
    {
      name: "VinWonders",
      description:
        "פארק מטורף!! יש בו פארק מים +נלונהפארק + ספארי +עיא ויאטנמית. ממליצים להגיע בפתיחה ולהשאר עד המופעים שיש בסגירה!! נהננו ממש ממש",
      images: IMAGES.vinwonders,
      price: "בערך 90 ש״ח לכרטיס שכלל גם ארוחת צהריים",
      googleMapLink: "https://maps.app.goo.gl/9RAMpPAhs5NX2XGD8",
    },
    {
      name: "העיר העתיקה בלילה",
      description:
        "העיר העתיקה בלילה מלא בחיים, מלא דוכני אוכל ודוכני קניות. פשוט להסתובב ברגל ולהנות. בכל הברים יש האפי האוור!!",
      images: IMAGES.nightWalk,
    },
    {
      name: "חוף ים",
      description:
        "אנחנו ממש אהבנו את החוף שליד איפה שישנו, הלכנו כ ל יום לחוף. האוכל שתייה והפירות במסעדות בחוף מאוד זולים ולרוב אפילו יותר זולים מהמחירים של המסעדות ברחוב הראשי!!! ממש ממליצים על המסעדה Tree Coconut Beach Restaurant שנמצאת על החוף. הכיסאות בחינם אם קונים שתייה/אוכל :)",
      images: IMAGES.beach,
      googleMapLink: "https://maps.app.goo.gl/ZUacsEc3nBWSCsJc7",
    },
    {
      name: "Ba Na Hills",
      description:
        "כולם טועים וחושבים שמדובר רק בגשר ידיים. זה פארק ענקי ומפואר, נופים מטורפים ומלא לראות. אנחנו נהננו מאוד וממליצים לא לפספס! הפארק מאוד עמוס ויש המוני מבקרים כל יום. אני ממליצה לקחת סיור עם מדריך, זה לא מייקר משמעותית אבל המדריכים יודעים לאן לקחת אתכם כדי שלא תעמדו בתורים! אנחנו סגרנו סיור עם קבוצה ומדריך דרך המקום שישנו, אפשר לסגור דרך כל סוכנות טיולים.",
      images: IMAGES.bana,
      googleMapLink: "https://maps.app.goo.gl/pHtuh3VRcCf6xjXp6",
    },
    {
      name: "Mỹ Sơn",
      description:
        "אתר שיש בו שרידים עתיקים של מקדשים. אנחנו סגרנו דרך המלון טיול למי-סון ושייט חזרה לעיר בסירה על הנהר. היה ממש יפה ומעניין!",
      images: IMAGES.myson,
      googleMapLink: "https://maps.app.goo.gl/VZzX5mCPVNc6SvKM9",
    },
    {
      name: "Pacific Hospital Hoi An",
      description: "פתוח 24/7 אחלה",
      images: IMAGES.Pacific,
      googleMapLink: "https://maps.app.goo.gl/tVYos6nmppUPuTdy7",
    },
    {
      name: "סתם מקום יפה באמצע הדרך",
      description: "",
      images: IMAGES.Bufallo,
      googleMapLink: "https://maps.app.goo.gl/cbkosQRbXqdZNP5FA",
    },
    {
      name: "Tra Que Vegetable Village Restaurant",
      description: "נראה כמו חווה במיינקראפט",
      images: IMAGES.traque,
      googleMapLink: "https://maps.app.goo.gl/d3rh6mwDnT74m2A96",
    },
    {
      name: "סדנאת אוכל של זיו",
      description: "היה נחמד שני יותר אהבה",
      images: IMAGES.ziv,
    },
    {
      name: "כפר כדרים",
      googleMapLink: "https://maps.app.goo.gl/2oYzBSnfebmNemAa8",
      description:
        "לא גדול אבל מאוד חמוד אםשר לעשות אובניים ב7 שקלים עשינו פעמיים",
      images: IMAGES.Pottery,
    },
    {
      name: "סגנאות ציור מטורפות של נופר האלופה",
      googleMapLink: "https://maps.app.goo.gl/Q5ocnNfeARhmsh9G7",
      description: "צריך את נופר בשביל זה",
      images: IMAGES.painting,
    },
    {
      name: "Dolphin Kitchen & Bar",
      googleMapLink: "https://maps.app.goo.gl/4B8rRNxyY6R6wZvE8",
      description: " אחלה מקום נחמד באן בנג ביץ קלאב נחמד",
      images: IMAGES.Dolphin,
    },
    {
      name: "סדנאת סכינים",
      description: "איזה ישראלי ארגן",
      images: IMAGES.Knife,
    },   {
      name: "Hoi An Memories Land",
      googleMapLink:"https://maps.app.goo.gl/NZBHXYJg5rw28zZd9",
      description: " מופע ויאטנמי חמוד מאוד ודיסני קטן",
      images: IMAGES.MemoriesLand,
    },
  ],
  nightlife: [
    {
      name: "Double Cat Bar Hoi An",
      description:
        "בר ממש חמוד שיש בו מלא פנסיונרים בריטיים. באנו לשם ערב אחד והתחברנו איתם ומאז באנו שוב כל ערב כדילשבת עם החברים. הבעלים של המקום חמוד ממש והקוקטיילים מצויינים!",
      images: IMAGES.doubleCat,
      googleMapLink: "https://maps.app.goo.gl/WpNVuvWXNYGXdAaF9",
    },
  ],
  shells: IMAGES.shells,
};
