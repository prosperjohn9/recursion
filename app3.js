function sumAndListOfMultiles(n) {
  let sum = 0;
  let multiples = [];
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
      multiples.push(i);
    }
  }
  return {
    sum: sum,
    multiples: multiples,
  };
}

// Example usage
let result = sumAndListOfMultiles(1000);
console.log('Sum:', result.sum); // Output: 233168
console.log('Multiples:', result.multiples);
