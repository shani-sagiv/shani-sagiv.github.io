import fs from "fs";
import path from "path";
import { globby } from "globby";

async function run() {
  const files = await globby("src/assets/data/**/*.ts{,x}");

  for (const file of files) {
    let content = fs.readFileSync(file, "utf8");
    let updated = content.replace(
      /(\{\s*[^}]*?)images:\s*IMAGES\.([A-Za-z0-9_]+)/g,
      (match, before, key) => {
        if (before.includes("id:")) return match; // כבר יש id
        return `${before}id: "${key}",\n    images: IMAGES.${key}`;
      }
    );

    if (updated !== content) {
      fs.writeFileSync(file, updated, "utf8");
      console.log(`✅ Updated: ${file}`);
    }
  }
}

run();
