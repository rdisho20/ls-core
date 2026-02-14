/*
Write a function that takes a string and returns a new string where: The first letter of each "word" is capitalized.

Definitions:
- A “word” is any maximal sequence of letters a-z or A-Z.

Rules:
- You must not:
  - Use split(' ') or any splitting based only on spaces.
  - Use regular expressions. <---- FORGOT NOT TO USE REGEX

- Non-letter characters (digits, punctuation, spaces, newlines, etc.) must be preserved exactly as in the original string.
- Letters that are not the first letter of a word must be lowercase.

Questions:
Is it possible the string input contains no words, and if so, how do I handle that?
  Yes, the string input may contain no words (e.g., " 123!!!").
    In that case, just return a new string identical to the input (no changes).

Is it possible the string input is empty, and if so, how do I handle that?
  Yes, the string input may be empty ("").
    In that case, return "".

---- DATA STRUCTURE ----
Given an input string, match all words with /[a-zA-Z]+/g to get word ARRAY
Split input string at the words using /[a-zA-Z]+/ to get non-word character groups ARRAY

---- ALGORITHM ----
High level:
1. Given a string, get the `wordArray` by matching words w/ /[a-zA-Z]+/g

2. split the input string at the words to get non-word character groups w/ /[a-zA-Z]+/

3. for each word
  - normalize all characters to lowercase, then split @ '',
    then replace 1st character w/ it's upperCase version, then join @ ''
  - reassign the current word index to the new joined word

4. Check if the input string starts w/ the first non-word character group,
  - if it doesn't, for each word/char-group up to the length of the longest among `wordArray` & `nonCharArray`
    - push current `wordArray` element then current `nonCharArray` element to a result array

  - IF it DOES, for each word/char-group up to the length of the longest among `wordArray` & `nonCharArray`
    - push current `nonCharArray` element then current `wordArray` element to a result array

5. return this result array joined @ ''

e.g.
javaScript is fun!
[javaScript, is, fun] & [' ', ' ', '!']
javascript -> Javascript -> [Javascript, is, fun]
is -> Is -> [Javascript, Is, fun]
fun -> Fun -> [Javascript, Is, Fun]
starts w/ ' '? NO
-> [Javascript, ' ', Is, ' ', Fun, '!'] => "Javascript Is Fun!"

! javaScript is fun!
[javaScript, is, fun] & ['! ', ' ', ' ', '!']
javascript -> Javascript -> [Javascript, is, fun]
is -> Is -> [Javascript, Is, fun]
fun -> Fun -> [Javascript, Is, Fun]
starts w/ '! '? YES
-> ['! ', Javascript, ' ', Is, ' ', Fun, '!'] => "! Javascript Is Fun!"

Low level:
- if the length of the string is 0, return ""
- initialize variable `wordArray` equal to matching the string against (/[a-zA-Z]+/g)
- if `wordArray` is null return the inputString as is

- intialize variable `nonCharGroups` = splitting string against (/[a-zA-Z]+/)
- intialize variable `result` = []

- for each word in `wordArray` starting @ idx = 0
  - initialize variable `word` equal to normalized version `word.toLowerCase()`
  - assign `word` to it's split version @ '', replace 1st char w/ uppercase version `word.splice(0, 1, word[0].toUpperCase())`
  - assign the `word` joined @ '' to current index of `wordArray`

- initialize variable `longestLength` = finding max between `wordArray.length` & `nonCharGroups.length`

- check IF the input string starts w/ first non-word character group
  - IF IT DOES, for each word/char-group up to the `longestLength`
    - push current `nonCharArray` element then current `wordArray` element to a result array
  - IF IT DOES NOT, for each word/char-group up to the `longestLength`
    - push current `wordArray` element then current `nonCharArray` element to a result array

- return `result.join('')`
*/

function capitalizeWords(string) {
  const wordsArray = string.match(/[a-zA-Z]+/g);

  if (string.length === 0 || wordsArray === null) return string;

  const nonCharGroups = string.split(/[a-zA-Z]+/);
  const result = [];

  for (let idx = 0; idx < wordsArray.length; idx += 1) {
    let word = wordsArray[idx].toLowerCase().split('');
    word.splice(0, 1, word[0].toUpperCase());
    wordsArray[idx] = word.join('');
  }

  let longestLength = Math.max(wordsArray.length, nonCharGroups.length);

  if (string.startsWith(nonCharGroups[0])) {
    for (let idx = 0; idx < longestLength; idx += 1) {
      result.push(nonCharGroups[idx], wordsArray[idx]);
    }
  } else {
    for (let idx = 0; idx < longestLength; idx += 1) {
      result.push(wordsArray[idx], nonCharGroups[idx]);
    }
  }

  return result.join('');
}


console.log(capitalizeWords("Hello, world!") === "Hello, World!"); // true
console.log(capitalizeWords("version 2.0beta") === "Version 2.0Beta"); // true

// uppercase char in middle of word
console.log(capitalizeWords("javaScript is fun!") === "Javascript Is Fun!"); // true
console.log(capitalizeWords("HELLO, WORLD!") === "Hello, World!"); // true

// starting w/ non-word character
console.log(capitalizeWords("! javaScript is fun!") === "! Javascript Is Fun!"); // true

// no words
console.log(capitalizeWords(" 123!!!") === " 123!!!"); // true

// empty string
console.log(capitalizeWords("") === ""); // true

// LSBot test cases
console.log(capitalizeWords("launch school") === "Launch School");          // "Launch School"
console.log(capitalizeWords("launch   school!") === "Launch   School!");       // "Launch   School!"
console.log(capitalizeWords("  hello-world") === "  Hello-World");          // "  Hello-World"
console.log(capitalizeWords("javaScript_is_FUN!!") === "Javascript_Is_Fun!!");    // "Javascript_Is_Fun!!"
console.log(capitalizeWords("version 2.0beta") === "Version 2.0Beta");        // "Version 2.0Beta"
console.log(capitalizeWords("line one\nline TWO") === "Line One\nLine Two");     // "Line One\nLine Two"
