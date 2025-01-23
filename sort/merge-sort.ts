/**
 * This function is the solution for a basic ascending insertion sort.
 * Read more here: https://www.geeksforgeeks.org/merge-sort/
 *
 * @version 1.0.0
 * @author Aayush Goyal
 * @created 2024-01-24
 * @modifier
 * @modified
 */
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
