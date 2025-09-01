// compress-images.js
import sharp from "sharp";
import { globby } from "globby";
import path from "path";
import fs from "fs";

const MAX_WIDTH = 1080;    // רוחב מקסימלי למסכים
const QUALITY = 70;        // איכות WebP
const THUMB_WIDTH = 300;   // גודל thumbnail

async function run() {
  const files = await globby([
    "src/assets/data/Vietnam/**/*.{jpg,jpeg,png}",
  ]);

  console.log(`🔍 נמצאו ${files.length} תמונות לעיבוד`);

  for (const file of files) {
    const ext = path.extname(file);
    const dir = path.dirname(file);
    const base = path.basename(file, ext);

    const outMain = path.join(dir, `${base}_compressed.webp`);
    const outThumb = path.join(dir, `${base}_thumb.webp`);

    try {
      if (!fs.existsSync(outMain)) {
        await sharp(file)
          .rotate() // ✅ מסדר את האוריינטציה
          .resize({ width: MAX_WIDTH, withoutEnlargement: true })
          .webp({ quality: QUALITY })
          .toFile(outMain);
        console.log(`✅ נוצר ראשי: ${outMain}`);
        if (fs.existsSync(outMain)) {
        fs.unlinkSync(file);
        console.log(`🗑️ נמחק המקורי: ${file}`);
        }

      }

    //   if (!fs.existsSync(outThumb)) {
    //     await sharp(file)
    //       .rotate() // ✅ גם ל-thumbs
    //       .resize({ width: THUMB_WIDTH })
    //       .webp({ quality: QUALITY })
    //       .toFile(outThumb);
    //     console.log(`✅ נוצר thumb: ${outThumb}`);
    //   }

    } catch (err) {
      console.error(`❌ בעיה בקובץ ${file}`, err);
    }
  }

  console.log("🎉 סיימנו – כל התמונות מכווצות + Thumbs!");
}

run();
