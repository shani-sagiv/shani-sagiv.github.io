import profile from "./profile.jpeg";
import { importAll } from "../../../../helpers/imagesHelpers";

export const Andre = importAll(
  require.context("./Andre", false, /\.(png|jpe?g|svg)$/),
);
export const Papaioannou = importAll(
  require.context("./Papaioannou", false, /\.(png|jpe?g|svg)$/),
);
export const Linos = importAll(
  require.context("./Linos", false, /\.(png|jpe?g|svg)$/),
);

export const VASA_IMAGES = {
  profile,
  Andre,
  Papaioannou,
  Linos,
};
