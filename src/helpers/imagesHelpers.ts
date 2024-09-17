declare namespace __WebpackModuleApi {
  interface RequireContext {
    (id: string): any;
    keys(): string[];
  }
}

export const importAll = (
  requireContext: __WebpackModuleApi.RequireContext,
): string[] => {
  return requireContext.keys().map(requireContext);
};
