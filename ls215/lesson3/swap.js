/*
input: string
output: string (alphabetic characters taken place of numeric characters & vice versa)

Rules:
character codes -> a: 1, b: 2, c: 3 ...ETC
if there are more alphabetic characters than numbers, or vice versa, 
  remaining characters should not be swapped
other types of characters may be present, & add them as-is
the string may contain uppercase letters
string must preserve case
  If a letter is to replace a number and that letter is capital, replace number w/ capital letter

Questions:
Will there be characters to account for beyond 'd'? YES
What do I do if input arguement is not string? expect only a string input
What do I do if input argument is empty string?  return ""
Will there be repeating letter or number values? NO

---- DATA STRUCTURE ----
store pairs in a 2 dimensional ARRAY
- e.g. see `a/A` / `1`? => [['a/A', '2']]
then for each character if it is in the 2d array, replace it w/ it's corrsponding value

---- ALGORITHM ----
start w/ `alphabet` = '_abcdefghijklmnopqrstuvwxyz'
High level:
1. Given an input string
  - get the count of alphabetic characters
  - get the count of numeric characters

3b. for each character in the argument string
  - if it is alphabetic & corresponding index is less than or equal to `maxSwapPair`
    - check if it is UPPER or LOWER case`
      - then replace the current character with it's stringified index
  - if it is numeric and it is less than or equal to `maxSwapPair`
    - check if the argument string includes its LOWER or UPPER
      - LOWER? replace the current character w/ it's corresponding alphabetic character
      - UPPER? replace the current character w/ it's corresponding alphabetic character
  - if neither of above conditions pass, DO NOTHING

4. return the new string

Low level:
- start w/ `lower` = '_abcdefghijklmnopqrstuvwxyz'
- start w/ `upper` = lower.toUpperCase()
- start w/ `resultString` = inputString
- initialize a value `alphaCount` equal to the length of matches :: input string -> regex /[a-zA-z]/g
- initialize a value `numericCount` equal to length of matches :: input string -> regex /[\d]g/
- initialize `maxSwapPair` = getMaxSwapPair(alphaCount, numericCount)

- for each character in arguement string starting w/ `idx = 0`
  - initialize value `currentChar` = inputString[idx]
  - if character is alphabetic (/[a-zA-Z]/.text(char)) 
    - initialize value `alphaIndex` = to currentCharacter's position @ `lower` or `upper`
    - the check if `alphaIndex` <= maxSwapPair
      - IF so, then replace current character w/ it's stringified `alphaIndex` (using stringCopy.replace())
  - if it is numeric (/[\d]/.text(char))
    - if `inputString.includes(lower[currentChar])` replace current character w/ lower[currentChar]
    - if `inputString.includes(upper[currentChar])` replace current character w/ upper[currentChar]

- finally, return `resultString`


HELPER getMaxSwapPair(alphaCount, numericCount)
- if alphaCount > numericCount => numericCount
- if alphaCount < numericCount => alphaCount
- otherwise => numericCount
*/

const LOWER = '_abcdefghijklmnopqrstuvwxyz';
const UPPER = LOWER.toUpperCase();

function swap(str) {
  if (!str) return "";

  let resultString = str.split('');
  const alphaCount = str.match(/[a-zA-z]/g) ? str.match(/[a-zA-z]/g).length : 0;
  const numericCount = str.match(/[\d]/g) ? str.match(/[\d]/g).length : 0;
  const maxSwapPair = getMaxSwapPair(alphaCount, numericCount);

  for (let idx = 0; idx < str.length; idx += 1) {
    const currentChar = str[idx];
    
    if (/[a-zA-Z]/.test(currentChar)) {
      let alphaIndex;

      if (LOWER.includes(currentChar)) alphaIndex = LOWER.indexOf(currentChar);
      else alphaIndex = UPPER.indexOf(currentChar);

      if (alphaIndex <= maxSwapPair) {
        resultString.splice(idx, 1, String(alphaIndex));
      }

    } else if (/\d/.test(currentChar)) {
      const numIndex = parseInt(currentChar, 10);

      if (numIndex <= maxSwapPair) {
        if (str.includes(LOWER[numIndex])) {
          resultString.splice(idx, 1, LOWER[numIndex]);
        } else {
          resultString.splice(idx, 1, UPPER[numIndex]);
        }
      }
    }
  }

  return resultString.join('');
}

function getMaxSwapPair(alphaCount, numericCount) {
  if (alphaCount > numericCount) return numericCount;
  if (alphaCount < numericCount) return alphaCount;
  return alphaCount;
}


console.log(swap("1a2b3c") === "a1b2c3"); // true
console.log(swap("abcd123") === "123dabc"); // true

// empty string
console.log(swap("") === ""); // true

// different number of alphabetic characters to numeric
console.log(swap("12a") === "a21"); // true
console.log(swap("ab1") === "1ba"); // true
console.log(swap("abcd") === "abcd"); // true
console.log(swap("1") === "1"); // true

// other symbols
console.log(swap("123-4a#b$") === "ab3-41#2$"); // true

// uppercase letters
console.log(swap("ab1CD23") === "12a3DbC"); // true


/* LS Solution
USING AN ADDITIONAL RULE: swap pairs occur in order of appearence
e.g.
// swap("b1a2")
// my result: "2a1b"
// intended:  "1b2a"

const isLetter = char => /[a-z]/i.test(char);
const isDigit = char => /\d/i.test(char);

function swap(str) {
  if (str.length === 0) return str;

  const chars = str.split("");
  const letters = chars.filter(isLetter);
  const nums = chars.filter(isDigit);

  if (letters.length === 0 || nums.length === 0) return str;

  const swapped = chars.map(char => {
    if (isLetter(char) && nums.length > 0) return nums.shift();
    else if (isDigit(char) && letters.length > 0) return letters.shift();

    return char;
  });

  return swapped.join("");
}

*/



