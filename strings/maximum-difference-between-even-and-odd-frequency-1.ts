/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-i/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-06-27
 * @modifier
 * @modified
 */
function maxDifference(s: string): number {
    let freqMap: Map<string, number> = new Map();
    for (let char of s) {
        if (freqMap.has(char)) {
            freqMap.set(char, freqMap.get(char)! + 1)
        } else {
            freqMap.set(char, 1);
        }
    }

    let freq = {
        maxOdd: 1,
        minEven: Number.MAX_SAFE_INTEGER,
    }

    for (let [key, value] of freqMap) {
        if (value % 2 === 0) {
            if (value < freq.minEven) {
                freq = {...freq, minEven: value}
                continue;
            }
        } else {
            if (value > freq.maxOdd) {
                freq = {...freq, maxOdd: value};
                continue;
            }
        }
    }

    return freq.maxOdd - freq.minEven;
};
