/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/longest-consecutive-sequence/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-06-19
 * @modifier
 * @modified
 */
function longestConsecutive(nums: number[]): number {
    const numSet = new Set<number>(nums);

    let longestStreak = 0;

    for (let num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentLow = num;
            let currentStreak = 1;

            while (numSet.has(currentLow + 1)) {
                currentLow += 1;
                currentStreak += 1;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
};
