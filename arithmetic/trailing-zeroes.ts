/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/factorial-trailing-zeroes/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-15
 * @modifier
 * @modified
 */
function trailingZeroes(n: number): number {
    if (n < 5) return 0;

    let totalCount = 0;

    /**
     * Initializing the cache for faster performance.
     */
    const cache = new Map();
    cache.set(5, 1);

    /**
     * Start from 1 to n. For each num calculate the number of 5 multiples it has.
     */
    for (let num = 5; num <= n; num += 5) {
        let temp = num;
        let fiveMulCount = 0;
        while (temp >= 5) {
            if (cache.get(temp) !== undefined) {
                /**
                 * If during any division we get the value in the cache, add that to this current
                 * calculation and break from the current calculation.
                 */
                fiveMulCount += cache.get(temp);
                break;
            }
            /**
             * Only increase count if there is a proper division by 5.
             */
            if (temp % 5 == 0) {
                ++fiveMulCount;
            }
            temp /= 5;
        }

        /**
         * If the cache does not hold value for the current number, enter the value calculated inside cache.
         */
        if (cache.get(num) === undefined) cache.set(num, fiveMulCount);

        /**
         * Add the current calculation to the total count.
         */
        totalCount += fiveMulCount;
    }

    return totalCount;
}
