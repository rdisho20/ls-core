function isPrime(number) {
  if (number === 0 || number === 1) {
    return false;
  }

  for (let num = 2; num <= (number / 2); num++) {
    if (number % num === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(1));   // false
console.log(isPrime(2));   // true
console.log(isPrime(3));   // true
console.log(isPrime(43));  // true
console.log(isPrime(55));  // false
console.log(isPrime(0));   // false