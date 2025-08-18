import { promises as fs } from "fs";
import path from "path";
import { put } from "@vercel/blob";

const SRC_DIR = path.resolve("src/assets/data/SouthKorea"); // your current images folder

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const arr = await Promise.all(
    entries.map(async e => {
      const full = path.join(dir, e.name);
      return e.isDirectory() ? walk(full) : [full];
    })
  );
  return arr.flat();
}

async function main() {
  const files = await walk(SRC_DIR);
  for (const file of files) {
    const buf = await fs.readFile(file);
    const relPath = path.relative(SRC_DIR, file).replace(/\\/g, "/"); // keep folder structure
    const { url } = await put(relPath, buf, { access: "public" });
    console.log(`${relPath} -> ${url}`);
  }
}
main().catch(e => {
  console.error(e);
  process.exit(1);
});
