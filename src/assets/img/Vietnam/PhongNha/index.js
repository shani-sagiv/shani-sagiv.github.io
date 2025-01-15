import { importAll } from "helpers/imagesHelpers";
import profile from "./profile.jpeg";

export const greenHomestayImages = importAll(
  require.context("./greenHomestay", false, /\.(png|jpe?g|svg)$/),
);
export const lakeSilenceImages = importAll(
  require.context("./lakeSilence", false, /\.(png|jpe?g|svg)$/),
);
export const jadeHotelImages = importAll(
  require.context("./jadeHotel", false, /\.(png|jpe?g|svg)$/),
);
export const rooftopImages = importAll(
  require.context("./rooftop", false, /\.(png|jpe?g|svg)$/),
);
export const paradiseCaveImages = importAll(
  require.context("./paradiseCave", false, /\.(png|jpe?g|svg)$/),
);

export const PHONG_NHA_IMAGES = {
  greenHomestay: greenHomestayImages,
  lakeSilence: lakeSilenceImages,
  jadeHotel: jadeHotelImages,
  rooftop: rooftopImages,
  paradiseCave: paradiseCaveImages,
  profileImg: profile,
};
