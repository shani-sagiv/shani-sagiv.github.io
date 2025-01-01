import main from "./main.jpeg";
import { importAll } from "../../../../helpers/imagesHelpers";

export const Flora = importAll(
  require.context("./Flora", false, /\.(png|jpe?g|svg)$/),
);
export const ChangBuri = importAll(
  require.context("./ChangBuri", false, /\.(png|jpe?g|svg)$/),
);
export const general = importAll(
  require.context("./general", false, /\.(png|jpe?g|svg)$/),
);

export const KOH_CHANG_IMAGES = {
  profile: main,
  Flora,
  ChangBuri,
  general,
};
