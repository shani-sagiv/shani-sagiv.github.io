import { createDate } from "../../../helpers/dateHelpers";
import { AttractionRecommendation, Country, Destination } from "models/index";
import { MUI_NE } from "./MuiNe";
import { NAH_TRANG } from "./NahTrang";
import { PHU_QUOC } from "./PhuQuoc";
import { DA_NANG } from "./DaNang";
import { CHAM_ISLANDS } from "./ChamIslands";
import { HOI_AN } from "./HoiAn";
import { PHONG_NHA } from "./PhongNha/PHONG_NHA";
import { HANOI } from "./hanoi/HANOI";
import { CAT_BA } from "./CatBa/CAT_BA";
import { HA_LONG } from "./HaLong/HA_LONG";
import { TA_VAN } from "./TaVan/TA_VAN";
import { SAPA } from "./Sapa/SAPA";
import { HO_CHI_MINH } from "./HoChiMinh/HO_CHI_MINH";
import { NINH_BINH } from "./ninhBinh/NINH_BINH";
import IMAGES from "./images";
import profileImg from "./image.png"

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
      images: IMAGES.phoSoup,
    },
    {
      name: "סליפרים",
      description:
        "לכל הסליפרים קוראים VIP וluxury אז אל תתנו לזה לקנות אתכם, תסתכלו במספר שכתוד לי הסליפרים והוא אומר כמה מקומות יש באוטובוס. אנחנו תמיד הדעפנו לשלם קצת יותר ולסגור סליפר של 20-224 מקמות זה הכי נוח",
      images: IMAGES.sleeper,
    },
    {
      name: "קלי הסוכנת",
      phones: ["+84 94 722 2598"],
      description:
        "סגרנו איתה הרבה דברים ובעיקר מעברים והיא בחיים לא איכזבה!!!! היא ממש זמינה ומתוקה ועוזרת. השווינו מחירים וכמעט תמיד היא הכי זולה ובאמת תמיד נהנינו ושמחנו לסגור איתה כי היה יותר מוצלח מסוכנים אחרים",
    },
         {
      name: "סים",
      description:"viettel הכי טוב",
      images: IMAGES.sim,
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
  PHU_QUOC,
  DA_NANG,
  CHAM_ISLANDS
];

//todo: something with ha long bay cruise multiple display
