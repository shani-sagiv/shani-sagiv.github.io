import main from "./main.jpeg";
import { importAll } from "../../../../helpers/imagesHelpers";

export const general = importAll(
  require.context("./general", false, /\.(png|jpe?g|svg)$/),
);

export const KOH_CHANG_IMAGES = {
  profile: main,
  general,
};
