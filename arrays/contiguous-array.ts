/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/contiguous-array/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2025-06-17
 * @modifier
 * @modified
 */
function findMaxLength(nums: number[]): number {
    let prefixSum = 0;
    let maxLen = 0;
    const sumMap = new Map<number, number>();
    sumMap.set(0, -1); // Key step for subarrays starting at index 0

    for (let i = 0; i < nums.length; i++) {
        prefixSum += (nums[i] === 1 ? 1 : -1);

        if (sumMap.has(prefixSum)) {
            maxLen = Math.max(maxLen, i - sumMap.get(prefixSum)!);
        } else {
            sumMap.set(prefixSum, i);
        }
    }

    return maxLen;
};
