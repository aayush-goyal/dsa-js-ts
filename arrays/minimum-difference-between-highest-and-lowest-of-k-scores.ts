/**
 * This function is the solution to the problem mentioned @
 * https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2025-06-16
 * @modifier
 * @modified
 */
function minimumDifference(nums: number[], k: number): number {
    // Sort array
    const sortedNums = mergeSort(nums);

    // Iteration to find min diff in window
    let minDiff = 0;
    for (let i = 0; i < sortedNums.length - k + 1; i++) {
        let localMinDiff = sortedNums[i + k - 1] - sortedNums[i];
        if (i === 0) {
            minDiff = localMinDiff;
        }
        minDiff = Math.min(minDiff, localMinDiff);
    }

    return minDiff;
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

function mergeSort(unsortedArray: number[]): number[] {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  const middle = Math.floor(unsortedArray.length / 2);
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}
