import profile from "./profile.jpeg";
import { importAll } from "../../../../helpers/imagesHelpers";

export const Catacombs = importAll(
  require.context("./Catacombs", false, /\.(png|jpe?g|svg|webp)$/),
);
export const MiniGolf = importAll(
  require.context("./MiniGolf", false, /\.(png|jpe?g|svg|webp)$/),
);

export const general = importAll(
  require.context("./general", false, /\.(png|jpe?g|svg|webp)$/),
);

export const PAPHOS_IMAGES = {
  profile,
  Catacombs,
  MiniGolf,
  general,
};
