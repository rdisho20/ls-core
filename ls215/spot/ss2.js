/*
Write a function that takes a string argument and returns a new string that contains the value of the original string
with all consecutive duplicate characters collapsed into a single character.

input: take a string arguement where each character is dupilicated after the original
output: string that is original string w/ all consecutive duplicate characters collapsed into single character

Rules:
Can receive a string w/ consecutive duplicated characters or no consecutive duplicated characters
If receive string w/ no consecutive duplicated characters, return original input string
- some chars may be consecutively duplicated, others not, OR all not consecutively duplicated
White spaces in input strings WILL NOT be duplicated
Characters will only be alphabetic or whitespace
If receive a character followed by it's case-different counterpart, treat them as unique

---- DATA STRUCTURE ----
Using STRING as-is, splicing each duplicated character w/ '_'

---- ALGORITHM ----
High leveL:
1. Split out any spaces from the string, getting an array of word(s)

2. For each word, then for each of its characters starting at `idx = 1`
  - if the current EQUALS the previous,
    - if the character has already been duped, CONTINUE
    - replace the character in the string w/ `_`
  - if the current does NOT EQUAL the previous, CONTINUE

3. Given the resulting words, for each word, split each @ '_' then join them w/ @ ''

4. Join the resulting words w/ ' '

e.g.
HHeelllloo - H_e_l_l_o_
1 - H = H? yes, duped
2 - e = H? no
3 - e = e? yes, duped
4 - l = e? no
5 - l = l? yes, duped
6 - l = l? duped already
7 - l = l? yes, duped
8 - o = l? no
9 - o = o? yes, duped

Low level:
- initialize variable `wordsSplit` splitting input string @ ' '
- initialize variable `result` = []

- for each `currentWord` in `wordsSplit`
  - initialize variable `duped` = false
  - initialize variable `newWord` = first character in `currentWord`

  - for each character in `currentWord` starting @ `idx = 1`
    - initialize variable `currentChar` = currentWord[idx]
    - initialize variable `previousChar` = currentWord[idx - 1]
    - if `currentChar` equals `previousChar`
      - if `duped` === true,
        - concat the `currentChar` to `newWord`
        - set `duped` = false
      - otherwise
        - concat `_` to `newWord`
        - then set `duped` = to `true`
    - if the `currentChar` DOES NOT equal `previousChar`
      - concat `currentChar` to `newWord`
      - set `duped` = `false`
    
    - lastly, push the `newWord` to `result` variable

- given resulting word(s) in `result`,
  - map each word to it's split version @ `_`, then returned the joined version w/ `''`

- return `result` joined w/ `' '`
*/


function crunch(string) {
  const wordsSplit = string.split(' ');
  const result = [];

  for (let currentWord of wordsSplit) {
    let duped = false;
    let newWord = currentWord[0];

    for (let idx = 1; idx < currentWord.length; idx += 1) {
      const currentChar = currentWord[idx];
      const previousChar = currentWord[idx - 1];

      if (currentChar === previousChar) {
        if (duped === true) {
          newWord += currentChar;
          duped = false;
        } else {
          newWord += '_';
          duped = true;
        }
      } else {
        newWord += currentChar;
        duped = false;
      }
    }

    result.push(newWord);
  }

  return result
    .map(word => word.split('_').join(''))
    .join(' ');
}


console.log(crunch('ddaaiillyy ddoouubbllee')); // "daily double"

// more than 2 consecutive duplication
console.log(crunch('MMiissssiissssiippppii')); // Mississippi

// no consecutive duplication
console.log(crunch('Hello')); // "Helo"
console.log(crunch('a'));  // "a"

// case-different counterpart
console.log(crunch('MmeEmMOoRrYy')); // "MmeEmMOoRrYy"

// not all consecutively duplicated
console.log(crunch('HHeelllloo World')); // "Hello World"