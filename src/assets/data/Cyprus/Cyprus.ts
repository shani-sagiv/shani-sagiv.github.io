import { Country } from "models";
import profile from "./profile_compressed_compressed.webp";
import { Limassol } from "./Limassol";
import { Vasa } from "./Vasa";
import { Larnaca } from "./Larnaca";
import { Paphos } from "./Paphos";

export const Cyprus: Country = {
  id: "Cyprus",
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
[Limassol, Vasa, Paphos, Larnaca]

