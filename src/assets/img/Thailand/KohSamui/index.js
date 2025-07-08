import main from "./main.jpeg";
import { importAll } from "../../../../helpers/imagesHelpers";

export const Surisa = importAll(
  require.context("./Surisa", false, /\.(png|jpe?g|svg)$/),
);

export const Bhundhari = importAll(
  require.context("./Bhundhari", false, /\.(png|jpe?g|svg)$/),
);
export const Nautilus = importAll(
  require.context("./Nautilus", false, /\.(png|jpe?g|svg)$/),
);
export const motorcycle = importAll(
  require.context("./motorcycle", false, /\.(png|jpe?g|svg)$/),
);
export const bulbul = importAll(
  require.context("./bulbul", false, /\.(png|jpe?g|svg)$/),
);
export const general = importAll(
  require.context("./general", false, /\.(png|jpe?g|svg)$/),
);
export const napa = importAll(
  require.context("./napa", false, /\.(png|jpe?g|svg)$/),
);
export const EverGreen = importAll(
  require.context("./EverGreen", false, /\.(png|jpe?g|svg)$/),
);
export const Mushon = importAll(
  require.context("./Mushon", false, /\.(png|jpe?g|svg)$/),
);
export const ptk = importAll(
  require.context("./ptk", false, /\.(png|jpe?g|svg)$/),
);
export const ramle = importAll(
  require.context("./ramle", false, /\.(png|jpe?g|svg)$/),
);
export const vibes = importAll(
  require.context("./vibes", false, /\.(png|jpe?g|svg)$/),
);
export const coral = importAll(
  require.context("./coral", false, /\.(png|jpe?g|svg)$/),
);

export const buddha = importAll(
  require.context("./buddha", false, /\.(png|jpe?g|svg)$/),
);
export const Capybara = importAll(
  require.context("./Capybara", false, /\.(png|jpe?g|svg)$/),
);
export const love = importAll(
  require.context("./love", false, /\.(png|jpe?g|svg)$/),
);

export const KOH_SAMUI_IMAGES = {
  profile: main,
  Surisa,
  Bhundhari,
  Nautilus,
  motorcycle,
  general,
  bulbul,
  napa,
  EverGreen,
  Mushon,
  ptk,
  ramle,
  vibes,
  coral,
  buddha,
  Capybara,
  love
};
