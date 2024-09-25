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

export const importAll2 = (
  context: any,
  path: string,
  // requireContext: __WebpackModuleApi.RequireContext,
): string[] => {
  const requireContext = importAll(context(path, false, /\.(png|jpe?g|svg)$/));
  // @ts-ignore
  const images = requireContext.keys().map(requireContext);

  // Remove duplicate entries using Set
  return Array.from(new Set(images));
};
