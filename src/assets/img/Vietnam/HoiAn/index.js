// import main from "./main.jpeg";
import { importAll } from "../../../../helpers/imagesHelpers";
import profile from "./profile.png";

export const nightWalk = importAll(
  require.context("./night-walk", false, /\.(png|jpe?g|svg)$/)
);
export const hungDo = importAll(
  require.context("./hung-do", false, /\.(png|jpe?g|svg)$/)
);
export const beach = importAll(
  require.context("./beach", false, /\.(png|jpe?g|svg)$/)
);
export const treeCoconut = importAll(
  require.context("./tree-coconut", false, /\.(png|jpe?g|svg)$/)
);
export const doubleCat = importAll(
  require.context("./double-cat", false, /\.(png|jpe?g|svg)$/)
);

export const bana = importAll(
  require.context("./bana-hills", false, /\.(png|jpe?g|svg)$/)
);

export const myson = importAll(
  require.context("./my-son", false, /\.(png|jpe?g|svg)$/)
);

// vinwonders

export const vinwonders = importAll(
  require.context("./vinwonders", false, /\.(png|jpe?g|svg)$/)
);

export const HOI_AN = {
  nightWalk: nightWalk,
  profileImg: profile,
  hungDo: hungDo,
  beach: beach,
  treeCoconut: treeCoconut,
  doubleCat: doubleCat,
  bana: bana,
  myson: myson,
  vinwonders: vinwonders,
};
