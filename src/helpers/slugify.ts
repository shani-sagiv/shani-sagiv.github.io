// src/helpers/slugify.ts
export function slugify(text: string): string {
  return text
    .toString()
    .normalize("NFD") // מפרק ניקוד
    .replace(/[\u0300-\u036f]/g, "") // מסיר ניקוד
    .replace(/\s+/g, "-") // רווחים ל־-
    .replace(/[^\w\-]+/g, "") // מסיר תווים לא חוקיים
    .replace(/\-\-+/g, "-") // מחיקות כפולות
    .replace(/^-+/, "")
    .replace(/-+$/, "")
    .toLowerCase();
}
