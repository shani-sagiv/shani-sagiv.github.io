import profile from "./profile_compressed_compressed.webp";
import { importAll } from "helpers/imagesHelpers";

export const Andre = importAll(
  require.context("./Andre", false, /\.(png|jpe?g|svg|webp)$/),
);
export const Papaioannou = importAll(
  require.context("./Papaioannou", false, /\.(png|jpe?g|svg|webp)$/),
);
export const Linos = importAll(
  require.context("./Linos", false, /\.(png|jpe?g|svg|webp)$/),
);

export const VASA_IMAGES = {
  profile,
  Andre,
  Papaioannou,
  Linos,
};
