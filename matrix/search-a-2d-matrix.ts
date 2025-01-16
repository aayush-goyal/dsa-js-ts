/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/search-a-2d-matrix/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2025-01-17
 * @modifier
 * @modified
 */
function searchMatrix(matrix: number[][], target: number): boolean {
    const colCount = matrix[0].length;

    for (let row of matrix) {
        if (target >= row[0] && target <= row[colCount - 1]) {
            const searchRes = binarySearch(row, target);
            if (searchRes === -1) {
                return false;
            } else {
                return true;
            }
        }
        continue;
    }

    return false;
};

function binarySearch(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length - 1;
    let middle;

    while (end >= start) {
        middle = Math.floor((start + end) / 2);
        if (target === nums[middle]) {
            return middle;
        } else if (target > nums[middle]) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }

    return -1;
}
