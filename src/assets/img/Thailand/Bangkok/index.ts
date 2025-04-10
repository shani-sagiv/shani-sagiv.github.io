import profile from "./profile_compressed.jpeg";
import { importAll } from "../../../../helpers/imagesHelpers";

export const NewSiam = importAll(
  require.context("./NewSiam", false, /\.(png|jpe?g|svg)$/),
);
export const general = importAll(
  require.context("./general", false, /\.(png|jpe?g|svg)$/),
);
export const chatuchak = importAll(
  require.context("./chatuchak", false, /\.(png|jpe?g|svg)$/),
);
export const Terminal = importAll(
  require.context("./Terminal", false, /\.(png|jpe?g|svg)$/),
);
export const Platinum = importAll(
  require.context("./Platinum", false, /\.(png|jpe?g|svg)$/),
);

export const BANGKOK_IMAGES = {
  profile,
  NewSiam,
  general,
  chatuchak,
  Terminal,
  Platinum,
};
