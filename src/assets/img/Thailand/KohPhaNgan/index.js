import { importAll } from "../../../../helpers/imagesHelpers";
import sunset from "./sunset.jpeg";
import mamaRestaurant from "./mama.jpeg";
export const islandLifeImages = importAll(
  require.context("./island-life", false, /\.(png|jpe?g|svg)$/)
);
export const seaResortImages = importAll(
  require.context("./sea-resort", false, /\.(png|jpe?g|svg)$/)
);
export const monkeysImages = importAll(
  require.context("./monkeys", false, /\.(png|jpe?g|svg)$/)
);
export const pantipImages = importAll(
  require.context("./pantip", false, /\.(png|jpe?g|svg)$/)
);
export const zenImages = importAll(
  require.context("./zen", false, /\.(png|jpe?g|svg)$/)
);
export const blueramaImages = importAll(
  require.context("./bluerama", false, /\.(png|jpe?g|svg)$/)
);
export const catCafeImages = importAll(
  require.context("./cat-cafe", false, /\.(png|jpe?g|svg)$/)
);
export const halfmoonImages = importAll(
  require.context("./halfmoon", false, /\.(png|jpe?g|svg)$/)
);
export const walkingStreetImages = importAll(
  require.context("./walking-street", false, /\.(png|jpe?g|svg)$/)
);
export const chaloklumMarketImages = importAll(
  require.context("./chaloklum-market", false, /\.(png|jpe?g|svg)$/)
);

export const HaadRinBeachBarsImages = importAll(
  require.context("./haad-rin", false, /\.(png|jpe?g|svg)$/)
);
export const shiralea = importAll(
  require.context("./shiralea", false, /\.(png|jpe?g|svg)$/)
);

export const general = importAll(
  require.context("./general", false, /\.(png|jpe?g|svg)$/)
);

export const KHO_PHA_NGAN_IMAGES = {
  profile: sunset,
  islandLife: islandLifeImages,
  seaResortImages: seaResortImages,
  mamaRestaurant: [mamaRestaurant],
  monkeys: monkeysImages,
  pantip: pantipImages,
  zen: zenImages,
  bluerama: blueramaImages,
  catCafe: catCafeImages,
  halfmoon: halfmoonImages,
  walkingStreet: walkingStreetImages,
  chaloklumMarket: chaloklumMarketImages,
  HaadRinBeachBars: HaadRinBeachBarsImages,
  shiralea,
  general,
};
