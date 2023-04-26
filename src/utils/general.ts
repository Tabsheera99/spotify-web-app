/** Capitalizes the first letter of a word */
export const capitalizeFirstLetter = (item: string) => {
  return item.charAt(0).toUpperCase() + item.slice(1);
};

/** Replaces hyphens in a string with space */
export const replaceHyphens = (item: string) => {
  return item.replaceAll("-", " ");
};
