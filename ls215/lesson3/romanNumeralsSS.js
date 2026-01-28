/*
Given a string representing a Roman numeral, write a function to convert it to an integer.
    ​Roman Numeral Values:
    •   I: 1
    •   V: 5
    •   X: 10
    •   L: 50
    •   C: 100
    •   D: 500
    •   M: 1000
    ​Subtractive Rules:
    •   I can be placed before V (5) and X (10) to make 4 and 9.
    •   X can be placed before L (50) and C (100) to make 40 and 90.
    •   C can be placed before D (500) and M (1000) to make 400 and 900.
Problem:
Input: a string - represent a Roman numeral
Output: a number represent value of that Roman Numeral

Rules:
- Roman numeral values are represent by letter matches with its values
- I before V is 4
  - IF we have an I (current position) and a V after, We MUST check if there is an I before our current position 
  - IIV => 1 + 1, 2 + 1, 3 - 5 (x) XIIII
- I before X is 9
- X before L is 40
- X before C is 90
- C before D is 400
- C before M is 900
- Value of Roman numeral string is equal the total of adding values of all its characters. 
- Input is a string represent a Roman numeral
- non Roman numeral character return undefined

Test cases:
romanToInt("DCXL") => 640
romanToInt("") => undefined 
romanToInt(23) => undefined (same with special characters)
romanToInt("OO") => undefined
romanToInt("iii") => 3

IX => ['I', 'X'] =>
  'I' => 1, 'X' => 10 => '9' (10 - 1)

DCXL => [D, C, X, L] =>
  D => 500, C => 100, X => 10, L => 50
--------------------------- (-)

  DCXIIII => 612 IIX
    500 >= 100 (+) 
    100 >= 10 (+)
    10 >= 1 (+)
    1 >= 1 (+)
    1 >= 1 (+)

  DCXC => 690

III => 3
IV => 4
IX => 9

Data Structure:
- String (iterate)

Algorithm:
High Level:
1. For each character in the roman numeral string representation, we take it's number value from an object mapped w/ roman numeral keys, and number values

2. (IXCM) After every iteration, we need to check if our character is the same as the previous character, IF SO we increment a `checkCounter`.
  - IF our `checkCounter` is > 3, We have an invalid roman numeral
  - IF our `checkCounter` is > 1, We have an invalid roman numeral

3. Taking the current character's value, We add or subtract the next value to our total
  - If current character's value is >= next value, add
  - If current character's value is <= next value, subtract

4. return our total (number representation of the roman numeral)

Low level:
- if the length of our roman numeral is 1, return it's value in map (map[s])

- initialize a total = 1

- For each char (index = 0)
  - IF index === s.length - 1
    - IF s.length === 1 => return 's' value from `map`
    - IF s.length > 1 => return total

  - initialize firstLetter = s[index]
  - initialize secondLetter = s[index + 1]
  - initialize value = map[letter] (constant roman numerals key)
  - initialize checkCounter = 1

  # isSameChar(letter) - (side effects)
  - IF char is equal === next character
    - IF so, increment 'checkCounter'
    - IF our `checkCounter` is > 3 => return undefined (IXCM)    // we have an invalid roman numeral
    - IF our `checkCounter` is > 1 => return undefined (VLD)     // we have an invalid roman numeral

  - IF char !== previous character => reset `checkCounter` to 1

  # calculateNewValue(firstLetter, secondLetter)
  - IF value >= string[index + 1], add sum of value & next value to total
  - IF value <= string[index + 1], add absolute difference of value & next value to total

- return total

HELPER - isSameCharacter(firstLetter, secondLetter):
- IF char is equal === next character
  - IF so, increment 'checkCounter'
  - IF our `checkCounter` is > 3 => return undefined (IXCM)    // we have an invalid roman numeral
  - IF our `checkCounter` is > 1 => return undefined (VLD)     // we have an invalid roman numeral

HELPER - calculateNewValue(firstLetter, secondLetter):

Regex?
// console.log('IVV'.match(/(V+|L+|D+)/g))
*/

const ROMAN_MAP = {
  I: 1, IV: 4, V: 5, IX: 9, X: 10, XL: 40, L: 50, XC: 90,
  C: 100, CD: 400, D: 500, CM: 900, M: 1000
}

function calculateCurrentValue(currentValue, nextValue, total) {
  /*
  # calculateNewValue(firstLetter, secondLetter)
  - IF value >= string[index + 1], add sum of value & next value to total
  - IF value <= string[index + 1], add absolute difference of value & next value to total
  */
  if (currentValue >= nextValue) {
    return total + currentValue;
  }

  if (currentValue < nextValue) {
    return Math.abs(currentValue - nextValue);
  }
}

function romanToInt(s) {
  const LIMITED_CHARACTERS = 'VLD';

  if (s.length === 1) {
    return ROMAN_MAP[s];
  }

  let total = 0;
  let duplicateCounter = 1;

  for (let i = 0; i < s.length; i += 1) {
    if (i === s.length - 1) {
      if (s.length === 1) return ROMAN_MAP[s];
      else if (s.length > 1) {
        console.log(`final total: ${total}`);
        return total;
      }
    }

    const currentLetter = s[i];
    const nextLetter = s[i + 1];
    const currentLetterValue = ROMAN_MAP[currentLetter];
    const nextLetterValue = ROMAN_MAP[nextLetter];

    if (currentLetter === nextLetter) {
      duplicateCounter += 1;
      console.log('incremented dupeCounter');

      if (LIMITED_CHARACTERS.includes(currentLetter)) {
        if (duplicateCounter > 1) return undefined;
      } else {
        if (duplicateCounter > 3) return undefined;
      }

    } else {
      console.log('reset dupeCounter');
      duplicateCounter = 1;
    }

    total += calculateCurrentValue(currentLetterValue, nextLetterValue, total);
  }

}

// console.log(romanToInt("V")); // 5, correct
console.log(romanToInt("III")); // 3

// console.log(romanToInt("LVIII")); // 58
// console.log(romanToInt("MCCVIII")); // 1208
// console.log(romanToInt("MCMXCIV")); // 1994,

// calculate algo (needs to change?)
  /*
  # calculateNewValue(firstLetter, secondLetter)
  - IF value >= string[index + 1], add sum of value & next value to total
  - IF value <= string[index + 1], add absolute difference of value & next value to total
  */

/*
MCMXCIV
WHAT IF INDEX STARTS AT 1, AND LOOK BEHIND?
total starts @ 1000
i = 1; C
current = C, previous = M, NO
  reset dupeCounter => 1

  1000 (p) >= 500 (c), total += 500 (current) = 1500

i = 1; C
current = M, previous = C, NO
  reset dupeCounter => 1

  100 (p) < 1000 (c), total += abs(100 - 1000) (current & next) = 1900

i = 2; M
M, X, NO
  reset dupeCounter => 1

  1000 >= 10, total += 1000 => 2900

*/

// console.log(romanToInt("IX")); // 9, correct
// console.log(romanToInt("IV")); // 4, correct

