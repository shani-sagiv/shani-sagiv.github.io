// scripts/generate-images.js
const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "../public/images");
const outputFile = path.join(__dirname, "../public/images.json");

function walk(dir, result = {}) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walk(fullPath, result);
    } else {
      const folderName = path.basename(path.dirname(fullPath));
      if (!result[folderName]) result[folderName] = [];
      result[folderName].push(
        `/images/${path.relative(baseDir, fullPath).replace(/\\/g, "/")}`
      );
    }
  }
  return result;
}

const imagesMap = walk(baseDir);
fs.writeFileSync(outputFile, JSON.stringify(imagesMap, null, 2), "utf-8");

console.log("✅ Generated:", outputFile);
