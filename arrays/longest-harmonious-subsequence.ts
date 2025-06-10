
/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/longest-harmonious-subsequence/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2025-06-10
 * @modifier
 * @modified
 */
function findLHS(nums: number[]): number {
    let answer: number = 0;

    if (nums.length === 1) {
        return 0;
    }

    const freqCountMap: Map<number, number> = new Map();
    for (let num of nums) {
        if (freqCountMap.has(num)) {
            freqCountMap.set(num, freqCountMap.get(num)! + 1);
        } else {
            freqCountMap.set(num, 1);
        }
    }

    for (let [key, value] of freqCountMap) {
        if (freqCountMap.has(key + 1)) {
            answer = Math.max(answer, value + freqCountMap.get(key + 1)!);
        }
    }

    return answer;
};
