/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/filter-elements-from-array/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-21
 * @modifier
 * @modified
 */
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let filterArr = [];
    for (let i in arr) {
        i = parseInt(i);
        if (fn(arr[i], i)) {
            filterArr.push(arr[i]);
        }
    }

    return filterArr;
};
