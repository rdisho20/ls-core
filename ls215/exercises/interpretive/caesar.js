// Caesar Cipher
// Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

// The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left as is. The substituted letters are in the same letter case as the original letter. If the key value for shifting exceeds the length of the alphabet, it wraps around from the beginning.

/*
P:
- Input: a letter and a position
 - the letter is substituted with another letter in the alphabet on the given position
 - Output: the substituated letter or string

Rules and requirements:
 - We will always be given exactly two arguments a letter and a number
 - only encrypt letters, keep other character as-is
 - letters are 0-based index 
 - If the letter is in upper, replace it with an uppercase letter
 - If the letter is in lowercase, replace it with an lowercase letter
 - the function is case-sensitive
 - if the string is empty, treat it like other non- alphabetic characters
- if the position is smaller than the given string and the string contains multiple words, replace each letter with a letter in the given position 
- the shift value is key and can be used to decipher the text

- If 'shiftValue' is greater than 25 (length of alphabet - 1 ; 0 based indexing), THEN subtract 25 from `shiftValue` to get `newCharacterIndexPosition` in alphabet
- If `shiftValue` is less than 25, check it against `currentCharacterAlphabetIndex`, 
  - and IF it is less than the position of `currentCharacterAlphabetIndex` (we have a wrap), add it to 25, then subtract 25 to get `newCharacterIndexPosition`
  - OTHERWISE (`shiftValue` is less than `currentCharacterIndex`) just add `shiftValue` to `currentCharacterIndex` assigned to `newLetterIndexPosition`

caesarEncrypt('a', 47);      // "v"

a    v - w - x - y - z

let alphabet = 'abcdefghijklmnopqrstuvwxyz'

Data structure:
- n/a

---- Algorithm: 
High Level:
1. Get a lower case alphabet & from that create an uppercase alphabet

2. For every character in the input string, check if either alphabets (upper || lower) contain the letter, then use the alphabet which contains the letter.
  - have an empty string called `result`
  - Using the shift value, We check if it is greater than the current character's index in the corresponding alphabet string, and if it is, we subtract 25 from that value to get the new character index position in corresponding alphabet, then using that character, concatenate it to our `result` string
  - If the shift value is less than 25, I check if that value is less than the position of the current character in the corresponding alphabet
    IF it is less, add 25 then subtract 25 from that value to get new character index position in corresponding alphabet, then concatenate that character to `result`
  - If the shift value is less than the current character's position in the corresponding alpahbet, add the shift value to the current character index in the alphabet, get the new character position using that value, concatenated to `result`

3. return resulting string

Low Level:
- if our input string is empty, return ""

- initialize a variable `lower` and assign it the value 'abcdefghijklmnopqrstuvwxyz'
- initialize a variable `upper` and assign it value `lower.toUpperCase()`
- initialize a variable `result` = to empty string

- For every character in the input string
  - initialize a variable `alphabet`
  - IF the `currentCharacter` is included in `lower`, set `alphabet` = `lower`
  - IF the `currentCharacter` is included in `upper`, set `alphabet` = `upper`
  - ELSE concat `currentCharacter` to `result`, CONTINUE

  - IF `shiftValue` > 25
    - initialize `currentCharacterAlphabetIndex` = to the index position of current char in `alphabet`
    - Subtract 25 from `shiftvalue` assigned to variable `newCharacterIndexPosition`
    - Concat `alphabet[newCharacterIndexPosition]` to `result`
  
  - ELSE IF `shiftValue` < 25, check it against `currentCharacterAlphabetIndex`, 
    - IF `currentCharacterAlphabetIndex` > `shiftValue`
      - add 25 to `shiftValue` then subtract 25 assigned to `newCharacterIndexPosition`
      - Concat `alphabet[newCharacterIndexPosition]` to `result`

  - OTHERWISE (`shiftValue` > `currentCharacterIndex`) just add `shiftValue` to `currentCharacterIndex` assigned to `newLetterIndexPosition`
    - Concat `alphabet[newCharacterIndexPosition]` to `result`

- RETURN `result`
*/

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

// empty
console.log(caesarEncrypt('', 1));       // ""

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"

/*
Z -> 25, +25 -> 50 - 26 -> 24
A -> 0, +25 -> 25 -> 25

If `characterIndexPosition` greater than or equal to `shiftValue`, we have a `newCharacterIndexPosition` value
- If `newCharacterIndexPosition` value is greater than 25, (we are out of bounds and have to account for 'wrapping')
  - we need to calculate `warpCount` => `newCharacterIndexPosition` / 26
  - subtract `newCharacterIndexPosition` value by (26 * wrapCount) set => `newCharacterIndexPosition`
  - concat `newCharacterIndexPosition`

If `shiftValue` is greater than 25, we will always have a wrap
- find the `wrapCount`, then we can find the actual shift value
*/

console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

// multiple wraps
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 70));