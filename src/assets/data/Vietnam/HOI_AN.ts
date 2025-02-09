import { Destination } from "models/Destination";
import { HOI_AN_IMAGES } from "../../img/Vietnam";
import { createDate } from "../../../helpers/dateHelpers";

export const HOI_AN: Destination = {
  id: "HOI_AN",
  displayName: {
    hebrew: "הוי אן",
    english: "Hoi An",
  },
  description:
    "עיר ממש חמודה וצבעונית. אנחנו ישנו יומיים בעיר העתיקה איפה שכולם ישנים ועוד חודש(!!) באזור של an bang beachוהיה שם פשוט מושלםםם!!!אז באמת רוב ההמלצות פה הן לאזור שישנו בו והיה מושלם.",
  profileImg: HOI_AN_IMAGES.profileImg,
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
      images: HOI_AN_IMAGES.hungDo,
      price: "65 ש״ח ללילה כולל ארוחת בוקר",
    },
  ],
  foods: [
    {
      name: "Tree Coconut Beach Restaurant",
      description:
        "מסעדה על החוף שישבנו בה כל יום!!! יש לו תמיד פירות טריים וקוקוסים מושלמים. אכלנו גם הרבה פעמים צהריים/ערב, ממליצים מאוד על דגים או פירות ים כי הכל טרי טרי והוא דג בעצמו חלק מהדברים. מומלץ ממש!",
      images: HOI_AN_IMAGES.treeCoconut,
      googleMapLink: "https://maps.app.goo.gl/ZUacsEc3nBWSCsJc7",
    },
  ],
  attractions: [
    {
      name: "העיר העתיקה בלילה",
      description:
        "העיר העתיקה בלילה מלא בחיים, מלא דוכני אוכל ודוכני קניות. פשוט להסתובב ברגל ולהנות. בכל הברים יש האפי האוור!!",
      images: HOI_AN_IMAGES.nightWalk,
    },
    {
      name: "חוף ים",
      description:
        "אנחנו ממש אהבנו את החוף שליד איפה שישנו, הלכנו כ ל יום לחוף. האוכל שתייה והפירות במסעדות בחוף מאוד זולים ולרוב אפילו יותר זולים מהמחירים של המסעדות ברחוב הראשי!!! ממש ממליצים על המסעדה Tree Coconut Beach Restaurant שנמצאת על החוף. הכיסאות בחינם אם קונים שתייה/אוכל :)",
      images: HOI_AN_IMAGES.beach,
      googleMapLink: "https://maps.app.goo.gl/ZUacsEc3nBWSCsJc7",
    },
    {
      name: "Ba Na Hills",
      description:
        "כולם טועים וחושבים שמדובר רק בגשר ידיים. זה פארק ענקי ומפואר, נופים מטורפים ומלא לראות. אנחנו נהננו מאוד וממליצים לא לפספס! הפארק מאוד עמוס ויש המוני מבקרים כל יום. אני ממליצה לקחת סיור עם מדריך, זה לא מייקר משמעותית אבל המדריכים יודעים לאן לקחת אתכם כדי שלא תעמדו בתורים! אנחנו סגרנו סיור עם קבוצה ומדריך דרך המקום שישנו, אפשר לסגור דרך כל סוכנות טיולים.",
      images: HOI_AN_IMAGES.bana,
      googleMapLink: "https://maps.app.goo.gl/pHtuh3VRcCf6xjXp6",
    },
    {
      name: "Mỹ Sơn",
      description:
        "אתר שיש בו שרידים עתיקים של מקדשים. אנחנו סגרנו דרך המלון טיול למי-סון ושייט חזרה לעיר בסירה על הנהר. היה ממש יפה ומעניין!",
      images: HOI_AN_IMAGES.myson,
      googleMapLink: "https://maps.app.goo.gl/VZzX5mCPVNc6SvKM9",
    },

    {
      name: "VinWonders",
      description:
        "פארק מטורף!! יש בו פארק מים +נלונהפארק + ספארי +עיא ויאטנמית. ממליצים להגיע בפתיחה ולהשאר עד המופעים שיש בסגירה!! נהננו ממש ממש",
      images: HOI_AN_IMAGES.vinwonders,
      price: "בערך 90 ש״ח לכרטיס שכלל גם ארוחת צהריים",
      googleMapLink: "https://maps.app.goo.gl/9RAMpPAhs5NX2XGD8",
    },
  ],
  nightlife: [
    {
      name: "Double Cat Bar Hoi An",
      description:
        "בר ממש חמוד שיש בו מלא פנסיונרים בריטיים. באנו לשם ערב אחד והתחברנו איתם ומאז באנו שוב כל ערב כדילשבת עם החברים. הבעלים של המקום חמוד ממש והקוקטיילים מצויינים!",
      images: HOI_AN_IMAGES.doubleCat,
      googleMapLink: "https://maps.app.goo.gl/WpNVuvWXNYGXdAaF9",
    },
  ],
  shells: HOI_AN_IMAGES.shells,
};
