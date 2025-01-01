const fs = require("fs-extra");
const path = require("path");
const sharp = require("sharp");

const assetsDir = path.join(__dirname, "../src", "assets/img/Cyprus"); // עבודה בתיקיית src/assets
const supportedFormats = [".jpg", ".jpeg", ".png"]; // פורמטים נתמכים בלבד
const suffix = "_compressed"; // הסיומת שמתווספת לקובץ שכבר כווץ
const MIN_FILE_SIZE = 300 * 1024; // גודל מינימלי ב-Bytes (300KB)

/**
 * סורק את כל הקבצים בתיקיה ובתת-תיקיות
 * @param {string} dirPath - הנתיב לתיקיה
 * @param {Array} arrayOfFiles - מערך הקבצים שנמצאו
 * @returns {Array} - מערך קבצי התמונות
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
 * מכווץ תמונה ושומר במקום
 * @param {string} filePath - הנתיב לקובץ התמונה
 */
const compressImage = async (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  const baseName = path.basename(filePath, ext);
  const dirName = path.dirname(filePath);

  // אם הקובץ כבר דחוס או אם הוא בשם מסוים (כמו "profile"), דלג עליו
  if (
    baseName.endsWith(suffix) ||
    baseName.includes("profile") ||
    baseName.includes("main")
  ) {
    console.log(`Skipping: ${filePath} (already compressed or excluded)`);
    return;
  }

  const stats = fs.statSync(filePath);
  if (stats.size < MIN_FILE_SIZE) {
    console.log(`Skipping: ${filePath} (file size < 300KB)`);
    return;
  }

  const compressedPath = path.join(dirName, `${baseName}${suffix}${ext}`);

  if (!supportedFormats.includes(ext)) return; // התעלם מפורמטים לא נתמכים

  try {
    console.log(`Processing: ${filePath}`);
    await sharp(filePath)
      .withMetadata() // שמירה על מידע EXIF
      .toFormat(ext.replace(".", ""), { quality: 80 }) // שמירה על אותו פורמט עם איכות מופחתת
      .toFile(compressedPath);

    fs.unlinkSync(filePath); // מחיקת הקובץ המקורי
    console.log(`✔️ Compressed and renamed: ${compressedPath}`);
  } catch (err) {
    console.error(`❌ Error processing: ${filePath}`, err);
  }
};

/**
 * תהליך האופטימיזציה של התמונות
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

// הרצה
optimizeImages();
