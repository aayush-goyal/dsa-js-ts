/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/array-prototype-last/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-28
 * @modifier
 * @modified
 */
/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
    if (this.length === 0) return -1;

    return this.at(this.length - 1);
};
