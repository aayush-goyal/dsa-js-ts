/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/maximum-difference-between-increasing-elements/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2025-06-19
 * @modifier
 * @modified
 */
function maximumDifference(nums: number[]): number {
    let lowest = nums[0];
    let maxDiff = -1;
    for (let i = 0; i < nums.length - 1; i++) {
        lowest = Math.min(lowest, nums[i]);
        if (nums[i] !== lowest) {
            maxDiff = Math.max(maxDiff, nums[i] - lowest);
        }
    }

    return maxDiff;
};
