import main from "./main_compressed.webp";
import { importAll } from "../../../../helpers/imagesHelpers";

export const Ochai = importAll(
  require.context("./Ochai", false, /\.(png|jpe?g|svg|webp)$/),
);

export const general = importAll(
  require.context("./general", false, /\.(png|jpe?g|svg|webp)$/),
);

export const secret = importAll(
  require.context("./secret", false, /\.(png|jpe?g|svg|webp)$/),
);
export const FreedomBeach = importAll(
  require.context("./FreedomBeach", false, /\.(png|jpe?g|svg|webp)$/),
);
export const Escobar = importAll(
  require.context("./Escobar", false, /\.(png|jpe?g|svg|webp)$/),
);
export const hutResort = importAll(
  require.context("./hutResort", false, /\.(png|jpe?g|svg|webp)$/),
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
