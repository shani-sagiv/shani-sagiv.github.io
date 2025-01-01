import { importAll } from "helpers/imagesHelpers";

export const phoSoupImages = importAll(
  require.context("./pho-soup", false, /\.(png|jpe?g|svg)$/),
);

export const VIETNAM_IMAGES = {
  phoSoup: phoSoupImages,
};
