/*
function generateFibonacci(n) {
  if (0 <= n && n < 2) {
    return 1;
  }

  return generateFibonacci(n - 1) + generateFibonacci(n - 2);
}
*/


/*
function findFibonacciIndexByLength(bigInt) {
  const fibs = [0n, 1n, 1n];

  for (let index = 3n; index <= 99999n; index += 1n) {
    fibs.push(fibs[index - 1n] + fibs[index - 2n])
    const currentFib = fibs[index];
    
    if (BigInt(String(currentFib).split('').length) === bigInt) {
      return index;
    }
  }
}*/


// LSBot solution
function findFibonacciIndexByLength(bigInt) {
  let f1 = 1n;
  let f2 = 1n;
  let index = 2n;

  while (BigInt(String(f2).length) < bigInt) {
    const next = f1 + f2;
    f1 = f2;
    f2 = next;
    index += 1n;
  }

  return index
}



console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n); // should take more than a few seconds to finish

// The last example may take a minute or so to run.

/* LS solution
function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}
*/