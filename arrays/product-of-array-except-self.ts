/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/product-of-array-except-self/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-12-18
 * @modifier
 * @modified
 */
function productExceptSelf(nums: number[]): number[] {
    const prefixMult = [nums[0]];
    const suffixMult = new Array(nums.length);
    const answer = [];
    suffixMult[nums.length - 1] = nums[nums.length - 1];

    // Calculate prefix array in O(n).
    for (let i = 1; i < nums.length; i++) {
        let multiplyValue = prefixMult[i - 1] * nums[i];
        prefixMult.push(multiplyValue);
    }

    // Calculate suffix array in O(n).
    for (let i = nums.length - 2; i > -1; i--) {
        let multiplyValue = nums[i] * suffixMult[i + 1];
        suffixMult[i] = multiplyValue;
    }
    
    // Create final answer array in O(n).
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            answer.push(suffixMult[i + 1]);
        } else if (i === nums.length - 1) {
            answer.push(prefixMult[i - 1]);
        } else {
            answer.push(prefixMult[i - 1] * suffixMult[i + 1]);
        }
    }

    return answer;
};
