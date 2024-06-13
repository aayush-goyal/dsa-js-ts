/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/promise-time-limit/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-20
 * @modifier
 * @modified
 */
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
    return async function (...args) {
        return new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => {
                reject('Time Limit Exceeded');
            }, t);
            fn(...args)
                .then(resolve)
                .catch(reject)
                .finally(() => clearTimeout(timeoutId));
        });
    };
};
