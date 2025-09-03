import { importAll } from "helpers/imagesHelpers";
import profile from "./profile_compressed_compressed.webp";

export const general = importAll(
  require.context("./general", false, /\.(png|jpe?g|svg|webp)$/),
);
export const Aloha = importAll(
  require.context("./Aloha", false, /\.(png|jpe?g|svg|webp)$/),
);
export const lado = importAll(
  require.context("./lado", false, /\.(png|jpe?g|svg|webp)$/),
);
export const Anise = importAll(
  require.context("./Anise", false, /\.(png|jpe?g|svg|webp)$/),
);

export const serenity = importAll(
  require.context("./serenity", false, /\.(png|jpe?g|svg|webp)$/),
);
export const huan = importAll(
  require.context("./huan", false, /\.(png|jpe?g|svg|webp)$/),
);
export const Fansipan = importAll(
  require.context("./Fansipan", false, /\.(png|jpe?g|svg|webp)$/),
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
