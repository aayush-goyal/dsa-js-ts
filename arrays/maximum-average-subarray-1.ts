/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/maximum-average-subarray-i/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-06-13
 * @modifier
 * @modified
 */
function findMaxAverage(nums: number[], k: number): number {
    let maxAvg = 0;
    let sum = 0;

    for (let i = 0; i < k; i += 1) {
        sum += nums[i];
        maxAvg = sum / k;
    }

    let avg;
    for (let i = 1; i < nums.length - k + 1; i++) {
        sum = sum + nums[i + k - 1] - nums[i - 1];
        avg = sum / k;
        if (avg > maxAvg) {
            maxAvg = avg;
        }
    }

    return maxAvg;
}
