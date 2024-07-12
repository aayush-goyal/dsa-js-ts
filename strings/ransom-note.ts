/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/ransom-note/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-07-12
 * @modifier
 * @modified
 */
function canConstruct(ransomNote: string, magazine: string): boolean {
    const ransomCharMap = getCharFreqMap(ransomNote);
    const magCharMap = getCharFreqMap(magazine);

    for (const [key, value] of ransomCharMap) {
        if (!magCharMap.has(key) || (magCharMap.get(key) as number) < value) {
            return false;
        }
    }

    return true;
}

function getCharFreqMap(str: string) {
    const charFreqMap = new Map<string, number>();

    for (let char of str) {
        if (charFreqMap.has(char)) {
            charFreqMap.set(char, (charFreqMap.get(char) as number) + 1);
        } else {
            charFreqMap.set(char, 1);
        }
    }

    return charFreqMap;
}
