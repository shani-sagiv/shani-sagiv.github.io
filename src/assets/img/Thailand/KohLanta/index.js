import main from "./main.jpg";

import { importAll } from "../../../../helpers/imagesHelpers";
export const beachTravelImages = importAll(
  require.context("./beach-travel", false, /\.(png|jpe?g|svg)$/),
);
export const nightLife = importAll(
  require.context("./nightLife", false, /\.(png|jpe?g|svg)$/),
);
export const attractionsMarket = importAll(
  require.context("./attractionsMarket", false, /\.(png|jpe?g|svg)$/),
);
export const restaurantsMoonwalk = importAll(
  require.context("./restaurantsMoonwalk", false, /\.(png|jpe?g|svg)$/),
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
  attractionsMarket: attractionsMarket,
  restaurantsLantaRiviera: RestaurantLantaRivieraImages,
  restaurantsMoonwalk: restaurantsMoonwalk,
  nightLife: nightLife,
};
