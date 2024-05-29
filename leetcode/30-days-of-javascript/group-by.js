/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/group-by/descriptipon/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-30
 * @modifier
 * @modified
 */
/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    let obj = {};
    for (elem of this) {
        const key = fn(elem);
        if (obj[key] == null) {
            obj[key] = [elem];
        } else {
            const arr = obj[key];
            arr.push(elem);
            obj[key] = arr;
        }
    }

    return obj;
};
