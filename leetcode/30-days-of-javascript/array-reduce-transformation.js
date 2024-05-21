/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/array-reduce-transformation/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-21
 * @modifier
 * @modified
 */
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    if (nums.length === 0) return init;

    let val = init;
    for (index in nums) {
        val = fn(val, nums[index]);
    }

    return val;
};
