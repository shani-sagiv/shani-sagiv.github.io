import profileImg from "./profile.jpeg";
import { importAll_NEW } from "helpers/imagesHelpers";

// Automatically import all images based on folder names
const requireImages = require.context(
  "./", // Base path
  true, // Recursively include subfolders
  /\.(png|jpe?g|svg)$/, // Match image file extensions
);

// Group images by folder
const IMAGES: Record<string, string[] | any> = importAll_NEW(requireImages);

// Explicit imports (if needed)
IMAGES.profileImg = profileImg;

export default IMAGES;
