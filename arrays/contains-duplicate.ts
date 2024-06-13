/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/contains-duplicate/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-06-13
 * @modifier
 * @modified
 */
function containsDuplicate(nums: number[]): boolean {
    const map = new Map<number, boolean>();

    for (let num of nums) {
        if (!map.get(num)) {
            map.set(num, true);
        } else {
            return true;
        }
    }

    return false;
}
