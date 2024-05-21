/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/allow-one-function-call/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-21
 * @modifier
 * @modified
 */
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let called = false;
    return function (...args) {
        if (!called) {
            called = true;
            return fn(...args);
        } else {
            return undefined;
        }
    };
};
