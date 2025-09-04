import { createDate } from "../../../helpers/dateHelpers";
import { AttractionRecommendation, Country, Destination } from "models";
import profileImg from "./profile_compressed.webp";
import { SiemReap } from "./SiemReap";
import { KohRong } from "./KohRong";
import { KohRongSanloem } from "./KohRongSanloem";
import { Kampot } from "./Kampot";

export const Cambodia: Country = {
  id: "Cambodia",
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
  SiemReap,
  KohRong,
  KohRongSanloem,
  Kampot,
];
