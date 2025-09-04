import fs from "fs";
import path from "path";

const DATA_ROOT = path.resolve("src/assets/data");

function safeRename(oldPath, newPath) {
  if (oldPath === newPath) return;
  if (!fs.existsSync(oldPath)) return;

  try {
    fs.renameSync(oldPath, newPath);
  } catch {
    // במקרה של Windows EPERM → טריק של rename זמני
    const tmpPath = oldPath + "__TMP__" + Date.now();
    fs.renameSync(oldPath, tmpPath);
    fs.renameSync(tmpPath, newPath);
  }
  console.log(`renamed: ${oldPath} -> ${newPath}`);
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name.toLowerCase() === "images" && entry.name !== "images") {
        const newPath = path.join(dir, "images");
        safeRename(fullPath, newPath);
        walkDir(newPath);
      } else {
        walkDir(fullPath);
      }
    }
  }
}

// --- RUN ---
walkDir(DATA_ROOT);

console.log("✅ Done! All 'Images' folders normalized to 'images'.");
