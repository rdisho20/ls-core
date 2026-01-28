/*
input: number, output: number

-Rules
  - if result number leads w/ 0, remove 0

-A
- transforming number by iterating through all digits
rotate the whole number,
then shrink 'rotate window' by 1 digit to the right @ every itertion

Given a number, turn into string then split to array (in order to iterate & transform)
first, move index 0 digit -> end, fix index 0
second, move index 1 digit -> end, fixe index 0 & 1
third, move index 2 digit -> end, fix index 0, 1 & 2
... etc, I can build a new array by using 'reduction' to fix values


a reduced array is built

string, split, reduce (manipulating array in place) -> get max rotation
*/

'use strict';

function maxRotation(number) {
  const numberString = String(number);
  const maxRotationArray = numberString
    .split('')
    .reduce((result, digit, index, array) => {
      array[array.length] = digit;
      array.shift()
      result.push(array[index])

      return result;
    }, [])
  
  return parseInt(maxRotationArray.join(''), 10);
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845