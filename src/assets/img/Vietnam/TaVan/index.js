import { importAll } from "helpers/imagesHelpers";
import profile from "./profile_compressed.jpeg";

export const general = importAll(
  require.context("./general", false, /\.(png|jpe?g|svg|webp)$/),
);
export const Healing = importAll(
  require.context("./Healing", false, /\.(png|jpe?g|svg|webp)$/),
);
export const LyHouse = importAll(
  require.context("./LyHouse", false, /\.(png|jpe?g|svg|webp)$/),
);
export const LoveWaterfall = importAll(
  require.context("./LoveWaterfall", false, /\.(png|jpe?g|svg|webp)$/),
);

export const TA_VAN_IMAGES = {
  profileImg: profile,
  general,
  Healing,
  LyHouse,
  LoveWaterfall,
};
