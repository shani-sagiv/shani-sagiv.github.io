import shell1 from "./shell1.jpg";
import shell2 from "./shell2.jpg";
import shell3 from "./shell3.jpg";
import shell4 from "./shell4.jpg";
import shell5 from "./shell5.jpg";

import hotel1 from "./hotel1.jpg";
import hotel2 from "./hotel2.jpg";
import hotel3 from "./hotel3.jpg";

import attr1 from "./attr1.jpg";
import attr2 from "./attr2.jpg";
import attr3 from "./attr3.jpg";

import rest1 from "./rest1.jpg";
import rest2 from "./rest2.jpg";
import rest3 from "./rest3.jpg";
import rest4 from "./rest4.jpg";

import night1 from "./night1.jpg";
import night2 from "./night2.jpg";
import night3 from "./night3.jpg";

import main from "./main.jpg";

import { importAll } from "../../../../helpers/imagesHelpers";
export const beachTravelImages = importAll(
  require.context("./beach-travel", false, /\.(png|jpe?g|svg)$/),
);
export const mosquitosImages = importAll(
  require.context("./mosquitos", false, /\.(png|jpe?g|svg)$/),
);

export const KHO_LANTA = {
  profile: main,
  shells: [shell1, shell2, shell3, shell4, shell5],
  hotelLantaRiviera: [hotel1, hotel2, hotel3],
  beachTravelImages: beachTravelImages,
  mosquitos: mosquitosImages,
  attractionsFollowingGiants: [attr1, attr2],
  attractionsMarket: [attr3],
  restaurantsLantaRiviera: [rest1, rest2, rest3],
  restaurantsMoonwalk: [rest4],
  nightLife: [night1, night2, night3],
};
