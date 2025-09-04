import imageCompression from "browser-image-compression";

export async function compressAndUpload(
  file: File,
  countryId: string,
  destId: string,
  attractionId: string
) {
  // שלב 1 – כיווץ
  const compressed = await imageCompression(file, {
    maxWidthOrHeight: 1080,
    maxSizeMB: 1,
    useWebWorker: true,
    fileType: "image/webp",
    initialQuality: 0.7,
  });

  // שלב 2 – המרה ל־Base64
  const toBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve((reader.result as string).split(",")[1]);
      reader.onerror = reject;
    });

  const content = await toBase64(compressed);

  // שלב 3 – נתוני ריפו
  const owner = "shani-sagiv";
  const repo = "shani-sagiv.github.io";
  const branch = "main";
  const REACT_APP_GITHUB_TOKEN = "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"

  const folderPath = `src/assets/data/${countryId}/${destId}/images/${attractionId}`;
  const filePath = `${folderPath}/${compressed.name}`;

  // שלב 4 – בדוק שהתיקייה קיימת
  const checkRes = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${folderPath}?ref=${branch}`,
    {
      headers: {
        Authorization: `token ${REACT_APP_GITHUB_TOKEN}`,
      },
    }
  );

  if (checkRes.status !== 200) {
    console.warn(`❌ Folder does not exist: ${folderPath}`);
    throw new Error("Folder does not exist – not uploading");
  }

  // שלב 5 – העלאה לקובץ
  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`,
    {
      method: "PUT",
      headers: {
        Authorization: `token ${REACT_APP_GITHUB_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: `add compressed image for ${attractionId}`,
        content,
        branch,
      }),
    }
  );

  if (!res.ok) {
    const error = await res.json();
    console.error("Upload failed:", error);
    throw new Error("Upload failed");
  }

  return await res.json();
}
