function isPalindrome(number) {
  const str = number.toString();
  return str === str.split('').reverse().join('');
}

function largestPalindromeProduct() {
  let maxPalindrome = 0;
  let palindromes = [];

  for (let i = 999; i >= 100; i--) {
    for (let j = i; j >= 100; j--) {
      const product = i * j;
      if (isPalindrome(product)) {
        palindromes.push(product);
        if (product > maxPalindrome) {
          maxPalindrome = product;
        }
      }
    }
  }

  return {
    maxPalindrome: maxPalindrome,
    palindromes: palindromes,
  };
}

// Example usage
const result = largestPalindromeProduct();
console.log('Largest Palindrome:', result.maxPalindrome);
console.log('Palindromes:', result.palindromes);
