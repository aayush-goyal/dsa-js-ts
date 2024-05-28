/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/sleep/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-28
 * @modifier
 * @modified
 */
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(millis);
        }, millis);
    });
}
