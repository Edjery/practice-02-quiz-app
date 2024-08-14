/**
 * Converts a numeric index to its corresponding uppercase letter from the English alphabet.
 * If the index is out of the range (0-25), it returns the index itself.
 * 
 * @param index - A zero-based index (integer) representing a position in the English alphabet.
 *                The index should be a non-negative integer.
 * @returns The uppercase letter corresponding to the provided index, or the index itself
 *          if the index is greater than 25.
 * 
 * @example
 * // Example usage:
 * console.log(indexToLetter(0));  // Output: "A"
 * console.log(indexToLetter(5));  // Output: "F"
 * console.log(indexToLetter(25)); // Output: "Z"
 * console.log(indexToLetter(30)); // Output: 30
 */
export default function indexToLetter(index: number): string | number {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters[index] || index;
}
