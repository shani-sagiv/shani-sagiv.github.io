// scripts/findUnusedImageFolders.js
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "../src/assets/data");

function walk(dir, callback) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "images") callback(fullPath);
      walk(fullPath, callback);
    }
  });
}

function checkImages(imagesDir) {
  const parentDir = path.dirname(imagesDir);
  const cleans = []

  // חפש קובץ Destination (השם בד"כ בלי "images")
  const destFile = fs
    .readdirSync(parentDir)
    .find((f) => f.endsWith(".ts") && !f.includes("index"));
  if (!destFile) return;

  const destPath = path.join(parentDir, destFile);
  const destCode = fs.readFileSync(destPath, "utf8");

  // מצא שימושים ב-IMAGES.key
  const usageMatches = [...destCode.matchAll(/IMAGES\.([A-Za-z0-9_]+)/g)].map(
    (m) => m[1].toLowerCase()
  );
  const usedKeys = new Set(usageMatches);

  // מצא תיקיות
  const folders = fs
    .readdirSync(imagesDir, { withFileTypes: true })
    .filter((f) => f.isDirectory())
    .map((f) => f.name.toLowerCase());

  // בדוק אילו לא בשימוש
  const unused = folders.filter((folder) => !usedKeys.has(folder));

  if (unused.length > 0) {
    console.log(`⚠️ Unused in ${imagesDir}: ${unused.join(", ")}`);
  } 
  // else {
  //   console.log(`OK in ${imagesDir}: ${unused.join(", ")}`);
  // }

}

console.log("🔍 Checking unused images by destination file...");
walk(ROOT, checkImages);
console.log("✨ Done");
