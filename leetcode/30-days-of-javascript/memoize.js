/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/memoize/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-21
 * @modifier
 * @modified
 */
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = {};

    return function (...args) {
        if (!cache.hasOwnProperty(args.toString())) {
            cache[args.toString()] = fn(...args);
        }

        return cache[args.toString()];
    };
}
