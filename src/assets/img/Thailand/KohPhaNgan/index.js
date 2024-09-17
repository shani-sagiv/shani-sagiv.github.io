import { importAll } from "../../../../helpers/imagesHelpers";
import sunset from "./sunset.jpeg";
import mamaRestaurant from "./mama.jpeg";
export const islandLifeImages = importAll(
  require.context("./island-life", false, /\.(png|jpe?g|svg)$/),
);
export const seaResortImages = importAll(
  require.context("./sea-resort", false, /\.(png|jpe?g|svg)$/),
);
export const monkeysImages = importAll(
  require.context("./monkeys", false, /\.(png|jpe?g|svg)$/),
);
export const pantipImages = importAll(
  require.context("./pantip", false, /\.(png|jpe?g|svg)$/),
);
export const zenImages = importAll(
  require.context("./zen", false, /\.(png|jpe?g|svg)$/),
);
export const blueramaImages = importAll(
  require.context("./bluerama", false, /\.(png|jpe?g|svg)$/),
);

export const KHO_PHA_NGAN = {
  profile: sunset,
  islandLife: islandLifeImages,
  seaResortImages: seaResortImages,
  mamaRestaurant: [mamaRestaurant],
  monkeys: monkeysImages,
  pantip: pantipImages,
  zen: zenImages,
  bluerama: blueramaImages,
};
