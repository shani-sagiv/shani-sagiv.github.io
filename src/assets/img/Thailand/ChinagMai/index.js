import main from "./main_compressed.jpeg";
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

export const sirikitImages = importAll(
  require.context("./sirikit-botanical", false, /\.(png|jpe?g|svg)$/),
);
export const woodCarveImages = importAll(
  require.context("./wood-carve", false, /\.(png|jpe?g|svg)$/),
);
export const stickyWaterfallImages = importAll(
  require.context("./sticky-waterfall", false, /\.(png|jpe?g|svg)$/),
);
export const shabushiImages = importAll(
  require.context("./shabushi", false, /\.(png|jpe?g|svg)$/),
);
export const gingerFarmImages = importAll(
  require.context("./ginger-farm", false, /\.(png|jpe?g|svg)$/),
);

export const arcadeImages = importAll(
  require.context("./arcade", false, /\.(png|jpe?g|svg)$/),
);

export const lannaImages = importAll(
  require.context("./lanna", false, /\.(png|jpe?g|svg)$/),
);

export const CHINAG_MAI_IMAGES = {
  profile: main,
  watTemple: watTempleImages,
  sundayMarket: sundayMarketImages,
  astra: astraImages,
  doiSutep: doiSutepImages,
  doiPui: doiPuiImages,
  cobra: cobraImages,
  insectZoo: insectZooImages,
  sirikit: sirikitImages,
  woodCarve: woodCarveImages,
  stickyWaterfall: stickyWaterfallImages,
  shabushi: shabushiImages,
  gingerFarm: gingerFarmImages,
  arcade: arcadeImages,
  lanna: lannaImages,
};
