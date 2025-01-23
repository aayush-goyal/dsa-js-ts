/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/sort-an-array/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2025-01-24
 * @modifier
 * @modified
 */
function sortArray(nums: number[]): number[] {
    if (nums.length <= 1) {
        return nums;
    }

    const middle = Math.floor(nums.length / 2);
    const left = nums.slice(0, middle);
    const right = nums.slice(middle);

    return merge(sortArray(left), sortArray(right));
};

function merge(left: number[], right: number[]): number[] {
    let resultArray: number[] = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++;
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return resultArray
        .concat(left.slice(leftIndex))
        .concat(right.slice(rightIndex));
}
