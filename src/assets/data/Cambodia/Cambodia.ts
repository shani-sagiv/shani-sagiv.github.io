import { createDate } from "../../../helpers/dateHelpers";
import { AttractionRecommendation, Country, Destination } from "models/index";
import profileImg from "./profile_compressed.webp";
import { SIEM_REAP } from "./SiemReap";
import { KOH_RONG } from "./KohRong";
import { KOH_RONG_SANLOEM } from "./KohRongSanloem";
import { KAMPOT } from "./Kampot";

export const CAMBODIA: Country = {
  id: "CAMBODIA",
  name: "Cambodia",
  displayName: {
    hebrew: "קמבודיה",
    english: "Cambodia",
  },
  description: "מאוד מאוד חמודה אחלה יעד",
  gold_recommendation: [],
  profileImg: profileImg,
};

export const CAMBODIA_DESTINATION = [
  SIEM_REAP,
  KOH_RONG,
  KOH_RONG_SANLOEM,
  KAMPOT,
];
