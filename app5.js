function primeFactors(number) {
  let factors = [];
  let factor = 2;

  while (number > 1) {
    if (number % factor === 0) {
      factors.push(factor);
      while (number % factor === 0) {
        number /= factor;
      }
    }
    factor++;
  }

  return {
    factors: factors,
    largestFactor: Math.max(...factors),
  };
}

// Example usage:
const number = 600851475143;
const result = primeFactors(number);
console.log('Prime Factors:', result.factors);
console.log('Largest Prime Factor:', result.largestFactor);
