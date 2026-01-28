/*
Given a string representing a Roman numeral, write a function to convert it to an integer.
    ​Roman Numeral Values:
    •   I: 1
    •   V: 5 *
    •   X: 10
    •   L: 50 *
    •   C: 100
    •   D: 500 *
    •   M: 1000
    ​Subtractive Rules:
    •   I can be placed before V (5) and X (10) to make 4 and 9.
    •   X can be placed before L (50) and C (100) to make 40 and 90.
    •   C can be placed before D (500) and M (1000) to make 400 and 900.

-P
input: string representation of roman numeral
output: integer (value of roman numeral)

Rules:
- In a roman numeral, there can be no more than 1 'V', 'L' and 'D' EACH
- to get value IV, IX, XL, XC, CD, or CM
  - find absolute DIFFERENCE between the two values

- Order M-D-C-L-X-V
  - a V cannot come before an X
  - an L cannot come before a C
  - a D cannot come before an M

- using regex '/M+|CM|D|CD|XC|C+|XL|L|IX|X+|IV|V|I+/g' we can check if valid roman numeral or not

-D
Array - iterate over 'matches'

-A
High Level:
1. Given a regex, we can match these groups based on our rules,
  - for each group, we can check, IF first group is less than next group, we have invalid roman numeral
  - CD XC IV
    400 > 50 = True, 90 > 4 = True (valid)
  - M CM XC IV
    1000 > 900 = T, 900 > 90 = T, 90 > 4 T (valid)
  - M IX C
    1000 > 9 = T, 9 > 100 = F (INVALID)
  - C L V M
    100 > 50 = T, 50 > 5 = T, 5 > 1000 = F (INVALID)

2. Given any individual grouping,
  - we EITHER add them to one another (IF they are the same) -> add to total,
  - we find the absolute difference (IF values are different) -> add to total,
  - we simply add to a 'total' (IF group is single character)

3. return total

Low Level:
- initialize a variable `total` = `0`

- Given a string, generate an array of matches using regex '/M+|CM|D|CD|XC|C+|XL|L|IX|X+|IV|V|I+/g'
- initialize empty array called `values`

- For each character group in the `romanNumeral` array...
  - initialize `currentValue` = invoked `calculateValue` passing in `characterGroup`
  - initialize `previousValue` = values[i - 1]
  - CHECK IF the `currentValue` constitutes a valid roman numeral against the `previousValue` invoking `isValid`
    - IF NOT, return `undefined`
  
  - then push `currentValue` to `values` array

- return the sum of all values in `values` array by invoking `sumValues`


******** HELPER calculateValues(characterGroup) **********
- We can check for length === 1 and special values (no need to do iteration)
  - return value from ROMAN_MAP
- THEN IF those conditions fail, reduce to get sum of the characterGroup values (same values)


******** HELPER isValid(currentCharacterGroup, previousCharacterGroup)
- IF currentCharacterGroup's value > previousCharacterGroup's value, Return true

HELPER sumValues(valuesArr) - maybe reduce instead
for each value in valuesArr, set `total` to zero, then return `total` + `value`


********** TODO **********
invalid roman numerals NOT returning NaN
- issue w/ index number?  pushing calulated value of previous number too late?
- it appears we never see the last index in `characterGroups` ****


*/


const ROMAN_MAP = {
  I: 1, IV: 4, V: 5, IX: 9, X: 10, XL: 40, L: 50, XC: 90,
  C: 100, CD: 400, D: 500, CM: 900, M: 1000
}

function romanToInt(s) {
  if (s.length === 1) return ROMAN_MAP[s];

  const regex = /M+|CM|D|CD|XC|C+|XL|L|IX|X+|IV|V|I+/g;
  const characterGroups = s.match(regex);
  const values = [];

  console.log(characterGroups);
  for (let idx = 0; idx < characterGroups.length; idx += 1) {
    console.log(`idx = ${idx}`)
    const currentGroup = characterGroups[idx];
    const currentValue = calculateValue(currentGroup);
    let previousValue;

    if (idx > 0) {
      previousValue = values[idx - 1];

      if (!isValid(currentValue, previousValue)) {
        console.log(`current: ${currentValue}, previous: ${previousValue}`);
        return NaN;
      }
    }

    values.push(currentValue);
  }

  return values.reduce((total, value) => total + value, 0);
}

function calculateValue(characterGroup) {
  const limitedValues = ['CM', 'CD', 'XC', 'XL', 'IX', 'IV']
  if (characterGroup.length === 1 || limitedValues.includes(characterGroup)) {
    return ROMAN_MAP[characterGroup];
  };

  return characterGroup.split('').reduce((total, char) => {
    return total + ROMAN_MAP[char];
  }, 0);
}

function isValid(currentValue, previousValue) {
  return currentValue < previousValue;
}

// console.log(romanToInt("V")); // 5, correct 
// console.log(romanToInt("III")); // 3, correct
// console.log(romanToInt("LVIII")); // 58, correct
// console.log(romanToInt("MCCVIII")); // 1208, correct
// console.log(romanToInt("MCMXCIV")); // 1994, correct
// console.log(romanToInt("IX")); // 9, correct
// console.log(romanToInt("IV")); // 4, correct
// console.log(romanToInt("CDXCIV")); // 494, correct

// invalid roman numeral
// console.log(romanToInt("MIXC")); // NaN, correct
// console.log(romanToInt("CLVM")); // NaN, correct
// console.log(romanToInt("CLVX")); // NaN, correct

