/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/set-matrix-zeroes/description/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-12-19
 * @modifier
 * @modified
 */
function setZeroes(matrix: number[][]): void {
    const rowsSet = new Set();
    const colsSet = new Set();

    // Step 1: Read all the zeroes and their positions.
    // Read rows.
    for (let i = 0; i < matrix.length; i++) {
        // Read columns.
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                rowsSet.add(i);
                colsSet.add(j);
            }
        }
    }

    // Step 2: Replace all rows first.
    for (let row of rowsSet) {
        for (let j = 0; j < matrix[row as number].length; j++) {
            matrix[row as number][j] = 0;
        }
    }

    // Step 3: Replace all columns.
    for (let col of colsSet) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][col as number] = 0;
        }
    }
};
