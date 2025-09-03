import main from "./main_compressed.webp";
import { importAll } from "helpers/imagesHelpers";

export const general = importAll(
  require.context("./general", false, /\.(png|jpe?g|svg|webp)$/),
);

export const Bayview = importAll(
  require.context("./Bayview", false, /\.(png|jpe?g|svg|webp)$/),
);

export const NongNooch = importAll(
  require.context("./NongNooch", false, /\.(png|jpe?g|svg|webp)$/),
);

export const PATTAYA_IMAGES = {
  profile: main,
  general,
  Bayview,
  NongNooch,
};
