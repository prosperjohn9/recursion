function mergesort(array) {
  if (array.length <= 1) {
    return array;
  }

  // Helper function to merge two sorted arrays
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++; // move left array cursor
      } else {
        result.push(right[rightIndex]);
        rightIndex++; // move right array cursor
      }
    }

    // Concatenate remaining elements (if any)
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  // Divide the array into two halves
  const middleIndex = Math.floor(array.length / 2);
  const leftArray = array.slice(0, middleIndex);
  const rightArray = array.slice(middleIndex);

  // Recursively sort both halves and merge them
  return merge(mergesort(leftArray), mergesort(rightArray));
}

// Example usage
console.log(mergesort([3, 2, 1, 13, 8, 5, 0, 1])); // [0, 1, 1, 2, 3, 5, 8, 13]
console.log(mergesort([105, 79, 100, 110])); // Output: [79, 100, 105, 110]
