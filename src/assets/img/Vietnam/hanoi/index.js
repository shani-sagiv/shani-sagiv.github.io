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

export const HANOI_IMAGES = {
  profileImg: profile,
  gifthouse,
  unmute,
  Historia,
  general,
};
