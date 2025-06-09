/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/contains-duplicate-ii/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2025-06-09
 * @modifier
 * @modified
 */
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let set = new Set<number>();

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
        if (set.size > k) {
            set.delete(i - k);
        }
    }

    return false;
}
