import { importAll } from "helpers/imagesHelpers";
import profile from "./profile_compressed.jpeg";

export const chillBar = importAll(
  require.context("./chillBar", false, /\.(png|jpe?g|svg)$/),
);
export const shells = importAll(
  require.context("./shells", false, /\.(png|jpe?g|svg)$/),
);
export const cruise = importAll(
  require.context("./cruise", false, /\.(png|jpe?g|svg)$/),
);

export const baitam = importAll(
  require.context("./baitam", false, /\.(png|jpe?g|svg)$/),
);

export const general = importAll(
  require.context("./general", false, /\.(png|jpe?g|svg)$/),
);

export const HA_LONG_IMAGES = {
  profileImg: profile,
  chillBar,
  shells,
  cruise,
  baitam,
  general,
};
