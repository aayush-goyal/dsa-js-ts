/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/function-composition/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-16
 * @modifier
 * @modified
 */
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
    return function (x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    };
};
