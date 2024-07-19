/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/flatten-deeply-nested-array/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-07-19
 * @modifier
 * @modified
 */
/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const resultArray = [];

    for (let item of arr) {
        if (item instanceof Array) {
            if (n > 0) {
                resultArray.push(...flat(item, n - 1));
            } else {
                resultArray.push(item);
            }
        } else {
            resultArray.push(item);
        }
    }

    return resultArray;
};
