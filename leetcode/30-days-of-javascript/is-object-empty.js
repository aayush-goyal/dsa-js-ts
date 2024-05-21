/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/is-object-empty/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-21
 * @modifier
 * @modified
 */
/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    return Object.entries(obj).length === 0;
};
