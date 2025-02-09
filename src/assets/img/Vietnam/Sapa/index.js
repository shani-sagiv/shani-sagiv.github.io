import { importAll } from "helpers/imagesHelpers";
import profile from "./profile_compressed.jpeg";

export const general = importAll(
  require.context("./general", false, /\.(png|jpe?g|svg)$/),
);
export const Aloha = importAll(
  require.context("./Aloha", false, /\.(png|jpe?g|svg)$/),
);
export const lado = importAll(
  require.context("./lado", false, /\.(png|jpe?g|svg)$/),
);
export const Anise = importAll(
  require.context("./Anise", false, /\.(png|jpe?g|svg)$/),
);

export const serenity = importAll(
  require.context("./serenity", false, /\.(png|jpe?g|svg)$/),
);
export const huan = importAll(
  require.context("./huan", false, /\.(png|jpe?g|svg)$/),
);
export const Fansipan = importAll(
  require.context("./Fansipan", false, /\.(png|jpe?g|svg)$/),
);

export const SAPA_IMAGES = {
  profileImg: profile,
  general,
  Aloha,
  Anise,
  Fansipan,
  serenity,
  huan,
  lado,
};
