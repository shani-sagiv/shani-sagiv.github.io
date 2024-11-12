import { importAll } from "helpers/imagesHelpers";

export { KHO_PHA_NGAN_IMAGES } from "./KohPhaNgan";
export { KHO_LANTA_IMAGES } from "./KohLanta";
export { CHINAG_MAI_IMAGES } from "./ChinagMai";
export { BANGKOK_IMAGES } from "./Bangkok";

export const sushiImages = importAll(
  require.context("./sushi", false, /\.(png|jpe?g|svg)$/)
);
