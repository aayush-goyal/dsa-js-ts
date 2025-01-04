/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/longest-palindrome/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2025-01-04
 * @modifier
 * @modified
 */
function longestPalindrome(s: string): number {
    const charFreq = new Map<string, number>();
    
    for (let char of s) {
        if (charFreq.get(char) != null) {
        charFreq.set(char, charFreq.get(char) + 1);
    } else {
        charFreq.set(char, 1);
        }
    }

    let totalCount = 0;
    let biggestOddFreq = 0;
    let oddCount = 0;
    for (let [char, freq] of charFreq) {
        totalCount += freq;
        if (freq % 2 !== 0) {
        oddCount++;
            if (freq > biggestOddFreq) {
                biggestOddFreq = freq;
            }
        }
    }  

    if (oddCount > 0) totalCount -= oddCount - 1;

    return totalCount;
};
