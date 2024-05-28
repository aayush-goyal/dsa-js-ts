/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/chunk-array/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-28
 * @modifier
 * @modified
 */
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    if (arr.length === 0) return arr;

    let tempChunk = 0;
    let result = [];
    let chunkArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (++tempChunk === size || i === arr.length - 1) {
            chunkArr.push(arr[i]);
            result.push(chunkArr);
            chunkArr = [];
            tempChunk = 0;
        } else {
            chunkArr.push(arr[i]);
        }
    }

    return result;
};
