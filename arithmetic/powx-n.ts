/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/powx-n/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-12-24
 * @modifier
 * @modified
 */
var myPow = function (x: number, n: number): number {
    if (x === 1 || n === 0) {
        return 1;
    }

    if (x === 0) {
        return 0;
    }

    let result = x;
    let isNegativePow = n < 0;
    n = Math.abs(n);

    if (n % 2 === 0) {
        result = myPow(x, n / 2) ** 2;
    } else {
        result = x * myPow(x, n - 1);
    }

    if (isNegativePow) {
        return 1 / result;
    } else {
        return result;
    }
};
