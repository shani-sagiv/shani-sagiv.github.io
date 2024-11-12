import { importAll } from "../../../../helpers/imagesHelpers";

export const mosquitosImages = importAll(
  require.context("./mosquitos", false, /\.(png|jpe?g|svg)$/),
);

export const THAILAND_IMAGES = {
  mosquitos: mosquitosImages,
};
