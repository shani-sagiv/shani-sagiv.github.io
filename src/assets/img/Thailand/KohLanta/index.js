import attr3 from "./attr3.jpg";
import rest4 from "./rest4.jpg";

import night1 from "./night1.jpg";
import night2 from "./night2.jpg";
import night3 from "./night3.jpg";

import main from "./main.jpg";

import { importAll } from "../../../../helpers/imagesHelpers";
export const beachTravelImages = importAll(
  require.context("./beach-travel", false, /\.(png|jpe?g|svg)$/),
);

export const shellsImages = importAll(
  require.context("./shells", false, /\.(png|jpe?g|svg)$/),
);

export const LantaRivieraImages = importAll(
  require.context("./LantaRiviera", false, /\.(png|jpe?g|svg)$/),
);
export const FollowingGiantsImages = importAll(
  require.context("./FollowingGiants", false, /\.(png|jpe?g|svg)$/),
);
export const RestaurantLantaRivieraImages = importAll(
  require.context("./RestaurantLantaRiviera", false, /\.(png|jpe?g|svg)$/),
);

export const KHO_LANTA_IMAGES = {
  profile: main,
  shells: shellsImages,
  hotelLantaRiviera: LantaRivieraImages,
  beachTravelImages: beachTravelImages,
  attractionsFollowingGiants: FollowingGiantsImages,
  attractionsMarket: [attr3],
  restaurantsLantaRiviera: RestaurantLantaRivieraImages,
  restaurantsMoonwalk: [rest4],
  nightLife: [night1, night2, night3],
};
