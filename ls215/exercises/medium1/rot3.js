/*
i/o
i: number
o: number

e.g. w/ 735291 => 321579
1. rotate number by one digit to left
2. next, keep first digit fixed, rotate remaining (same as step 1)
3. next, keep first 2 digits fixed, rotate remaining (same as step 1)
4. next, keep first 3 digits fixed, rotate remaining (same as step 1)
5. next, keep first 4 digits fixed, rotate remaining (same as step 1)
  - this is MAX rot, ∵ need at least 2 numbers -> rotate; only 1 left? NO rotate

-D - Number as Strings (rotateRightmostDigits)

-A
// REDO ALGORITHM & REDO FUNCTION
Given a number, convert to string
starting w/ 'count' storing a count for every time we rotate our number

WHILE we have a number we can perform rotation on
  rotate our currentNumber sliced at 'count', using currentNumber and 'count' as nDigits
  (aka) rotate first digit of the number starting at current index position
        equal to the number of times this loop has executed
  
  grab our new 'fixed' number which is length of the original string - count (if length 6 - count 6 => 0 index position basically)

  Next, concat our 'rotated' number to our 'fixed' number calling it 'currentNumber'

  We reach our MAX rotation limit when the number starting
  at our new index position has 1 digit or less
*/


'use strict';

function maxRotation(number) {
  const numberString = String(number);
  let currentNumber = numberString;
  let count = numberString.length;

  do {
    const numberToRotate = numberString.slice(numberString.length - count);
    const rotatedNumber = String(rotateRightmostDigits(Number(numberToRotate), count))
    const fixedNumber = rotatedNumber.slice(0, numberString.length - count);
    count -= 1;
    currentNumber = fixedNumber + rotatedNumber;

    console.log(`
      fixed: ${fixedNumber}, count: ${count}, number to rotate: ${numberToRotate},
      current number: ${currentNumber}
    `)
  } while (count > 1);

  return Number(currentNumber);
}

// using LS helper functions
function rotateRightmostDigits(number, n) {
  const numberString = String(number);
  const firstPart = numberString.slice(0, numberString.length - n);
  const secondPart = numberString.slice(numberString.length - n);
  const resultString = firstPart + rotateString(secondPart);

  return Number(resultString);
}

function rotateString(string) {
  return string.slice(1) + string[0];
}


console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
// console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146));      // 7321609845