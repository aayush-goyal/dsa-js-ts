/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/binary-search/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-21
 * @modifier
 * @modified
 */
function search(nums: number[], target: number): number {
    let pos = -1;

    let start = 0;
    let end = nums.length - 1;
    let middle: number;
    while (end > start) {
        middle = start + end / 2;
        if (target === nums[middle]) {
            return middle;
        }

        if (target > nums[middle]) {
            start = middle + 1;
        } else if (target < nums[middle]) {
            end = middle - 1;
        }
    }

    return pos;
}
