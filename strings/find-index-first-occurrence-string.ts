/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-21
 * @modifier
 * @modified
 */
function strStr(haystack: string, needle: string): number {
    let result = -1;

    if (haystack.includes(needle)) {
        return haystack.indexOf(needle);
    }

    return result;
}
