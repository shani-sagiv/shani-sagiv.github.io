import { importAll } from "../../../../helpers/imagesHelpers";

export const mosquitosImages = importAll(
  require.context("./mosquitos", false, /\.(png|jpe?g|svg|webp)$/),
);

export const THAILAND_IMAGES = {
  mosquitos: mosquitosImages,
};
