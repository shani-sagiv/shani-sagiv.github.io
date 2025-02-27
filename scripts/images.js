const fs = require("fs-extra");
const path = require("path");
const sharp = require("sharp");

const assetsDir = path.join(__dirname, "../src", "assets/data/Vietnam/");
const supportedFormats = [".jpg", ".jpeg", ".png"]; // Supported formats only
const suffix = "_compressed"; // Suffix for compressed files
const MAX_FILE_SIZE = 1 * 1024 * 1024; // Maximum file size in bytes (1MB)

/**
 * Recursively scans all files in a folder and its subfolders.
 * @param {string} dirPath - Path to the folder.
 * @param {Array} arrayOfFiles - Array of found files.
 * @returns {Array} - Array of image file paths.
 */
const getAllFiles = (dirPath, arrayOfFiles = []) => {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
};

/**
 * Compresses an image and ensures its size is below the maximum limit.
 * @param {string} filePath - Path to the image file.
 */
const compressImage = async (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  const baseName = path.basename(filePath, ext);
  const dirName = path.dirname(filePath);

  // Skip already compressed or excluded files
  // if (
  //   // baseName.includes(suffix) ||
  //   baseName.includes("profile") ||
  //   baseName.includes("Profile") ||
  //   baseName.includes("main") ||
  //   baseName.includes("Main")
  // ) {
  //   console.log(`Skipping: ${filePath} (already compressed or excluded)`);
  //   return;
  // }

  if (!supportedFormats.includes(ext)) {
    console.log(`Skipping unsupported format: ${filePath}`);
    return;
  }

  let stats = fs.statSync(filePath);
  if (stats.size <= MAX_FILE_SIZE) {
    console.log(`Skipping: ${filePath} (file size <= 1MB)`);
    return;
  }

  let quality = 80; // Initial quality level
  let newSuffix = suffix;
  let compressedPath;
  compressedPath = path.join(dirName, `${baseName}${newSuffix}${ext}`);

  while (stats.size > MAX_FILE_SIZE) {
    console.log(`Compressing: ${filePath} with quality ${quality}`);

    try {
      await sharp(filePath)
        .withMetadata() // Preserve EXIF metadata
        .toFormat(ext.replace(".", ""), { quality })
        .toFile(compressedPath);

      stats = fs.statSync(compressedPath);

      if (stats.size <= MAX_FILE_SIZE) {
        fs.unlinkSync(filePath); // Delete the original file
        console.log(`✔️ Compressed and saved: ${compressedPath}`);
        break;
      } else {
        // Remove the previous compressed file and try again with lower quality
        fs.unlinkSync(compressedPath);
        quality -= 10; // Reduce quality further
        newSuffix += "_2"; // Update suffix for subsequent compression
      }

      if (quality < 10) {
        console.warn(`❌ Could not compress ${filePath} below 1MB.`);
        break;
      }
    } catch (err) {
      console.error(`❌ Error compressing: ${filePath}`, err);
      break;
    }
  }
};

/**
 * Main optimization process for images.
 */
const optimizeImages = async () => {
  console.log(`Scanning folder: ${assetsDir}`);
  const allFiles = getAllFiles(assetsDir).filter((file) =>
    supportedFormats.includes(path.extname(file).toLowerCase()),
  );

  console.log(`Found ${allFiles.length} supported files to process.`);

  for (const file of allFiles) {
    await compressImage(file);
  }

  console.log("🎉 Image optimization complete!");
};

// Run the script
optimizeImages();
