import profile from "./profile_compressed.jpeg";
import { importAll } from "../../../../helpers/imagesHelpers";

export const Chrysta = importAll(
  require.context("./Chrysta", false, /\.(png|jpe?g|svg|webp)$/),
);
export const Stay = importAll(
  require.context("./Stay", false, /\.(png|jpe?g|svg|webp)$/),
);
export const shells = importAll(
  require.context("./shells", false, /\.(png|jpe?g|svg|webp)$/),
);
export const general = importAll(
  require.context("./general", false, /\.(png|jpe?g|svg|webp)$/),
);
export const Castle = importAll(
  require.context("./Castle", false, /\.(png|jpe?g|svg|webp)$/),
);
export const MunicipalGarden = importAll(
  require.context("./MunicipalGarden", false, /\.(png|jpe?g|svg|webp)$/),
);

export const LIMASSOL_IMAGES = {
  profile,
  Stay,
  shells,
  general,
  Chrysta,
  Castle,
  MunicipalGarden,
};
