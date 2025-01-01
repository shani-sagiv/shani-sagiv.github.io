import { importAll } from "helpers/imagesHelpers";
import profile from "./profile.jpeg";

export const sunflower = importAll(
  require.context("./sunflower", false, /\.(png|jpe?g|svg)$/)
);
export const butterflyValley = importAll(
  require.context("./ButterflyValley", false, /\.(png|jpe?g|svg)$/)
);
export const SecretGarden = importAll(
  require.context("./SecretGarden", false, /\.(png|jpe?g|svg)$/)
);
export const Tungthu = importAll(
  require.context("./Tungthu", false, /\.(png|jpe?g|svg)$/)
);
export const shells = importAll(
  require.context("./shells", false, /\.(png|jpe?g|svg)$/)
);

export const Eden = importAll(
  require.context("./Eden", false, /\.(png|jpe?g|svg)$/)
);

export const general = importAll(
  require.context("./general", false, /\.(png|jpe?g|svg)$/)
);
export const hospital = importAll(
  require.context("./hospital", false, /\.(png|jpe?g|svg)$/)
);
export const cable = importAll(
  require.context("./cable", false, /\.(png|jpe?g|svg)$/)
);
export const CAT_BA_IMAGES = {
  profileImg: profile,
  sunflower,
  butterflyValley,
  SecretGarden,
  shells,
  Tungthu,
  Eden,
  general,
  hospital,
  cable,
};
