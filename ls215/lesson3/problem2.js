/*
input: given a number in a string format, check for validity w/ Luhn formula
output: boolean value, true / false

Rules:
a valid Luhn number:
- moving right to left, double value of every second digit
  - for every digit that becomes >= 10, subtract 9
  - add all digits together -> the `checksum`

- Using this formula, check the resulting `checksum`
  - If the checksum ends in a 0, the number IS a VALID Luhn number

Questions:
What do you mean by every second digit?  w/ a number 54321, is every second digit 2 and 4?
  - where to start count?
  - 8763 -> 8*2 - 9 = 7, 7, 6*2 - 9 = 3, 3; ----> 20
  - 1111 -> 1*2 = 2, 1, 1*2 = 2, 1; ----> 6
  - ANSWER: start at last index, and decrement by 2, so every other number after the last index
Should I expect bad input types? NO
Should I expect a number 0 as bad input? NO, it is technically Luhn, return true
Maximum number length? NO
For the string input, can I expect characters other than digits? YES, isolate digits

Notes:
.match(/^\d+([- ]?\d+)*$/g) regex

---- EXAMPLE / TEST CASES ----
// valid inputs
console.log(isValidLuhnNumber("2323 2005 7766 3554")); // true
console.log(isValidLuhnNumber("1111")); // false
console.log(isValidLuhnNumber("8763")); // true
console.log(isValidLuhnNumber("0")); // true
console.log(isValidLuhnNumber("2323-2005?7766_3554hello")); // true

---- DATA STRUCTURE ----
Using a number string, cleaned of non-digit characters

---- ALGORITHM ----
High Level:
1. Given a string, Prepare it for iteration (remove non digit characters, join to a string)
2. After prep, iterate over each starting from the end at index -1, decrementing by 2
  - We double every 2nd number and if over 10, subtract by 9, adding that to the previous number
  - using this result we increment our `checksum` total by this number
3. Using the checksum we must determine if it is valid Luhn number, by dividing by 10
  - IF doesn't divide evenly by 10, it is not valid
4. return true or false based on `checksum` check.

HELPER: isValidInput(numStr)
- check for matches of numStr w/ pattern `.match(/^\d+([- ]?\d+)*$/g)`
- If returns matches, return true
- otherwise, return false

HELPER: getChecksum(cleanedNumStr)
For each character, convert to number
for every odd index iterating left to right, multiply by 2
- IF greater than 10, subtract by 9, then shift to `result` array
- IF index is even, shift value to `result` array

Low Level:
- check if argument is valid number string, if NOT return false

- initialize variable `cleaned` assigned to numberStr argument split @ regex /\D+/ (nondigits)

- initialize variable `checksum` assigned to invocation of `getCheckSum`
  passing in joined `cleaned` number string

- reduce the `checksum` to the sum of all numbers in the list

- check IF `checksum` is a valid Luhn Number
  - IF can divide evenly by 10 return true
  - OTHERWISE return false

*/

function isValidInput(numStr) {
  return /^\d+([- ]?\d+)*$/g.test(numStr);
}

function getChecksum(cleanedNumStr) {
  const numbers = cleanedNumStr
    .split('')
    .map(num => parseInt(num, 10))
    .reverse();
  const result = [];

  numbers.forEach((num, idx) => {
    if (idx % 2 === 0) {
      result.unshift(num);
    } else if (idx % 2 === 1) {
      let newNum = num * 2;

      if (newNum >= 10) {
        newNum -= 9;
      }

      result.unshift(newNum);
    }
  })

  return result.reduce((total, num) => {
    return total + num;
  }, 0);
}

function isValidLuhnNumber(numStr) {
  if (!isValidInput(numStr)) return false;

  const splitNumStr = numStr.split(/\D+/).join('');
  const checksum = getChecksum(splitNumStr);

  console.log(`checksum: ${checksum}`);

  if (checksum % 10 === 0) return true;
  else return false;
}

console.log(isValidLuhnNumber("2323 2005 7766 3554")); // true
console.log(isValidLuhnNumber("2323-2005-77663554")); // true
console.log(isValidLuhnNumber("1111")); // false
console.log(isValidLuhnNumber("8763")); // true
console.log(isValidLuhnNumber("0")); // true
console.log(isValidLuhnNumber("2323-2005?7766_ 3554hello")); // false


/*
- Example:
console.log(isValidLuhnNumber("2323 2005 7766 3554")); // true
- is valid
starting left to right of 2323200577663554
**** checksum:            4343400557366514 ===> 60, true
4 -> 4
5 -> 5*2 - 9 = 1 ( is 10 or more )
5 -> 5
3 -> 3*2 = 6
6 -> 6
6 -> 6*2 - 9 = 3
7 -> 7
7 -> 7*2 - 9 = 5
5 -> 5
0 -> 0*2 = 0
0 -> 0
2 -> 2*2 = 4
3 -> 3
2 -> 2*2 = 4
3 -> 3
2 -> 2*2 = 4
*/