/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/counter/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-15
 * @modifier
 * @modified
 */
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    return function () {
        return n++;
    };
};
