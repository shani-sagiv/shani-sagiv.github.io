export const importAll2 = (path) => {
  // const images = requireContext.keys().map(requireContext);
  const a = require.context(`./${path}`, false, /\.(png|jpe?g|svg)$/);
  const images = a.keys().map(a);

  // Remove duplicate entries using Set
  return Array.from(new Set(images));
};
