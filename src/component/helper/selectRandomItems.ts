/**
 * Randomly selects a specified number of items from a list.
 * @param list The list to select items from.
 * @param numItems The number of items to select.
 * @returns A new list containing the selected items.
 */
export default function selectRandomItems<T>(list: T[], numItems: number): T[] {
    const shuffled = list.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numItems);
}
