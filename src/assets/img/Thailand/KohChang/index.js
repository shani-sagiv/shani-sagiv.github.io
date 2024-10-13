import main from "./main.jpeg";
import { importAll } from "../../../../helpers/imagesHelpers";

export const Flora = importAll(
  require.context("./Flora", false, /\.(png|jpe?g|svg)$/),
);

export const KOH_CHANG_IMAGES = {
  profile: main,
  Flora,
  // arcade: arcadeImages,
};
