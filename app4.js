function sumEvenFibonacci(n) {
  let sum = 0;
  let a = 1,
    b = 2; // Starting values for the Fibonacci sequence
  let evenFibonacciNumbers = [];

  while (a <= n) {
    if (a % 2 === 0) {
      sum += a;
      evenFibonacciNumbers.push(a);
    }

    // Generate the next Fibonacci number
    let nextFib = a + b;
    a = b;
    b = nextFib;
  }

  return {
    sum: sum,
    evenFibonacciNumbers: evenFibonacciNumbers,
  };
}

// Example usage
const limit = 4000000;
const result = sumEvenFibonacci(limit);
console.log('Sum of even Fibonacci numbers:', result.sum); // Output: 4613732
console.log('Even Fibonacci numbers:', result.evenFibonacciNumbers);
