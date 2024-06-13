/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/valid-anagram/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-06-13
 * @modifier
 * @modified
 */
function isAnagram(s: string, t: string): boolean {
    let isAnagram = true;

    for (let i = 0; i < s.length; i++) {
        t.indexOf(s[i]) === -1
            ? (isAnagram = false)
            : (t = t.replace(s[i], ''));
    }

    if (t.length > 0) {
        isAnagram = false;
    }

    return isAnagram;
}
