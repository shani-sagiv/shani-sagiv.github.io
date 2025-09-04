// scripts/findDestinationImageMismatches.js
import fs from "fs";
import path from "path";

const ROOT = path.resolve("src/assets/data");

function walk(dir, callback) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "images") callback(dir, fullPath);
      walk(fullPath, callback);
    }
  });
}

function checkDestinationImages(destDir, imagesDir) {
  // מצא קובץ Destination (ts/tsx יחיד, לא index.ts)
  const destFile = fs
    .readdirSync(destDir)
    .find((f) => f.endsWith(".ts") && !f.includes("index"));
  if (!destFile) return;

  const destPath = path.join(destDir, destFile);
  const destCode = fs.readFileSync(destPath, "utf8");

  // כל השימושים בקובץ: IMAGES.xxx
  const usedKeys = [...destCode.matchAll(/IMAGES\.([A-Za-z0-9_]+)/g)].map(
    (m) => m[1]
  );

  // תיקיות בפועל
  const folders = fs
    .readdirSync(imagesDir, { withFileTypes: true })
    .filter((f) => f.isDirectory())
    .map((f) => f.name);

  const lowerUsed = usedKeys.map((k) => k.toLowerCase());
  const lowerFolders = folders.map((f) => f.toLowerCase());

  // חוסר
  for (const key of usedKeys) {
    if (!lowerFolders.includes(key.toLowerCase())) {
      console.log(`❌ Missing folder for key "${key}" in ${imagesDir}`);
    }
  }

  // לא בשימוש
  for (const folder of folders) {
    if (!lowerUsed.includes(folder.toLowerCase())) {
      console.log(`⚠️ Unused folder "${folder}" in ${imagesDir}`);
    }
  }
}

console.log("🔍 Checking destinations vs. images folders...");
walk(ROOT, checkDestinationImages);
console.log("✨ Done");
