/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/join-two-arrays-by-id/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-07-15
 * @modifier
 * @modified
 */
var join = function (arr1, arr2) {
    const resultArr = [];
    const joinedArr = arr1.concat(arr2).sort((a, b) => a.id - b.id);
    const store = new Map();

    for (const item of joinedArr) {
        if (store.has(item.id)) {
            // This element exists in array 1 too. Override the content.
            store.set(item.id, { ...store.get(item.id), ...item });
            continue;
        }
        store.set(item.id, item);
    }

    for (const [keys, value] of store) {
        resultArr.push(value);
    }

    return resultArr;
};
