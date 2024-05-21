/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/rotate-array/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-22
 * @modifier
 * @modified
 */
function rotate(nums: number[], k: number): void {
    const length = nums.length;

    k = k % length;

    const pivot = length - k - 1;

    for (let i = 0; i < pivot / 2; i++) {
        let temp = nums[i];
        nums[i] = nums[pivot - i];
        nums[pivot - i] = temp;
    }

    for (let i = 0; i < (length - pivot - 1) / 2; i++) {
        let temp = nums[pivot + i + 1];
        nums[pivot + i + 1] = nums[length - i - 1];
        nums[length - i - 1] = temp;
    }

    for (let i = 0; i < nums.length / 2; i++) {
        let temp = nums[i];
        nums[i] = nums[nums.length - i - 1];
        nums[nums.length - i - 1] = temp;
    }
}
