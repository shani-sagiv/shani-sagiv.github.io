import { put } from "@vercel/blob";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    let { messages } = body;

    // אם אין messages → נתחיל ריק
    if (!Array.isArray(messages)) {
      messages = [];
    }

    const { url } = await put("messages.json", JSON.stringify(messages, null, 2), {
      access: "public",
      contentType: "application/json",
      token: process.env.BLOB_READ_WRITE_TOKEN,
      allowOverwrite: true,
    });

    res.status(200).json({ url });
  } catch (err: any) {
    console.error("Save failed:", err);
    res.status(500).json({ error: err.message || "Unknown error" });
  }
}
