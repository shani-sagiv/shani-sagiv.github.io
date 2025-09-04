// scripts/forceCaseRefresh.js
import fs from "fs";
import path from "path";

const ROOT = path.resolve("src/assets/data");

function forceRename(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // תיגע רק בתיקיות images ותתי־התיקיות שלהן
      if (entry.name === "images") {
        for (const sub of fs.readdirSync(full, { withFileTypes: true })) {
          if (sub.isDirectory()) {
            const subFull = path.join(full, sub.name);
            const tmp = subFull + "_TMP";

            try {
              fs.renameSync(subFull, tmp);   // rename זמני
              fs.renameSync(tmp, subFull);   // החזרה לשם המקורי
              console.log(`🔄 refreshed: ${subFull}`);
            } catch (err) {
              console.error(`❌ failed on ${subFull}:`, err.message);
            }
          }
        }
      }

      // המשך לרוץ פנימה
      forceRename(full);
    }
  }
}

console.log("🔄 Forcing rename refresh only on images subfolders...");
forceRename(ROOT);
console.log("✨ Done - case cache refreshed");
