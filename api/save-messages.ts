import { put } from "@vercel/blob";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  try {
    // ודא שה־body מפוענח נכון
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const { messages } = body;

    if (!messages) {
      res.status(400).json({ error: "Missing messages" });
      return;
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
