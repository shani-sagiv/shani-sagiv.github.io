// scripts/transform-images.js
const fs = require("fs");
const path = require("path");

// הקובץ שתרצה לשנות
const filePath = path.join(
  __dirname,
  "../src/assets/data/Thailand/KohPhaNgan/KohPhaNgan.tsx"
);

// מיפוי בין ה־id בקובץ לבין שם התיקייה
// ⬅️ פה תוכל לשים את כל מה שיש לך באמת ב־images
const folderMap = {
  islandLife: "island-life",
  seaResortImages: "sea-resort",
  monkeys: "monkeys",
  pantip: "pantip",
  zen: "zen",
  bluerama: "bluerama",
  catCafe: "cat-cafe",
  halfmoon: "halfmoon",
  walkingStreet: "walking-street",
  chaloklumMarket: "chaloklum-market",
  HaadRinBeachBars: "haad-rin",
  shiralea: "shiralea",
  general: "general",
  Mama: "Mama",
  PureLaguna: "PureLaguna",
  SeaEscape: "SeaEscape",
  Stona: "Stona",
};

// טוען את התוכן
let content = fs.readFileSync(filePath, "utf-8");

// regex: מחפש כל images: IMAGES.xxxx
// ומחליף אותו ב־id: "שם-התיקייה"
content = content.replace(/images:\s*IMAGES\.(\w+),?/g, (_match, key) => {
  const folder = folderMap[key] || key; // אם לא מצא במיפוי – ישאיר כמו שהיה
  return `id: "${folder}",`;
});

// שומר חזרה על הקובץ
fs.writeFileSync(filePath, content, "utf-8");

console.log("✅ Updated file in place:", filePath);
