/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/merge-strings-alternately/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-21
 * @modifier
 * @modified
 */
function mergeAlternately(word1: string, word2: string): string {
    let result = '';

    if (word1.length === 0) return word2;

    if (word2.length === 0) return word1;

    let word1Tracker = 0;
    let word2Tracker = 0;
    let isFirstAdded = true;

    while (word1Tracker < word1.length && word2Tracker < word2.length) {
        if (isFirstAdded) {
            result += word1[word1Tracker++];
            isFirstAdded = false;
        } else {
            result += word2[word2Tracker++];
            isFirstAdded = true;
        }
    }

    if (word1Tracker < word1.length) {
        result += word1.substring(word1Tracker);
    }

    if (word2Tracker < word2.length) {
        result += word2.substring(word2Tracker);
    }

    return result;
}
