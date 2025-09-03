import { importAll } from "helpers/imagesHelpers";

export const phoSoupImages = importAll(
  require.context("./pho-soup", false, /\.(png|jpe?g|svg|webp)$/)
);

export const sleeper = importAll(
  require.context("./sleeper", false, /\.(png|jpe?g|svg|webp)$/)
);
export const sim = importAll(
  require.context("./sim", false, /\.(png|jpe?g|svg|webp)$/)
);

export const VIETNAM_IMAGES = {
  phoSoup: phoSoupImages,
  sleeper: sleeper,
  sim
};
