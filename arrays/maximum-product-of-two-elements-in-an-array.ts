/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-01-08
 * @modifier
 * @modified
 */
function maxProduct(nums: number[]): number {
    let highest = 0;
    let highestInd;
    let highestNum = 0;
    let secHighestNum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > highest) {
            highest = nums[i];
            highestInd = i;
        }
    }

    highestNum = highest;
    highest = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i === highestInd) {
            continue;
        }
        if (nums[i] > highest) {
            highest = nums[i];
        }
    }
    secHighestNum = highest;

    return (highestNum - 1) * (secHighestNum - 1);
};
