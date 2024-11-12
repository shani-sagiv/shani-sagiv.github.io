import main from "./main.jpeg";
import { importAll } from "../../../../helpers/imagesHelpers";

export const Ochai = importAll(
  require.context("./Ochai", false, /\.(png|jpe?g|svg)$/),
);

export const general = importAll(
  require.context("./general", false, /\.(png|jpe?g|svg)$/),
);

export const secret = importAll(
  require.context("./secret", false, /\.(png|jpe?g|svg)$/),
);

export const KOH_TAO_IMAGES = {
  profile: main,
  Ochai,
  general,
  secret,
};
