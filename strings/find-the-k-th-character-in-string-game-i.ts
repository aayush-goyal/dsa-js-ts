/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/find-the-k-th-character-in-string-game-i/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-12-20
 * @modifier
 * @modified
 */
function kthCharacter(k: number): string {
    let str = 'a';

    for (let i = 0; i < 10; i++) {
        const newStr = str.split('')
            .map((char) => {
                if (char === 'z') {
                    return 'a';
                } else {
                    return String.fromCharCode(char.charCodeAt(0) + 1);
                }
            })
            .join('');
        str += newStr;
    }

    return str[k - 1];
};
