/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-16
 * @modifier
 * @modified
 */
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = fn(arr[i], i);
    }

    return arr;
};
