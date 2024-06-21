function evenlyDivisable(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function lcm(a, b) {
  return (a * b) / evenlyDivisable(a, b);
}

function lcmRange(n) {
  let multiple = 1;
  for (let i = 2; i <= n; i++) {
    multiple = lcm(multiple, i);
  }
  return multiple;
}

// Example usage
const limit = 20;
console.log('LCM of numbers from 1 to 20:', lcmRange(limit));
