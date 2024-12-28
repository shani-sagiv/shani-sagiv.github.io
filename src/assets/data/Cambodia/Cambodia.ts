import { createDate } from "../../../helpers/dateHelpers";
import { AttractionRecommendation, Country, Destination } from "models/index";
import profileImg from "./profile.jpeg";
import { SIEM_REAP } from "./SiemReap";

export const CAMBODIA: Country = {
  id: "CAMBODIA",
  name: "Cambodia",
  displayName: {
    hebrew: "קמבודיה",
    english: "Cambodia",
  },
  description: "בינתיים נראה ממש חמוד",
  gold_recommendation: [],
  profileImg: profileImg,
};

export const CAMBODIA_DESTINATION = [SIEM_REAP];
