import { Country } from "models";
import profile from "./profile_compressed_compressed.webp";
import { LIMASSOL } from "./Limassol/Limassol";
import { VASA } from "./Vasa/vasa";
import { LARNACA } from "./Larnaca/Larnaca";
import { PAPHOS } from "./Paphos/Paphos";

export const CYPRUS: Country = {
  id: "CYPRUS",
  name: "CYPRUS",
  displayName: {
    hebrew: "קפריסין",
    english: "Cyprus",
  },
  description: "קפריסין לא יודע",
  // description:
  //   "תאילנד היא מדינה טרופית בדרום-מזרח אסיה, המפורסמת בחופים קסומים, מקדשים בודהיסטיים מרהיבים ותרבות עשירה. בנוסף, המדינה מציעה חוויות קולינריות מגוונות, חיי לילה תוססים ושווקים ססגוניים",
  gold_recommendation: [],
  profileImg: profile,
  // inProgress: true,
};


export const CYPRUS_DESTINATION = 
[LIMASSOL, VASA, PAPHOS, LARNACA]

