// src/helpers/notifier.ts
const TG_BOT_TOKEN = "8226897800:AAHVvdNG1dUxVwAIkKWzwOCQ4HQEt7Pyx6c";
const TG_CHAT_ID = "515029093";
// TG_BOT_TOKEN=8226897800:AAHVvdNG1dUxVwAIkKWzwOCQ4HQEt7Pyx6c
// TG_CHAT_ID=515029093

export async function notifyPhone(text: string) {
  if (!TG_BOT_TOKEN || !TG_CHAT_ID) return; // שקט אם לא הוגדר
  try {
    await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TG_CHAT_ID,
        text,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });
  } catch (e) {
    // לא מפיל את האפליקציה
    // console.warn("notifyPhone failed", e);
  }
}


