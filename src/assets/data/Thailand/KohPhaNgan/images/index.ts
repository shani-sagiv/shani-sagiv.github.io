import { importAll } from "helpers/imagesHelpers";
import sunset from "./sunset_compressed.jpeg";

export const general = importAll(
  require.context("./general", false, /\.(png|jpe?g|svg)$/),
);
const IMAGES = {
  profile: sunset,
  general,
};
 
export default IMAGES