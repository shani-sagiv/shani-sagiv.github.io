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
