import { createDate } from "../../../helpers/dateHelpers";
import { AttractionRecommendation, Country, Destination } from "models/index";
import { SEOUL } from "./Seoul";
import profileImg from "./profile_compressed_compressed.webp";

export const SOUTH_KOREA: Country = {
  id: "south_korea",
  name: "South Korea",
  displayName: {
    hebrew: "דרום קוריאה",
    english: "South Korea",
  },
  description:"",
  gold_recommendation:[],
  profileImg: profileImg,
};

export const SOUTH_KOREA_DESTINATION = [
  SEOUL
];

