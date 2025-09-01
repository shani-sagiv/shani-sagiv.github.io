import main from "./main_compressed.webp";
import { importAll } from "../../../../helpers/imagesHelpers";

export const Surisa = importAll(
  require.context("./Surisa", false, /\.(png|jpe?g|svg|webp)$/),
);

export const Bhundhari = importAll(
  require.context("./Bhundhari", false, /\.(png|jpe?g|svg|webp)$/),
);
export const Nautilus = importAll(
  require.context("./Nautilus", false, /\.(png|jpe?g|svg|webp)$/),
);
export const motorcycle = importAll(
  require.context("./motorcycle", false, /\.(png|jpe?g|svg|webp)$/),
);
export const bulbul = importAll(
  require.context("./bulbul", false, /\.(png|jpe?g|svg|webp)$/),
);
export const general = importAll(
  require.context("./general", false, /\.(png|jpe?g|svg|webp)$/),
);
export const napa = importAll(
  require.context("./napa", false, /\.(png|jpe?g|svg|webp)$/),
);
export const EverGreen = importAll(
  require.context("./EverGreen", false, /\.(png|jpe?g|svg|webp)$/),
);
export const Mushon = importAll(
  require.context("./Mushon", false, /\.(png|jpe?g|svg|webp)$/),
);
export const ptk = importAll(
  require.context("./ptk", false, /\.(png|jpe?g|svg|webp)$/),
);
export const ramle = importAll(
  require.context("./ramle", false, /\.(png|jpe?g|svg|webp)$/),
);
export const vibes = importAll(
  require.context("./vibes", false, /\.(png|jpe?g|svg|webp)$/),
);
export const coral = importAll(
  require.context("./coral", false, /\.(png|jpe?g|svg|webp)$/),
);

export const buddha = importAll(
  require.context("./buddha", false, /\.(png|jpe?g|svg|webp)$/),
);
export const Capybara = importAll(
  require.context("./Capybara", false, /\.(png|jpe?g|svg|webp)$/),
);
export const love = importAll(
  require.context("./love", false, /\.(png|jpe?g|svg|webp)$/),
);
export const shabushi = importAll(
  require.context("./shabushi", false, /\.(png|jpe?g|svg|webp)$/),
);

export const Basilicom = importAll(
  require.context("./Basilicom", false, /\.(png|jpe?g|svg|webp)$/),
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
  love,
  shabushi,
  Basilicom
};
