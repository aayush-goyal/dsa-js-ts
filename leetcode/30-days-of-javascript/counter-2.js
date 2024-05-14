/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/counter-ii/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-15
 * @modifier
 * @modified
 */
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let value = init;

    return {
        increment: () => ++value,
        decrement: function decrement() {
            return --value;
        },
        reset: function reset() {
            value = init;
            return value;
        }
    };
};
