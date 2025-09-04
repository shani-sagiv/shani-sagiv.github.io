import { createDate } from "helpers/dateHelpers";
import { Country, Destination } from "models";
// import simSrc from "assets/img/Thailand/sim_compressed.webp";
// import {

//   CHINAG_MAI_IMAGES,
//   sushiImages,
//   KOH_CHANG_IMAGES,
//   PATTAYA_IMAGES,
//   KOH_SAMUI_IMAGES,
//   KOH_TAO_IMAGES,
//   THAILAND_IMAGES,
// } from "assets/img/Thailand";
// import { Mushon } from "../../img/Thailand/KohSamui";

import { Bangkok } from "./Bangkok";
import { KohLanta } from "./KohLanta";
import profileImg from "./main_compressed.webp";
import { KohPhaNgan } from "./KohPhaNgan";
import { ChinagMai } from "./ChinagMai";
import { KohChang } from "./KohChang";
import { Pattaya } from "./Pattaya";
import { KohSamui } from "./KohSamui";
import { KohTao } from "./KohTao";
import IMAGES  from "./images";


export const Thailand: Country = {
  id: "Thailand",
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
      images: IMAGES.mosquitos,
    },
    {
      name: "סים ☎️",
      description:
        "יש ב7/11 סימים ממש בזול, יש להם לכמה מספרי ימים, כל אחד הוא כמות גיגה פר יום אז כדאי לבדוק כמה משתמשים כי לא תמיד צריך הרבה",
      images: IMAGES.sim,
    },
    {
      name: "סושי בשקל 🍣",
      description:
        "בכללל שוק שהיינו בו יש דוכן של סושי ב10 באט. תקשיבו זה תמיד טעים ברמות ובחיים לא עשה לי בעיות בבטן (ואני רגישה). קיצר מוממלץ מאוד",
      images: IMAGES.sushi,
    },
  ],
  profileImg: profileImg,
};

export const THAILAND_DESTINATION = [
  Bangkok,
  KohLanta,
  KohPhaNgan,
  ChinagMai,
  KohChang,
  Pattaya,
  KohSamui,
  KohTao,
];
