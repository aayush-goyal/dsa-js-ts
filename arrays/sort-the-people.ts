/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/sort-the-people/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-07-23
 * @modifier
 * @modified
 */
function sortPeople(names: string[], heights: number[]): string[] {
    const length = names.length;
    const heightsMap = new Map<number, string>();

    for (let i = 0; i < length; i++) {
        heightsMap.set(heights[i], names[i]);
    }

    const sortedMap = new Map(
        [...heightsMap.entries()].sort(
            (a: [number, string], b: [number, string]) => b[0] - a[0]
        )
    );

    return [...sortedMap.values()];
}
