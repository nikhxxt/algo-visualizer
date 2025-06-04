/**
 * Bubble Sort Algorithm (Step-by-step version for visualization)
 * 
 * This function sorts an array in ascending order using the bubble sort algorithm
 * and yields the array's state after each swap for animation purposes.
 *
 * @param {number[]} arr - The array to be sorted
 * @yields {number[]} - Intermediate state of the array after each swap
 */
export function* bubbleSort(arr) {
  const array = [...arr]; // Clone array to avoid in-place sorting
  const n = array.length;

  // Outer loop for each pass
  for (let i = 0; i < n - 1; i++) {
    // Inner loop to compare adjacent elements
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap elements if they are in the wrong order
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        yield [...array]; // Yield the current state for visualization
      }
    }
  }

  // Final yield to show the fully sorted array
  yield [...array];
}
