import { createDate } from "helpers/dateHelpers";
import { Country, Destination } from "models";

import {
  VIETNAM_IMAGES,
  HOI_AN_IMAGES,
  PHONG_NHA_IMAGES,
  profileImg,
  HANOI_IMAGES,
  HA_LONG_IMAGES,
  CAT_BA_IMAGES,
  SAPA_IMAGES,
  TA_VAN_IMAGES,
} from "assets/img/Vietnam";

export const VIETNAM: Country = {
  id: "VNM",
  name: "Vietnam",
  displayName: {
    hebrew: "וייטנאם",
    english: "Vietnam",
  },
  description:
    "מדינה מושלמתתתתתת, האנשים מדהימים!!!!, האוכל טעים, הכל זול ברמות. אם לא הייתה נגמרת לנו הויזה היינו נתקעים שם לנצח.",
  gold_recommendation: [
    {
      name: "מרק פו (pho)",
      type: "Info",
      description:
        "מרק עם עוף טעים בטירוף, ככל שהמקום נראה יותר הומלסי ככה יותר טעים",
      images: VIETNAM_IMAGES.phoSoup,
    },
  ],
  profileImg: profileImg,
};

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
      type: "Hotel",
      dates: [{ from: createDate("11/06/2024"), to: createDate("13/06/2024") }],
      description:
        "מלון ממש ממוצע ובמיקום בסדר, לא ברור למה כל הישראלים כל כך עפים עליו. היה ישראליאדה מדי, לא ממליצים",
      googleMapLink: "https://maps.app.goo.gl/wmprdpf3PvswGHK5A",
    },
    {
      name: "HUNG DO BEACH HOMESTAY",
      type: "Hotel",
      dates: [{ from: createDate("13/06/2024"), to: createDate("06/07/2024") }],
      description:
        "הום סטיי של משפחה מהממת, החדרים גדולים ונקיים, המשפחה ממש חמודה ועוזרת במה שצריך. 2 דקות הליכה לחוף ויש בריכה קטנה וכייפית. נהננו ממש ובטוח נחזור!! מומלץ ברמות.",
      googleMapLink: "https://maps.app.goo.gl/GbMWVUekZcY3b9Cq9",
      images: HOI_AN_IMAGES.hungDo,
      price: "65 ש״ח ללילה כולל ארוחת בוקר",
    },
  ],
  foods: [
    {
      type: "Restaurant",
      name: "Tree Coconut Beach Restaurant",
      description:
        "מסעדה על החוף שישבנו בה כל יום!!! יש לו תמיד פירות טריים וקוקוסים מושלמים. אכלנו גם הרבה פעמים צהריים/ערב, ממליצים מאוד על דגים או פירות ים כי הכל טרי טרי והוא דג בעצמו חלק מהדברים. מומלץ ממש!",
      images: HOI_AN_IMAGES.treeCoconut,
      googleMapLink: "https://maps.app.goo.gl/ZUacsEc3nBWSCsJc7",
    },
  ],
  attractions: [
    {
      type: "Attraction",
      name: "העיר העתיקה בלילה",
      description:
        "העיר העתיקה בלילה מלא בחיים, מלא דוכני אוכל ודוכני קניות. פשוט להסתובב ברגל ולהנות. בכל הברים יש האפי האוור!!",
      images: HOI_AN_IMAGES.nightWalk,
    },
    {
      type: "Attraction",
      name: "חוף ים",
      description:
        "אנחנו ממש אהבנו את החוף שליד איפה שישנו, הלכנו כ ל יום לחוף. האוכל שתייה והפירות במסעדות בחוף מאוד זולים ולרוב אפילו יותר זולים מהמחירים של המסעדות ברחוב הראשי!!! ממש ממליצים על המסעדה Tree Coconut Beach Restaurant שנמצאת על החוף. הכיסאות בחינם אם קונים שתייה/אוכל :)",
      images: HOI_AN_IMAGES.beach,
      googleMapLink: "https://maps.app.goo.gl/ZUacsEc3nBWSCsJc7",
    },
    {
      type: "Attraction",
      name: "Ba Na Hills",
      description:
        "כולם טועים וחושבים שמדובר רק בגשר ידיים. זה פארק ענקי ומפואר, נופים מטורפים ומלא לראות. אנחנו נהננו מאוד וממליצים לא לפספס! הפארק מאוד עמוס ויש המוני מבקרים כל יום. אני ממליצה לקחת סיור עם מדריך, זה לא מייקר משמעותית אבל המדריכים יודעים לאן לקחת אתכם כדי שלא תעמדו בתורים! אנחנו סגרנו סיור עם קבוצה ומדריך דרך המקום שישנו, אפשר לסגור דרך כל סוכנות טיולים.",
      images: HOI_AN_IMAGES.bana,
      googleMapLink: "https://maps.app.goo.gl/pHtuh3VRcCf6xjXp6",
    },
    {
      type: "Attraction",
      name: "Mỹ Sơn",
      description:
        "אתר שיש בו שרידים עתיקים של מקדשים. אנחנו סגרנו דרך המלון טיול למי-סון ושייט חזרה לעיר בסירה על הנהר. היה ממש יפה ומעניין!",
      images: HOI_AN_IMAGES.myson,
      googleMapLink: "https://maps.app.goo.gl/VZzX5mCPVNc6SvKM9",
    },

    {
      type: "Attraction",
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
      type: "NightLife",
      name: "Double Cat Bar Hoi An",
      description:
        "בר ממש חמוד שיש בו מלא פנסיונרים בריטיים. באנו לשם ערב אחד והתחברנו איתם ומאז באנו שוב כל ערב כדילשבת עם החברים. הבעלים של המקום חמוד ממש והקוקטיילים מצויינים!",
      images: HOI_AN_IMAGES.doubleCat,
      googleMapLink: "https://maps.app.goo.gl/WpNVuvWXNYGXdAaF9",
    },
  ],
  shells: HOI_AN_IMAGES.shells,
};

export const PHONG_NHA: Destination = {
  id: "PHONG_NHA",
  displayName: {
    hebrew: "פונג נה",
    english: "phong nha",
  },
  description:
    "ממש אמצע הדרך מהויאן לצפון, שווה עצירה רק אם אין כח לנסיעה ארוכה ואם אוהבים מאוד מערות",
  profileImg: PHONG_NHA_IMAGES.profileImg,
  hotels: [
    {
      name: "green Homestay",
      type: "Hotel",
      dates: [{ from: createDate("07/07/2024"), to: createDate("10/07/2024") }],
      description: "מלון חמוד מיקום סבבה",
      googleMapLink: "https://maps.app.goo.gl/qP925KZHz5TuoKVP8",
      images: PHONG_NHA_IMAGES.greenHomestay,
    },
    {
      name: "Jade Phong Nha Hotel",
      type: "Hotel",
      dates: [{ from: createDate("10/07/2024"), to: createDate("13/07/2024") }],
      description: "חדר מינימלי אבל מלון ממש חמוד אחלה בריכה אחלה נוף",
      googleMapLink: "https://maps.app.goo.gl/KDRCDMS8rQ8gV3kg8",
      images: PHONG_NHA_IMAGES.jadeHotel,
    },
  ],
  foods: [],
  attractions: [
    {
      type: "Attraction",
      name: "Ồ Ồ Lake Silence",
      googleMapLink: "https://maps.app.goo.gl/BXKZ287tSxPJNYz46",
      description:
        "בית קפה חמוד על האגם, מקום יפה עם נוף יפה, משום מה הזמנו מנה קטנה של אורז עם עוף והביאו לנו עוף שלם אבל אחלה מקום",
      images: PHONG_NHA_IMAGES.lakeSilence,
    },
    {
      type: "Attraction",
      name: "Phong nha Rooftop Bar",
      googleMapLink: "https://maps.app.goo.gl/t45qzidHUpf6WmdQ8",
      description:
        "בר רופטופ, מאוד חמוד נוף מאוד יפה כי זה המקום הכי גבוה שם בערך",
      images: PHONG_NHA_IMAGES.rooftop,
    },
    {
      type: "Attraction",
      name: "Paradise Cave",
      googleMapLink: "https://maps.app.goo.gl/4oWTF7TAm3DkvejS7",
      description:
        "מערת נטיפים חמודה, הליכה קצרה בגונגל בדרך המערה ממש קרה ויש שם מסלול הליכה הלוך חזור לא ארוך",
      images: PHONG_NHA_IMAGES.paradiseCave,
    },
  ],
  nightlife: [],
  shells: [],
};

export const HANOI: Destination = {
  id: "HANOI",
  displayName: {
    hebrew: "האנוי",
    english: "hanoi",
  },
  description:
    "העיר בירה של ויאטם, שווקים בתי קפה צפוף ורעש ולחצות כביש זה 50% הצלחה 50% מוות",
  profileImg: HANOI_IMAGES.profileImg,
  hotels: [
    {
      name: "Tung Trang Hotel",
      type: "Hotel",
      dates: [{ from: createDate("12/07/2024"), to: createDate("19/07/2024") }],
      description: "מלון סביר מיקום טוב",
      googleMapLink: "https://maps.app.goo.gl/rm32r6HW1cTYM6mU6",
      images: [],
    },
    {
      name: "Little Hanoi Old Quarter Hostel",
      type: "Hotel",
      dates: [{ from: createDate("28/08/2024"), to: createDate("04/09/2024") }],
      description: "מלון סביר מיקום טוב",
      googleMapLink: "https://maps.app.goo.gl/rm32r6HW1cTYM6mU6",
      images: [],
    },
  ],
  foods: [],
  attractions: [
    {
      type: "Attraction",
      name: "Gifthaus חנות משחקים",
      googleMapLink: "https://maps.app.goo.gl/SbaRRnY3yFjNFRRg6",
      description: "חנות עם מליון משחקי קלפים וקופסא והכל אחלה מחירים",
      images: HANOI_IMAGES.gifthouse,
    },
  ],
  nightlife: [],
  shells: [],
};

export const CAT_BA: Destination = {
  id: "CAT_BA",
  displayName: {
    hebrew: "קאט בה",
    english: "cat ba",
  },
  description: "אי חמוד נחמד במפרץ הא לונג, אין ככ הרבה מה לעשות בו",
  profileImg: CAT_BA_IMAGES.profileImg,
  hotels: [
    {
      name: "Sun Flower Hotel",
      type: "Hotel",
      dates: [{ from: createDate("19/07/2024"), to: createDate("02/08/2024") }],
      description:
        "סגרנו באמרלד היה נראה כמו שירותים של תחנה מרכזית ועברנו חיש מהר לsun flower hotel" +
        "\n" +
        "מלון טוב חדרים טובים אחלה מיקום",
      images: CAT_BA_IMAGES.sunflower,
    },
  ],
  images: CAT_BA_IMAGES.general,
  foods: [],
  attractions: [
    {
      type: "Attraction",
      name: "Thung lũng Bướm - Butterfly Valley בית קפה",
      googleMapLink: "https://maps.app.goo.gl/TzPePDTti6GLQt1E9",
      description: "בית קפה נחמד עם נוף יפה ואזור נחמד להסתובב בו",
      images: CAT_BA_IMAGES.butterflyValley,
    },
    {
      type: "Attraction",
      name: "Secret Garden",
      googleMapLink: "https://maps.app.goo.gl/neab5BD1rHKZLhT97",
      description: "הוסטל עם אחלה מתחם לאוכל קפה בירה בריכה מה שרוצים",
      images: CAT_BA_IMAGES.SecretGarden,
    },
    {
      type: "Attraction",
      name: "Tung thu beach",
      googleMapLink: "https://maps.app.goo.gl/xYN2LeLQoxG34Avx7",
      description: "חוף מאוד נחמד עם כמה אזורים של ויאטנמים לשבת",
      images: CAT_BA_IMAGES.Tungthu,
    },
    {
      type: "Attraction",
      name: "Eden Bar & Coffee",
      googleMapLink: "https://maps.app.goo.gl/r5r3V8jUoK2534C87",
      description: "בית קפה חמוד באמצע שום מקום",
      images: CAT_BA_IMAGES.Eden,
    },
    {
      type: "Attraction",
      name: "Trung Tâm Y Tế Huyện Cát Hải",
      description: "בית חולים ממש טוב",
      googleMapLink: "https://maps.app.goo.gl/m4ZUzMm2LfhSNnqaA",
      images: CAT_BA_IMAGES.hospital,
    },
  ],
  nightlife: [],
  shells: CAT_BA_IMAGES.shells,
};

export const HA_LONG: Destination = {
  id: "HA_LONG",
  displayName: {
    hebrew: "הא לונג",
    english: "ha long",
  },
  description:
    "האזור חוף של הא לונג, חופים מהממים, נראה מאוד שווה אבל הכל ריק מבפנים שקרנים",
  profileImg: HA_LONG_IMAGES.profileImg,
  hotels: [
    {
      name: "The Marine Hotel",
      googleMapLink: "https://maps.app.goo.gl/dQtSJ4Mqr7L9N3w39",
      type: "Hotel",
      dates: [{ from: createDate("02/08/2024"), to: createDate("08/08/2024") }],
      description: "מלןו קצת דלוח",
    },
  ],
  foods: [],
  attractions: [
    {
      type: "Attraction",
      name: "Chill Beach Bar",
      description: "בר חוף ממש חמוד",
      googleMapLink: "https://maps.app.goo.gl/F9rEa4qJxXuamdf1A",
      images: HA_LONG_IMAGES.chillBar,
    },
    {
      type: "Attraction",
      name: "שיט במפרץ הא לונג",
      description: "שיט של כמה שעיות במפרץ, כולל מערץ נטיפים וקייאקים",
      // googleMapLink: "https://maps.app.goo.gl/F9rEa4qJxXuamdf1A",
      images: HA_LONG_IMAGES.cruise,
    },
    {
      type: "Attraction",
      name: "Bãi tắm",
      description: "אזור מאוד נחמד עם ברים ומסעדות על החוף",
      // googleMapLink: "https://maps.app.goo.gl/F9rEa4qJxXuamdf1A",
      images: HA_LONG_IMAGES.baitam,
    },
  ],
  nightlife: [],
  shells: [],
  images: HA_LONG_IMAGES.general,
};

export const SAPA: Destination = {
  id: "SAPA",
  displayName: {
    hebrew: "סאפה",
    english: "sapa",
  },
  description: "עיר מאוד חמודה בצפון ויאטנם, הרבה ברים מסעדות שופינג",
  profileImg: SAPA_IMAGES.profileImg,
  hotels: [
    {
      name: "central sapa serenity",
      googleMapLink: "https://maps.app.goo.gl/pD3KWsF6NZZT88in7",
      images: SAPA_IMAGES.serenity,
      type: "Hotel",
      dates: [{ from: createDate("08/08/2024"), to: createDate("16/08/2024") }],
      description: "מלון חמוד מיקום סבבה כמות מדרגות שעדיף לישון ברחוב",
    },
    {
      name: "Sapa Snow Hotel",
      googleMapLink: "https://maps.app.goo.gl/gArZfgGaTvVP4oby6",
      // images: SAPA_IMAGES.serenity,
      type: "Hotel",
      dates: [{ from: createDate("26/08/2024"), to: createDate("28/08/2024") }],
      description: "מלון חמוד מיקום סבבה עדיף לישון יותר קרוב למרכז",
    },
  ],
  foods: [
    {
      type: "Restaurant",
      description: "אחלה מסעדה ארוחות בוקר מערביות",
      name: "Anise Kitchen",
      googleMapLink: "https://maps.app.goo.gl/wYeBDcS8F81oRP3F8",
      images: SAPA_IMAGES.Anise,
    },
    {
      type: "Restaurant",
      name: "Aloha Coffe & Fastfood",
      description: "אחלה מסעדה בית קפה אחלה נוף",
      googleMapLink: "https://maps.app.goo.gl/UgpFcTBJMjedp75W7",
      images: SAPA_IMAGES.Aloha,
    },
  ],
  attractions: [
    {
      type: "Attraction",
      name: "Lá Đỏ 2 Homestay & Coffee",
      description: "בית קפה עם נוף מהמם לכל העמק למטה",
      googleMapLink: "https://maps.app.goo.gl/uFWah5LqCJvY1JhdA",
      images: SAPA_IMAGES.lado,
    },
    {
      type: "Attraction",
      name: "Huân Đậu Đậu Coffee & Homestay",
      description: "בית קפה עם נוף מהמם לשדות אורז",
      googleMapLink: "https://maps.app.goo.gl/N8aQ2aU3LHZK24jV6",
      images: SAPA_IMAGES.huan,
    },
    {
      type: "Attraction",
      name: "Fansipan",
      description: "הר מטורף עם מקדשים ושטויות",
      googleMapLink: "https://maps.app.goo.gl/hEEe8SxyGuZjkr756",
      images: SAPA_IMAGES.Fansipan,
    },
  ],
  nightlife: [],
  shells: [],
  images: SAPA_IMAGES.general,
};

export const TA_VAN: Destination = {
  id: "TA_VAN",
  displayName: {
    hebrew: "טה ואן",
    english: "ta van",
  },
  description:
    "כפר קרוב לסאפה איפה שכולם הולכים עם המאמות, אין הרבה לעשות אבל היינו בריזורט ממש ממש כיף וחמוד",
  profileImg: TA_VAN_IMAGES.profileImg,
  hotels: [
    {
      name: "Healing Homestay Sapa",
      googleMapLink: "https://maps.app.goo.gl/FK85hoQo7yxf2Vmw6",
      images: TA_VAN_IMAGES.Healing,
      type: "Hotel",
      dates: [{ from: createDate("16/08/2024"), to: createDate("26/08/2024") }],
      description: "ריזורט סופר חמוד עם נוף מהמם ואנשים ממש חמודים",
    },
  ],
  foods: [],
  attractions: [
    {
      type: "Attraction",
      name: "Ly House Ta Van",
      description: "בית קפה מסעדה מאודח חמוד על הנהר",
      googleMapLink: "https://maps.app.goo.gl/58uVPKB3BghKi45NA",
      images: TA_VAN_IMAGES.LyHouse,
    },
    {
      type: "Attraction",
      name: "Love Waterfall",
      description: " מסלול חמוד יפה ולא ארוך שמוביל למפל",
      googleMapLink: "https://maps.app.goo.gl/cacQvdGDcX3xBydV9",
      images: TA_VAN_IMAGES.LoveWaterfall,
    },
  ],
  nightlife: [],
  shells: [],
  images: SAPA_IMAGES.general,
};
