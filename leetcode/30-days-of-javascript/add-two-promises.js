/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/add-two-promises/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-21
 * @modifier
 * @modified
 */
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    const r1 = await promise1;
    const r2 = await promise2;

    return r1 + r2;
};
