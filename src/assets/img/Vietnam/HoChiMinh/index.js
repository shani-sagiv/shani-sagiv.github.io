import { importAll } from "helpers/imagesHelpers";
import profile from "./profile.jpeg";

export const general = importAll(
  require.context("./general", false, /\.(png|jpe?g|svg)$/),
);
export const Huazhu = importAll(
  require.context("./Huazhu", false, /\.(png|jpe?g|svg)$/),
);

export const HO_CHI_MINH_IMAGES = {
  profileImg: profile,
  general,
  Huazhu,
};
