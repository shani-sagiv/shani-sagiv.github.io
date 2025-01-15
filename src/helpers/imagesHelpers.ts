declare namespace __WebpackModuleApi {
  interface RequireContext {
    (id: string): any;
    keys(): string[];
  }
}

export const importAll = (
  requireContext: __WebpackModuleApi.RequireContext,
): string[] => {
  const images = requireContext.keys().map(requireContext);

  // Remove duplicate entries using Set
  return Array.from(new Set(images));
};

export const importAll_NEW = (
  requireContext: __WebpackModuleApi.RequireContext,
): Record<string, string[]> => {
  const images: Record<string, string[]> = {};
  requireContext.keys().forEach((key) => {
    const folderName = key.split("/")[1]; // Extract the folder name from the path
    if (!images[folderName]) images[folderName] = [];
    images[folderName].push(requireContext(key));
  });
  return images;
};

function getAllImages(
  country: string,
  destination: string,
  name: string,
): string[] {
  try {
    // יצירת נתיב בסיסי
    const basePath = `./assets/data/${country}/${destination}/images/${name}`;

    // שימוש ב-require.context לטעינת כל התמונות מהתיקייה
    const requireImages = require.context(
      basePath,
      false, // לא לחפש בתתי-תיקיות
      /\.(png|jpe?g|svg|webp)$/, // סינון קבצי תמונה
    );

    // מיפוי כל התמונות לנתיב המלא
    return requireImages
      .keys()
      .map((fileName) => `${basePath}/${fileName.replace("./", "")}`);
  } catch (error) {
    console.error("Error loading images:", error);
    return [];
  }
}
