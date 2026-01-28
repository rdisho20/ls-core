/*
---- PROBLEM
input: word string
output: boolean
  - true if word can be spelled w/ set of blocks
  - false if word CANNOT be spelled w/ set of blocks

Rules:
1. input words can be spelled by any of the letters of provided blocks
  with a limit of 1 letter per block.
2. letters are case-insensitive
3. can only use each block once
4. All letters of the alphabet appear in the blocks (13 blocks, 26 letters)

e.g. 'batch' .. blocks B:O N:A G:T C:P H:U
- only one letter from each of those blocks is used (and can be used) to spell 'batch'

Questions:
How do I handle a blank string input, or different input type? NO, assume input always a word
How do I handle an input that is a string of two words? NO, assume input will be 1 word, no whitespace
What do I do if words have duplicate letters? NO, you can only use each block once
  e.g. 'Mississippi' == false (because duplicates)
  - if looping, can check each letter and get it's count of appearances in word using a reduce function

---- EXAMPLES / TEST CASES ----
console.log(isBlockWord('BATCH')); // true
console.log(isBlockWord('BUTCH')); // false
console.log(isBlockWord('jest')); // true
console.log(isBlockWord('Mississippi')); // true

---- DATA STRUCTURE ----
Using string as is -> iteration
maybe use Set OR Array to handle blocks already used

---- ALGORITHM ----
Low Level:
1. For each character in the argument `word`, We must check if it belongs to one of the blocks.
  Since we can only use each block one time, we'd return false if a letter shows up multiple times (using `getCount` to check)

  OTHERWISE since we don't have duplicate letters in the word,
    we must check to see if either of the letters in the block used has been used previously (use an array to store previous values)
    IF it has been used we need to return false
    - If we match one letter from a block, put both letters in that block into the array that stores all previously used characters

2. If we've made it out of the loop without returning a value (false), we can return true, since all testing was successful

HELPER: getCount(mainString, characterFromString)
- For each character in `mainString`
  - check if it equals characterFromString
    IF it does, increment a `count` variable
- return `count`

HELPER: getBlockLetters(characterFromString)
- Given the character, iterate through `BLOCKS` checking to see if the block includes the letter
  - IF so, return that block w/ split @ `:`

Low level:
- starting w/ a variable `seen` equal to an empty array

- For each character in the input string
  - initialize variable `count` equal to the invocation of `getCount(word, character)`
  - IF the count is greater than 1, RETURN false

  - IF character is included in `seen`, then RETURN false
  
  - Given a `character`, assign `blockLetters` variable equal to invocation of `getBlockLetters(character)`
  - push the ...spread of `blockLetters` to the `seen` array

- After checking all letters in the string
- RETURN true
*/

const BLOCKS = [
  'B:O', 'X:K', 'D:Q', 'C:P', 'N:A', 'G:T', 'R:E',
  'F:S', 'J:W', 'H:U', 'V:I', 'L:Y', 'Z:M'
]

function getCount(word, character) {
  let count = 0;
  word.split('').forEach(wordChar => {
    if (wordChar === character) count += 1;
  })

  return count;
}

function getBlockLetters(character) {
  for (let pair of BLOCKS) {
    if (pair.includes(character)) return pair.split(':');
  }
}

function isBlockWord(word) {
  const seen = [];

  for (let character of word) {
    const count = getCount(word, character);
    
    if (count > 1) return false;

    if (seen.includes(character)) return false;

    const blockLetters = getBlockLetters(character.toUpperCase());
    seen.push(...blockLetters);
  }

  return true;
}

console.log(isBlockWord('BATCH')); // true
console.log(isBlockWord('BUTCH')); // false
console.log(isBlockWord('jest')); // true
console.log(isBlockWord('Mississippi')); // false
