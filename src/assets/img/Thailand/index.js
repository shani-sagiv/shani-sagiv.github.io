import { importAll } from "helpers/imagesHelpers";

// export { KHO_PHA_NGAN_IMAGES } from "./KohPhaNgan";
// export { KHO_LANTA_IMAGES } from "./KohLanta";
export { CHINAG_MAI_IMAGES } from "./ChinagMai";
// export { BANGKOK_IMAGES } from "./Bangkok";

export const sushiImages = importAll(
  require.context("./sushi", false, /\.(png|jpe?g|svg|webp)$/)
);
export { KOH_CHANG_IMAGES } from "./KohChang";
export { PATTAYA_IMAGES } from "./Pattaya";
export { KOH_SAMUI_IMAGES } from "./KohSamui";
export { KOH_TAO_IMAGES } from "./KohTao";
export { THAILAND_IMAGES } from "./general";
