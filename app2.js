function fibsRec(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  // Helper function to recursively generate Fibonacci sequence
  function fibHelper(n) {
    if (n < 2) {
      return n;
    }
    return fibHelper(n - 1) + fibHelper(n - 2);
  }

  const fibSequence = [];
  for (let i = 0; i < n; i++) {
    fibSequence.push(fibHelper(i));
  }

  return fibSequence;
}

// Example usage
console.log(fibsRec(8));
