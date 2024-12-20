/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/power-of-two/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-12-20
 * @modifier
 * @modified
 */
function isPowerOfTwo(n: number): boolean {
    if (n === 0) {
        return false;
    }
    
    if (n === 1) {
        return true;
    }

    if (n % 2 !== 0) {
        return false;
    }

    while (n !== 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }

    return true;
};
