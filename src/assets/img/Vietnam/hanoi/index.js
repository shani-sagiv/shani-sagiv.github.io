import { importAll } from "helpers/imagesHelpers";
import profile from "./profile.jpeg";

export const gifthouse = importAll(
  require.context("./gifthouse", false, /\.(png|jpe?g|svg)$/),
);
export const general = importAll(
  require.context("./general", false, /\.(png|jpe?g|svg)$/),
);
export const Historia = importAll(
  require.context("./Historia", false, /\.(png|jpe?g|svg)$/),
);
export const unmute = importAll(
  require.context("./unmute", false, /\.(png|jpe?g|svg)$/),
);
export const Solare = importAll(
  require.context("./Solare", false, /\.(png|jpe?g|svg)$/),
);
export const cruise = importAll(
  require.context("./cruise", false, /\.(png|jpe?g|svg)$/),
);
export const NightMarket = importAll(
  require.context("./NightMarket", false, /\.(png|jpe?g|svg)$/),
);

export const HANOI_IMAGES = {
  profileImg: profile,
  gifthouse,
  unmute,
  Historia,
  general,
  Solare,
  cruise,
  NightMarket,
};
