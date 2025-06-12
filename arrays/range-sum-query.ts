/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/range-sum-query-immutable/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2025-06-13
 * @modifier
 * @modified
 */
class NumArray {
    nums: number[] = [];
    sumNums: number[] = [];
    constructor(nums: number[]) {
        this.nums = nums;
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
            this.sumNums[i] = sum;
        }
    }

    sumRange(left: number, right: number): number {
        if (left === 0) {
            return this.sumNums[right];
        } else if (right === 0) {
            return this.sumNums[0];
        } else {
            return this.sumNums[right] - this.sumNums[left - 1];
        }
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */