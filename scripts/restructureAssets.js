const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "../src/assets/data");

function listDir(dir, prefix = "") {
  const items = fs.readdirSync(dir);
  items.forEach((item, idx) => {
    const fullPath = path.join(dir, item);
    const isDir = fs.lstatSync(fullPath).isDirectory();
    const connector = idx === items.length - 1 ? "└── " : "├── ";

    if (isDir) {
      if (item === "images") {
        // count files inside images folder
        const count = fs.readdirSync(fullPath).length;
        console.log(`${prefix}${connector}${item} (${count} files)`);
      } else {
        console.log(prefix + connector + item);
        const newPrefix = prefix + (idx === items.length - 1 ? "    " : "│   ");
        listDir(fullPath, newPrefix);
      }
    } else {
      // print only .ts or .tsx files
      if (item.endsWith(".ts") || item.endsWith(".tsx")) {
        console.log(prefix + connector + item);
      }
    }
  });
}

console.log("📂 assets/data");
listDir(ROOT);
