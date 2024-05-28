/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/array-wrapper/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-28
 * @modifier
 * @modified
 */
/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function (nums) {
    this.arr = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function () {
    return this.arr.reduce((total, elem) => total + elem, 0);
};

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function () {
    if (this.arr.length === 0) return '[]';

    let str = '[';
    for (elem of this.arr) {
        str += `${elem},`;
    }
    str = str.substring(0, str.length - 1) + ']';

    return str;
};
