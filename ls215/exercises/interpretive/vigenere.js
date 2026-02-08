/*

'abcdefghijklmnopqrstuvwxyz'

input: string to encrypt, and a keyword string
output: encrypted string using vigenere cipher

Rules:
1. Shift value of letter = to index position in the alphabet
  - 'B' => 1
  - 'd' => 3
  - 'a'-'z' => 0-25
  - 'A'-'Z' => 0-25
2. Each letter of the `keyword` treated as a shift value
3. Only encrypt alphabetic characters
4. Preserve case of original character
5. Each character @ main string will have corresponding keyword character
6. Shift each character based on its corresponding keyword character
7. MAYBE not every character in the keyword will be used the same amount of times
8. For each character we shift it a number of times (like caesar cipher),
  and that number comes from the index position of its corresponding keyword character's index position @ alphabet
  - Assign character its corresponding keyword character
    - build out a new string for getting shift values
  - Get the caesar cypher for each character based on the shift value found
9. a keyword MUST be a single word with no spaces
  - If a keyword has characters other than alphabetical, return undefined
10. If either of the arguments are empty strings, return undefined
11. Keyword can be longer than input string

Questions:
Is it possible to input a longer keyword than the string to encrypt? YES
- Assume we'll always have valid inputs
Is it possible either of our arguments are of a different type?  How to handle?  NO
Is it possible either of our arguments are empty strings?  How to handle?  YES, return undefined
Is it possible our keyword doesn't match our input string evenly? How to handle?  YES
- wrap keyword as many times as necessary, but know it won't evenly fit input string, therefore
  some characters of the keyword will be shifting more characters in the input string than others

---- DATA STRUCTURE ----
- iterate over the STRING as-is
- build keyword STRING for each character in the main input string
  - (might not use each character)
  - (some characters may repeat more than others)
- for the result character by character, concatenate to a `result` STRING
- use ARRAY for mapping 'built' `keywordString` to its corresponding 'shift values'

---- ALGORITHM ----
1. We need to build a keyword string for each 'alphabetic' character in the main input string
  - aka We need to match each alphabetic character in the main input string to its corresponding keyword character
  - split the main string into array => map each character -> the keyword character

2. Then for each character in the new keyword string, we map each character to its corresponding 'shift values'

3. Given a shift value for each character in the main string, we can get the caesar cipher of that character
  (which will be a new character) using the return value from the `getCaesarCipher` function
  w/ character and the shiftValue passed in as arguments.
  - skipping over symbols and punctuation

4. We build out the ciphertext, by concatenating the new characters to a `result` string.

5. return the `result`

HELPER: buildKeywordString(string, keyword)
- for each character in string, using the current character's `index`
  determine which character from `keyword` it is associated w/
  - get the keyword index w/ `getKeywordIndex`, then map the current character to that keyword character

HELPER: getCipherText(string, keywordString)
- split `string` at ''
- for each alphabetic character in string,
  - get the index of the keyword assigned to `keywordIndex
    => map string character to the appropriate keyword character using the `index`
- return the resulting cipher text

HELPER: getKeywordIndex(stringIndexPosition, keyword)
- Given the main input string's character's index position
  - return the corresponding character in keyword at string char's index position
  - WHILE the index is greater than the length of the keyword
    - subtract `stringIndexPosition` by length of `keyword` to get new `keywordIndex`
  - when `keywordIndex` is NOT greater than length of keyword, return `keywordIndex`

  e.g.
  Pineapple
  meat
  - a (4), last idx in meat is 3, so if 4, wrap around back to 0
    4 - 3 => 1 - 1 => keywordIndex 0
    5 - 3 => 2 - 1 => keywordIndex 1
    6 - 3 => 3 - 1 => keywordIndex 2
    7 - 3 => 4 - 1 => keywordIndex 3
    8 - 3 => 5 - 1 => keywordIndex 4 (
      if keywordIndex > length of keyword STILL, use keywordIndex
      as a new index to calculate `keywordIndex`
    )

Low level:

*/


function vigenereEncrypt(string, keyword) {
  // ...
}


function calculateTrueShiftValue(number) {
  const wrapCount = Math.floor(number / 26);

  return number - (26 * wrapCount);
}


function calculateNewCharacterIndexPosition(currentCharacterAlphabetIndex, shiftValue) {
  let newCharacterIndexPosition = currentCharacterAlphabetIndex + shiftValue;
  if (newCharacterIndexPosition > 25) {
    wrapCount = Math.floor(newCharacterIndexPosition / 26);
    newCharacterIndexPosition = newCharacterIndexPosition - (26 * wrapCount);
  }

  return newCharacterIndexPosition;
}


function caesarEncrypt(string, shiftValue) {
  if (!string) return '';
  let lower = 'abcdefghijklmnopqrstuvwxyz';
  let upper = lower.toUpperCase();
  let result = '';

  for (let char of string) {
    let alphabet;
    if (lower.includes(char)) alphabet = lower;
    else if (upper.includes(char)) alphabet = upper;
    else {
      result += char;
      continue;
    }

    let currentCharacterAlphabetIndex = alphabet.indexOf(char);

    if (shiftValue === 0) {
      result += char;
      continue;
    }
    if (shiftValue > 25) {
      shiftValue = calculateTrueShiftValue(shiftValue);
    }
    if (shiftValue <= 25) {
      const newCharacterIndexPosition = calculateNewCharacterIndexPosition(
        currentCharacterAlphabetIndex, shiftValue
      );
      result += alphabet[newCharacterIndexPosition];
    }
  }

  return result;
}

// standard tests, keyword is one word all alphabetical, main string is a valid input
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", "meat")); // 'Bmnxmtpeqw dhz'x gh ar pbldal!'
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", "A")); // 'Pineapples don't go on pizzas!'
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", "Aa")); // 'Pineapples don't go on pizzas!'
console.log(vigenereEncrypt("Pineapples don't go on pizzas!", "cab")); // 'Riogaqrlfu dpp't hq oo riabat!'
console.log(vigenereEncrypt('It is best to have it and eat it, too.', 'cake')); // 'Kt sw decx vo rexe sx cnn ict sx, voy.'
/*
'cake' -> 2 0 10 4
I t i  s b e s  t t o h  a v e i  t a n d  e a t i  t, t o o.
2 0 10 4 2 0 10 4 2 0 10 4 2 0 10 4 2 0 10 4 2 0 10 4  2 0 10
*/

// keyword longer than the main input string
console.log(vigenereEncrypt('Dog', 'Rabbit')); // 'Uoh'

// invalid inputs
console.log(vigenereEncrypt('This string is long.', 'This string is longer.')); // undefined
console.log(vigenereEncrypt('', 'Hello world!')); // undefined
console.log(vigenereEncrypt('Hello world!', '')); // undefined