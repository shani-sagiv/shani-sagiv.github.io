import { createDate } from "../../../helpers/dateHelpers";
import { AttractionRecommendation, Country, Destination } from "models/index";

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
  HO_CHI_MINH_IMAGES,
  NINH_BINH_IMAGES,
} from "../../img/Vietnam";
import { MUI_NE } from "./MuiNe";
import { NAH_TRANG } from "./NahTrang";
import { HO_CHI_MINH } from "./HO_CHI_MINH";
import { TA_VAN } from "./TA_VAN";
import { SAPA } from "./SAPA";
import { HA_LONG } from "./HA_LONG";
import { CAT_BA } from "./CAT_BA";
import { PHONG_NHA } from "./PHONG_NHA";
import { HOI_AN } from "./HOI_AN";
import { NINH_BINH } from "./NINH_BINH";
import { HANOI } from "./HANOI";

export const VIETNAM: Country = {
  id: "VNM",
  name: "Vietnam",
  displayName: {
    hebrew: "וייטנאם",
    english: "Vietnam",
  },
  description:
    "מדינה מושלמתתתתתת, האנשים מדהימים!!!!, האוכל טעים, הכל זול ברמות. אם לא הייתה נגמרת לנו הויזה היינו נתקעים שם לנצח. וגם אין יתושים!!!",
  gold_recommendation: [
    {
      name: "מרק פו (pho)",
      description:
        "מרק עם עוף טעים בטירוף, ככל שהמקום נראה יותר הומלסי ככה יותר טעים",
      images: VIETNAM_IMAGES.phoSoup,
    },
    {
      name: "סליפרים",
      description:
        "לכל הסליפרים קוראים VIP וluxury אז אל תתנו לזה לקנות אתכם, תסתכלו במספר שכתוד לי הסליפרים והוא אומר כמה מקומות יש באוטובוס. אנחנו תמיד הדעפנו לשלם קצת יותר ולסגור סליפר של 20-224 מקמות זה הכי נוח",
      images: VIETNAM_IMAGES.sleeper,
    },
    {
      name: "קלי הסוכנת",
      phones: ["+84 94 722 2598"],
      description:
        "סגרנו איתה הרבה דברים ובעיקר מעברים והיא בחיים לא איכזבה!!!! היא ממש זמינה ומתוקה ועוזרת. השווינו מחירים וכמעט תמיד היא הכי זולה ובאמת תמיד נהנינו ושמחנו לסגור איתה כי היה יותר מוצלח מסוכנים אחרים",
    },
  ],
  profileImg: profileImg,
};

export const VIETNAM_DESTINATION = [
  HOI_AN,
  PHONG_NHA,
  HANOI,
  CAT_BA,
  HA_LONG,
  SAPA,
  TA_VAN,
  HO_CHI_MINH,
  NINH_BINH,
  MUI_NE,
  NAH_TRANG,
];

//todo: something with ha long bay cruise multiple display
