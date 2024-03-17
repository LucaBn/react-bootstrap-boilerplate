/**
 * Generates a single string value by concatenating elements in a given classList array.
 * @param {string[]} classList - The list of class names.
 * @returns {string} - The generated class name value.
 */
const generateClassNameValue = (classList: string[]): string => {
  return classList.join(" ");
};

/**
 * Converts a string into a valid lowercase class name for an HTML element.
 * Removes non-alphanumeric characters, replaces spaces with hyphens, and ensures the first character is a letter.
 *
 * @param {string} input - The input string to be transformed into a class name.
 * @returns {string} - The valid lowercase class name.
 */
const stringToValidClassName = (input: string): string => {
  // Remove non-alphanumeric characters and replace spaces with hyphens
  const cleanedString = input
    .trim()
    .replace(/[^a-zA-Z0-9 ]/g, "-")
    .replace(/\s+/g, "-");

  // Ensure the first character is a letter, otherwise add an underscore in front of it
  const firstChar = cleanedString.charAt(0);
  const validFirstChar = firstChar.match(/[a-zA-Z]/)
    ? firstChar
    : `_${firstChar}`;

  // Combine the valid first character with the rest of the cleaned string
  const result = validFirstChar + cleanedString.slice(1);

  // Convert the result to lowercase
  return result.toLowerCase();
};

export { generateClassNameValue, stringToValidClassName };
