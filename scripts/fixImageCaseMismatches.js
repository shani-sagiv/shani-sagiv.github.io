import fs from "fs";
import path from "path";

const ROOT = path.resolve("src/assets/data");

// מחפש כל מופע של images: XYZ.something
// מוסיף אחריו id: "something"
function processFile(filePath) {
  let code = fs.readFileSync(filePath, "utf8");
  let changed = false;

  code = code.replace(
    /images:\s*([A-Z0-9_]+)\.([A-Za-z0-9_]+)/g,
    (match, prefix, key) => {
      changed = true;
      return `id: "${key}", images: ${prefix}.${key}`;
    }
  );

  if (changed) {
    fs.writeFileSync(filePath, code, "utf8");
    console.log(`✅ Updated: ${filePath}`);
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && fullPath.endsWith(".ts")) {
      processFile(fullPath);
    }
  }
}

console.log("🔍 Adding IDs for all images usage...");
walk(ROOT);
console.log("✨ Done!");
