import main from "./main.jpeg";
import { importAll } from "../../../../helpers/imagesHelpers";

export const watTempleImages = importAll(
  require.context("./wat-temple", false, /\.(png|jpe?g|svg)$/),
);
export const sundayMarketImages = importAll(
  require.context("./sunday-market", false, /\.(png|jpe?g|svg)$/),
);
export const astraImages = importAll(
  require.context("./astra", false, /\.(png|jpe?g|svg)$/),
);
export const doiSutepImages = importAll(
  require.context("./doi-sutep", false, /\.(png|jpe?g|svg)$/),
);
export const doiPuiImages = importAll(
  require.context("./doi-pui", false, /\.(png|jpe?g|svg)$/),
);

export const cobraImages = importAll(
  require.context("./cobra", false, /\.(png|jpe?g|svg)$/),
);

export const insectZooImages = importAll(
  require.context("./insect-zoo", false, /\.(png|jpe?g|svg)$/),
);

export const CHINAG_MAI = {
  profile: main,
  watTemple: watTempleImages,
  sundayMarket: sundayMarketImages,
  astra: astraImages,
  doiSutep: doiSutepImages,
  doiPui: doiPuiImages,
  cobra: cobraImages,
  insectZoo: insectZooImages,
};
