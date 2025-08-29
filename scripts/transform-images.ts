// scripts/transform-images.js
const fs = require("fs");
const path = require("path");

// הקובץ שאתה רוצה לשנות
const filePath = path.join(__dirname, "../src/assets/data/Thailand/Bangkok/Bangkok.tsx");

// טוען תוכן
let content = fs.readFileSync(filePath, "utf-8");

// regex מחפש שורות עם images: IMAGES.something
// ומחליף אותן ב-id: "something"
content = content.replace(/images:\s*IMAGES\.(\w+),?/g, (_match, key) => {
  return `id: "${key}",`;
});

// שומר חזרה על הקובץ הקיים (בלי ליצור חדש)
fs.writeFileSync(filePath, content, "utf-8");

console.log("✅ Updated file in place:", filePath);
