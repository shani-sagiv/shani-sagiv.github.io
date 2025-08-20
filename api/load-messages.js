const { list } = require("@vercel/blob");

module.exports = async (req, res) => {
  try {
    const { blobs } = await list({
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    // נמצא את הקובץ המדויק
    const blob = blobs.find(b => b.pathname === "messages.json");
    if (!blob) {
      return res.status(200).json([]); // אם אין קובץ, נחזיר ריק
    }

    // נמשוך מה-URL הציבורי (לא downloadUrl)
    const response = await fetch(blob.url);

    if (!response.ok) {
      throw new Error(`Fetch failed: ${response.status} ${response.statusText}`);
    }

    const messages = await response.json();
    res.status(200).json(messages);
  } catch (err) {
    console.error("Load failed:", err);
    res.status(500).json({ error: err.message || "Unknown error" });
  }
};
