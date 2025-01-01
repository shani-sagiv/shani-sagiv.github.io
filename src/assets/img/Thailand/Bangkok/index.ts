import profile from "./profile.jpeg";
import { importAll } from "../../../../helpers/imagesHelpers";

export const NewSiam = importAll(
  require.context("./NewSiam", false, /\.(png|jpe?g|svg)$/),
);
export const general = importAll(
  require.context("./general", false, /\.(png|jpe?g|svg)$/),
);

export const BANGKOK_IMAGES = {
  profile,
  NewSiam,
  general,
};
