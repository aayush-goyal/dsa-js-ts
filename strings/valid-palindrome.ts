/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/valid-palindrome/description/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-17
 * @modifier
 * @modified
 */
function isPalindrome(s: string): boolean {
    let isPalindrome = true;

    let modifString = s.replace(/[^0-9a-zA-z]/gi, '');
    modifString = modifString.toLowerCase();

    let length = modifString.length;

    for (let i = 0; i < length / 2; i++) {
        if (modifString[i] !== modifString[length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    return isPalindrome;
}
