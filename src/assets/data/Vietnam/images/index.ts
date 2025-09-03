import profileImg from "../image.png";
import { importAll_NEW } from "helpers/imagesHelpers";

const requireImages = require.context(
  "./",
  true,
  /\.(png|jpe?g|svg|webp)$/
);

const IMAGES: Record<string, string[] | any> = importAll_NEW(requireImages);
IMAGES.profileImg = profileImg;

export default IMAGES;
