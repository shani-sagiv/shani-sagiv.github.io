import { createDate } from "../../../helpers/dateHelpers";
import { AttractionRecommendation, Country, Destination } from "models/index";
import profileImg from "./profile.jpeg";
import { SIEM_REAP } from "./SiemReap";
import { KOH_RONG } from "./KohRong";

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

export const CAMBODIA_DESTINATION = [SIEM_REAP, KOH_RONG];
