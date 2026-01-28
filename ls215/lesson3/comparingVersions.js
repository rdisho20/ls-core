/*
Write a function that takes any two version numbers in this format and compares them,
with the result of this comparison showing whether the first is less than, equal to, or greater than the second version:

If version1 > version2, we should return 1.
If version1 < version2, we should return -1.
If version1 === version2, we should return 0.
If either version number contains characters other than digits and the . character, we should return null.

e.g.
0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

---- PROBLEM ----
input: input string / float?
output: integer (1, -1, or 0)

Rules:
1. A version number is less than another, IF at least one number is less than the other
(between `.`) at a particular version number placement between both inputs (LOOKING LEFT TO RIGHT)
  - IN OTHER WORDS: first instance where a version number is less than it's counter part, we have a result

EXAMPLE: 1.2.2 < 1.18.1
EXAMPLE: 2.3.13 < 2.3.14
EXAMPLE: 1.12 < 2.12
EXAMPLE: 0.1 < 0.12

2. A version number is invalid if it contains any other characters besides digits or `.`
- we return a `null` value if we get this result

-QUESTIONS:
1. If we are taking two version numbers in the above format, should I assume the possibility of bad inputs
(valid version formats, incompatiable types)?  If so what bad inputs should I guard against?

2. Is the input an actual number or is it a string?

3. Do I need to account for if a version number that has 2 `.` back-to-back?

---- EXAMPLE/TESTS ----
console.log(compareVersions('1.2.2', '1.18.1'));
console.log(compareVersions('2.3.13', '2.3.14'));
console.log(compareVersions('1.12', '2.12'));
console.log(compareVersions('0.1', '0.12'));

// edge cases, version number `.` separations different
console.log(compareVersions('2', '2.8'));
console.log(compareVersions('5.1.3', '5'));

EXAMPLE:
2 & 2.8
idx = 0; idx < secondInput.length; idx += 1
2 - 2 => same
... length of arrays differ, if there is a value missing (undefined)
we can determine that this value equates to `0`, THEREFORE we can use an array for iteration purposes
where we iterate up to the length of the largest version number's array length

// invalid inputs
console.log(compareVersions('h.1', '1.12')); // null
console.log(compareVersions('$._', '1')); // null
console.log(compareVersions('.5', '2.5')); // null

---- DATA STRUCTURE ----
use Array from splitting string inputs @ `.`

---- ALGORITHM ----
High level:
1. First, check for valid inputs using a regex, IF invalid we return `null`

2. split each input version number string at `.` THEN check lengths of respective arrays
in order to determine a `loopCount`

3. iterate over the arrays up to the `loopCount` number
  - determine if one of the inputs does not have a valid element at the index (starting at SECOND LOOP)
    - whichever version number does not have a number element is Less than the other
  - check if version1's number is less than version2's number, then if so we return corresponding value -1
    - if greater than, return 1
    - if equal, return 0

Low Level:
- CHECK if inputs are valid inputs,
-   IF invoked function isValid returns false for either inputs, return null

- initialize a variable `loopCount`
- IF input1's length is LONGER than input2's, assingn the length of input1 to `loopCount`
- IF input2's length is LONGER than input1's, assign the length of input 2 to `loopCount`

- split each input at `.` character (since valid), assign values to `version1Arr` and `version2Arr`

- for each index up to the value of `loopCount` (idx = 0, idx += 1)
  - initialize values `valueV1` & `valueV2` = to `version1Arr[idx]` & `version2Arr[idx]` respectively
  - CHECK if an element is absent AS LONG AS idx > 0
  - IF valueV1 === undefined, version 2 is larger by default, return -1
  - IF valueV2 === undefined, version 1 is larger by default, return 1

  - OTHERWISE, CONTINUE to remaining code below

  - IF valueV1 < valueV2, return -1
  - IF valueV1 > valueV2, return 1

- Loop finished executing, nothing returned? That means all values were equal to one another, THEREFORE return 0 (version numbers same)



HELPER: isValid(input)
- use regex /^\d+(.\d+)?/g (must start w/ at least 1 digit, followed by 0 or 1 (. then digits[at least 1]))
- If the input doesn't return a match (null), return false
- If the input returns a match (array of at least 1), return true

*/

function onlyValidCharacters(input) {
  let matches = input.match(/^\d+(\.\d+)*$/g);

  return matches;
}

function compareVersions(version1, version2) {
  if (!onlyValidCharacters(version1) || !onlyValidCharacters(version2)) return null;

  const version1Arr = version1.split('.');
  const version2Arr = version2.split('.');
  let loopCount;

  if (version1Arr.includes('') || version2Arr.includes('')) return null;
  if (version1Arr.length < version2Arr.length) loopCount = version2Arr.length;
  else if (version1Arr.length > version2Arr.length) loopCount = version1Arr.length;
  else loopCount = version1Arr.length;

  for (let idx = 0; idx < loopCount; idx += 1) {
    const valueV1 = parseInt(version1Arr[idx]); // undefined parsed returns NaN
    const valueV2 = parseInt(version2Arr[idx]); // undefined parsed returns NaN

    if (idx > 0) {
      if (Number.isNaN(valueV1)) return -1; // NaN not equal to itself so use Number.isNaN()
      if (Number.isNaN(valueV2)) return 1;  // NaN not equal to itself so use Number.isNaN()
    }

    if (valueV1 > valueV2) return 1;
    if (valueV1 < valueV2) return -1;
  }

  return 0;
}

console.log(compareVersions('2', '2'));             // 0
console.log(compareVersions('1.2.2', '1.18.1'));    // -1
console.log(compareVersions('2.3.13', '2.3.14'));   // -1
console.log(compareVersions('3.12', '2.12'));       // 1
console.log(compareVersions('0.1', '0.12'));        // -1

// edge cases, version number `.` separations different
console.log(compareVersions('2', '2.8'));           // -1
console.log(compareVersions('5.1.3', '5'));         // 1

// greater version is longer
console.log(compareVersions('1.0', '1.0.5')); // -1

// invalid inputs
console.log(compareVersions('h.1', '1.12')); // null
console.log(compareVersions('$._', '1')); // null
console.log(compareVersions('.5', '2.5')); // null
console.log(compareVersions('1.5', '2..5')); // null
console.log(compareVersions('1.', '2.5')); // null