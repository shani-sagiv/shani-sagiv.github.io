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
export const FreedomBeach = importAll(
  require.context("./FreedomBeach", false, /\.(png|jpe?g|svg)$/),
);
export const Escobar = importAll(
  require.context("./Escobar", false, /\.(png|jpe?g|svg)$/),
);
export const hutResort = importAll(
  require.context("./hutResort", false, /\.(png|jpe?g|svg)$/),
);

export const KOH_TAO_IMAGES = {
  profile: main,
  Ochai,
  general,
  secret,
  FreedomBeach,
  Escobar,
  hutResort,
};
