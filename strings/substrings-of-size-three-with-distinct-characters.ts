/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-06-12
 * @modifier
 * @modified
 */
function countGoodSubstrings(s: string): number {
    let count: number = 0;

    let substring;
    for (let i = 0; i < s.length - 2; i += 1) {
        substring = s.substring(i, i + 3);
        if (isGoodString(substring)) {
            count += 1;
        }
    }

    return count;
}

function isGoodString(s: string): boolean {
    return s[0] !== s[1] && s[1] !== s[2] && s[0] !== s[2];
}
