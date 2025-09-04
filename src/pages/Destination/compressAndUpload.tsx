import React, { useState } from "react";
import imageCompression from "browser-image-compression";

const owner = "shani-sagiv";
const repo = "shani-sagiv.github.io";
const branch = "main";
const GITHUB_TOKEN = "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"

type Props = {
  countryId: string;
  destId: string;
  attractionId: string;
};

export default function MultiImageUpload({ countryId, destId, attractionId }: Props) {
  const [files, setFiles] = useState<File[]>([]);
  const [compressed, setCompressed] = useState<{ name: string; preview: string; content: string }[]>([]);
  const [confirming, setConfirming] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selected = Array.from(e.target.files);
    setFiles(selected);

    const results: { name: string; preview: string; content: string }[] = [];

    for (const file of selected) {
      const compressed = await imageCompression(file, {
        maxWidthOrHeight: 1080,
        maxSizeMB: 1,
        useWebWorker: true,
        fileType: "image/webp",
        initialQuality: 0.7,
      });

      const reader = new FileReader();
      const base64: string = await new Promise((resolve, reject) => {
        reader.readAsDataURL(compressed);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
      });

      results.push({
        name: file.name.replace(/\.[^.]+$/, ".webp"), // תמיד webp
        preview: base64,
        content: base64.split(",")[1],
      });
    }

    setCompressed(results);
    setConfirming(true);
  };

  const handleUpload = async () => {
    setUploading(true);

    const folderPath = `src/assets/data/${countryId}/${destId}/images/${attractionId}`;

    // בדיקה שהתיקייה קיימת
    const checkRes = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/contents/${folderPath}?ref=${branch}`,
      { headers: { Authorization: `token ${GITHUB_TOKEN}` } }
    );

    if (checkRes.status !== 200) {
      alert(`❌ Folder does not exist: ${folderPath}`);
      setUploading(false);
      return;
    }

    for (const file of compressed) {
      const filePath = `${folderPath}/${file.name}`;

      const res = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`,
        {
          method: "PUT",
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `add compressed image for ${attractionId}`,
            content: file.content,
            branch,
          }),
        }
      );

      if (!res.ok) {
        const error = await res.json();
        console.error("Upload failed:", error);
        alert("❌ Upload failed");
        setUploading(false);
        return;
      }
    }

    alert("✅ All images uploaded!");
    setUploading(false);
    setConfirming(false);
    setFiles([]);
    setCompressed([]);
  };

  return (
    <div>
      {!confirming && (
        <input type="file" accept="image/*" multiple onChange={handleSelect} />
      )}

      {confirming && (
        <div>
          <h3>📸 Review your images before upload</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {compressed.map((file, idx) => (
              <div key={idx}>
                <img
                  src={file.preview}
                  alt={file.name}
                  style={{ maxWidth: 200, border: "1px solid #ccc" }}
                />
                <div>{file.name}</div>
              </div>
            ))}
          </div>
          <button onClick={handleUpload} disabled={uploading}>
            {uploading ? "⏳ Uploading..." : "✅ Confirm & Upload"}
          </button>
          <button onClick={() => setConfirming(false)}>❌ Cancel</button>
        </div>
      )}
    </div>
  );
}
