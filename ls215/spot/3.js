/*
Write a function that takes a string and returns an array of all prime numbers present as substrings in that string.
The returned primes should be in the order of their appearance in the original string.

input: a string (w/ all different types of characters)
output: array of prime numbers as substrings

Rules:
1. If multiple numbers appear side by side in the input string, we need to get the leading substring for each of those numbers in order
example 'abc123de7910'
- numbers: '1', '12', '123', '23', '3', '7', '79', '791', '7910', '9', '91', '910', '1', '10', '0'
- prime numbers: 
  - If the number divides evenly only into 1 out of all numbers up to the number divided by 1 floored, it is PRIME
    - e.g.: 17 / 2 -> 8 -> only 1 divides evenly into 17 ∴ 17 is PRIME
2. the input can contain letters, punctuation, symbols & numbers
3. the input can contain no numbers
4. the input can be an empty string
5. the input can be an empty string of any length

---- DATA STRUCTURE ----
- remove all characters except numbers by splitting string at /\D+/ to make an ARRAY
  - may have more than 1 number group, get all numbers from the subSTRING group, then check if each number is prime,
    - every prime number will be pushed to an ARRAY

---- ALGORITHM ----
High Level:
1. Given an input string, split it into number groups w/ regex `/\D+/g`

2. For each number group, retrieve all possible numbers
  - For each number in the number group
    - check if it is a prime number (converting to a Number then passing that to HELPER isPrime())
    - IF the number is prime, push that to a prime numbers result array

3. return the prime numbers result array (numbers as strings)

Low level:
- initialize a variable `numberGroups` assigned value of splitting the string @ `/\D+/g`
- initialize a variable `result` equal to an empty array

- for each group in `numberGroups`
  - initialize a variable named `numbers` equal to the return value of `allPossibleNumbers()` invocation passing in the current number group

  - for each number in `numbers`
    - IF the number is prime (invoking `isPrime()`)
      - push the string version of the number to the `result` array

- return `result`


HELPER: allPossibleNumbers(numberSubstring) => returns array of numbers
- initialize `result` equal to an empty array
- for each number in `numberSubstring` (idx = 0)
  - initialize a value `currentResult` equal to an empty string
  - for each number at current idx position + 1 (jdx = idx + 1)
    - concat each number to `currentResult`, then convert the `currentResult` to a number pushing the value to `result`

HELPER: isPrime(number) => returns true IF prime, false IF NOT prime
- for each `currentNum` starting at 2 up to `number / 2` floored
  - IF the number divides evenly into the `currentNum`, return false
- since loop finished and condition never passed, return true (we have prime number)
*/

function primeNumberPrinter(string) {
  const numberGroups = string.split(/\D+/g);
  const result = [];
  
  for (let group of numberGroups) {
    let numbers = allPossibleNumbers(group);

    if (!numbers) continue;

    for (let number of numbers) {
      if (isPrime(number)) result.push(String(number));
    }
  }

  return result;
}


function isPrime(number) {
  if (number <= 1) return false;

  for (let currentNum = 2; currentNum <= (number / 2); currentNum += 1) {
    if (number % currentNum === 0) {
      return false;
    }
  }

  return true;
}


function allPossibleNumbers(numberSubstring) {
  if (!numberSubstring) return null;

  const result = [];

  for (let idx = 0; idx < numberSubstring.length; idx += 1) {
    let currentResult = numberSubstring[idx];

    result.push(parseInt(currentResult, 10));

    for (let jdx = idx + 1; jdx < numberSubstring.length; jdx += 1) {
      currentResult += numberSubstring[jdx];
      result.push(parseInt(currentResult, 10));
    }
  }

  return result;
}


// // number groups
console.log(primeNumberPrinter('abc123de7910')); // [ '2', '23', '3', '7', '79' ]

// // isolated numbers
console.log(primeNumberPrinter('abc1de2f3gh5ijklmno7p')); // [ '2', '3', '5', '7' ]

// // no numbers
console.log(primeNumberPrinter('abcdefghijklmnop')); // []

// // empty string
console.log(primeNumberPrinter('')); // []

// only numbers
console.log(primeNumberPrinter('1234151617'));
/* returns
[
  '2',        '23',
  '2341',     '3',
  '34151617', '41',
  '151',      '15161',
  '5',        '61',
  '617',      '17',
  '7'
]
*/

console.log(primeNumberPrinter("a4bc2k13d")); // [2, 13, 3]
console.log(primeNumberPrinter("ab11cdef23ghij4k")); // [11, 2, 23, 3]
console.log(primeNumberPrinter("2hello world3")); // [2, 3]