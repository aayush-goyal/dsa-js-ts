/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/to-be-or-not-to-be/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-15
 * @modifier
 * @modified
 */
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    const toBeFunc = (anotherVal) => {
        if (val !== anotherVal) throw new Error('Not Equal');

        return true;
    };

    const notToBeFunc = (anotherVal) => {
        if (val === anotherVal) throw new Error('Equal');

        return true;
    };

    return {
        toBe: toBeFunc,
        notToBe: notToBeFunc
    };
};
