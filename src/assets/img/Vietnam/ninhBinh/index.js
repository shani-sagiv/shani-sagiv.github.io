import { importAll } from "helpers/imagesHelpers";
import profile from "./profile_compressed.jpeg";

export const general = importAll(
  require.context("./general", false, /\.(png|jpe?g|svg)$/),
);
export const HoaLu = importAll(
  require.context("./HoaLu", false, /\.(png|jpe?g|svg)$/),
);
export const Cycle = importAll(
  require.context("./Cycle", false, /\.(png|jpe?g|svg)$/),
);
export const river = importAll(
  require.context("./river", false, /\.(png|jpe?g|svg)$/),
);
export const HangMua = importAll(
  require.context("./HangMua", false, /\.(png|jpe?g|svg)$/),
);

export const NINH_BINH_IMAGES = {
  profileImg: profile,
  general,
  HoaLu,
  Cycle,
  river,
  HangMua,
};
