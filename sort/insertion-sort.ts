/**
 * This function is the solution for a basic ascending insertion sort.
 * Read more here: https://www.geeksforgeeks.org/insertion-sort/
 *
 * @version 0.1.0
 * @author Aayush Goyal
 * @created 2024-05-18
 * @modifier
 * @modified
 */
function insertionSort(arr: Array<number>): Array<number> {
    for (let index = 1; index < arr.length; index++) {
        for (let subIndex = index - 1; subIndex >= 0; subIndex--) {
            let currentNum = arr[subIndex + 1];
            if (arr[subIndex] > currentNum) {
                let temp = arr[subIndex];
                arr[subIndex] = currentNum;
                arr[subIndex + 1] = temp;
            } else break;
        }
    }

    return arr;
}
