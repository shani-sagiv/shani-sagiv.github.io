// scripts/generate-images.js
const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "../public/images");

function walkPlace(placeDir) {
  const result = {};
  const files = fs.readdirSync(placeDir);

  for (const file of files) {
    const fullPath = path.join(placeDir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      const folderName = path.basename(fullPath);
      result[folderName] = [];

      const innerFiles = fs.readdirSync(fullPath);
      for (const img of innerFiles) {
        if (/\.(png|jpe?g|webp)$/i.test(img)) {
          result[folderName].push(
            `/images/${path.relative(baseDir, path.join(fullPath, img)).replace(/\\/g, "/")}`
          );
        }
      }
    }
  }

  return result;
}

// מעבר על כל היעדים (נגיד BANGKOK, KOH_PHA_NGAN)
const countries = fs.readdirSync(baseDir);
for (const country of countries) {
  const countryPath = path.join(baseDir, country);
  if (!fs.statSync(countryPath).isDirectory()) continue;

  const places = fs.readdirSync(countryPath);
  for (const place of places) {
    const placePath = path.join(countryPath, place);
    if (!fs.statSync(placePath).isDirectory()) continue;

    const data = walkPlace(placePath);
    const outputFile = path.join(placePath, `${place}.json`);

    fs.writeFileSync(outputFile, JSON.stringify(data, null, 2), "utf-8");
    console.log("✅ Generated:", outputFile);
  }
}
