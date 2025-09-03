const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "../src/assets");
const IMG_DIR = path.join(ROOT, "img");
const DATA_DIR = path.join(ROOT, "data");

function moveCountry(country) {
  const imgCountryDir = path.join(IMG_DIR, country);
  const dataCountryDir = path.join(DATA_DIR, country);

  if (!fs.existsSync(imgCountryDir)) {
    console.log(`⚠️ Skipping ${country} (no img folder found)`);
    return;
  }

  // make sure data country dir exists
  fs.mkdirSync(dataCountryDir, { recursive: true });

  const places = fs.readdirSync(imgCountryDir);

  places.forEach((place) => {
    const srcPath = path.join(imgCountryDir, place);

    if (fs.lstatSync(srcPath).isDirectory()) {
      // target: data/<Country>/<Place>/images
      const destPath = path.join(dataCountryDir, place, "images");
      fs.mkdirSync(destPath, { recursive: true });

      const files = fs.readdirSync(srcPath);
      files.forEach((file) => {
        const from = path.join(srcPath, file);
        const to = path.join(destPath, file);

        if (!fs.existsSync(to)) {
          fs.renameSync(from, to);
          console.log(`✅ Moved ${file} → ${destPath}`);
        }
      });
    } else {
      // loose file
      const destLoose = path.join(dataCountryDir, "images");
      fs.mkdirSync(destLoose, { recursive: true });

      const to = path.join(destLoose, place);
      if (!fs.existsSync(to)) {
        fs.renameSync(srcPath, to);
        console.log(`✅ Moved loose file ${place} → ${destLoose}`);
      }
    }
  });
}

// run on all countries under img/
if (fs.existsSync(IMG_DIR)) {
  const countries = fs.readdirSync(IMG_DIR);
  countries.forEach(moveCountry);
} else {
  console.log("❌ No img folder found at all");
}

console.log("🎉 Done reorganizing images!");
