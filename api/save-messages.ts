// api/save-messages.ts
import { put } from "@vercel/blob";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");
  const { messages } = req.body;

  const { url } = await put("messages.json", JSON.stringify(messages, null, 2), {
    access: "public",
    contentType: "application/json",
    token: process.env.BLOB_READ_WRITE_TOKEN,
    allowOverwrite: true,
  });

  res.status(200).json({ url });
}
