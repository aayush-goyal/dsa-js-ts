/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/interval-cancellation/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-28
 * @modifier
 * @modified
 */
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
    fn(args);
    const interval = setInterval(() => fn(args), t);
    const cancelFn = () => clearInterval(interval);
    return cancelFn;
};
