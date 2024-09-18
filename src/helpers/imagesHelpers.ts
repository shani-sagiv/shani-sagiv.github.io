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
