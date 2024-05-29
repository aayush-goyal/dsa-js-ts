/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/sort-by/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-30
 * @modifier
 * @modified
 */
/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b));
};
