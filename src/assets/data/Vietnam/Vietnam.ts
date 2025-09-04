import { createDate } from "../../../helpers/dateHelpers";
import { AttractionRecommendation, Country, Destination } from "models/index";
import { MuiNe } from "./MuiNe";
import { NahTrang } from "./NahTrang";
import { PhuQuoc } from "./PhuQuoc";
import { DaNang } from "./DaNang";
import { ChamIslands } from "./ChamIslands";
import { HoiAn } from "./HoiAn";
import { PhongNha } from "./PhongNha";
import { Hanoi } from "./Hanoi";
import { CatBa } from "./CatBa";
import { HaLong } from "./HaLong";
import { TaVan } from "./TaVan";
import { Sapa } from "./Sapa";
import { HoChiMinh } from "./HoChiMinh";
import { NinhBinh } from "./NinhBinh";
import IMAGES from "./images";
import profileImg from "./image.png"

export const Vietnam: Country = {
  id: "Vietnam",
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
      id: "phoSoup", images: IMAGES.phoSoup,
    },
    {
      name: "סליפרים",
      description:
        "לכל הסליפרים קוראים VIP וluxury אז אל תתנו לזה לקנות אתכם, תסתכלו במספר שכתוד לי הסליפרים והוא אומר כמה מקומות יש באוטובוס. אנחנו תמיד הדעפנו לשלם קצת יותר ולסגור סליפר של 20-224 מקמות זה הכי נוח",
      id: "sleeper", images: IMAGES.sleeper,
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
      id: "sim", images: IMAGES.sim,
    },
  ],
  profileImg: profileImg,
  };

export const VIETNAM_DESTINATION = [
  HoiAn,
  PhongNha,
  Hanoi,
  CatBa,
  HaLong,
  Sapa,
  TaVan,
  HoChiMinh,
  NinhBinh,
  MuiNe,
  NahTrang,
  PhuQuoc,
  DaNang,
  ChamIslands
];

//todo: something with ha long bay cruise multiple display
