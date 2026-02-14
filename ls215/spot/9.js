/*
Write a function that takes a string as an argument and returns a new string with the first character of each word capitalized.

input: string
output: string (capitalize first character in each word)

Rules:
1. input string will have at least 1 word
2. if input string has more than 1 word, each word seperated by spaces

Questions:
Could I expect any words to contain integers as first character in a word? how to deal w/? NO
what if string empty? return empty string
can the string have words seperated by anything other than a ' '?
Can a string have new line characters? IF so, will need to preserve those characters? NO

---- DATA STRUCTURE ----
Given an input string, we split up the words into a new ARRAY
and for each word split into an ARRAY so that we may replace each first letter character using slice

---- ALGORITHM ----
High level
constant alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
1. Given string, split the string at each appearance of ' '

2. using this split string array,
  for each word in the array
    if it's first character is already capitalized, move onto next word
    split the word, then replace first character w/ it's uppercase counterpart
    join this split word and reassign the current index position to this new word

3. return the split string array joined @ ''

e.g.
launch school -> [launch, school]
[l,a,u,n,c,h] -> [L,a,u,n,c,h] => Launch
[s,c,h,o,o,l] -> [S,c,h,o,o,l] => School

Low level:
- start w/ `alphaUpper` constant = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

- reassign `string` to it's split version, splitting at whitespace `string.split(' ')`

- for each word in string (idx = 0)
  - if the first character of the word is included in `alphaUpper`, CONTINUE
  - initialize variable `word` = string[idx].split('')
  - splice into `word` replacing first character w/ it's upperCase version -> word.splice(0, 1, word[0].toUpperCase())
  - reassign string[idx] to `word` joined @ ''

return the joined `string` at ''
*/


function capitalizeWords(string) {
  const alphaUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  string = string.split(' ');

  for (let idx = 0; idx < string.length; idx += 1) {
    const word = string[idx].split('');
    
    if (alphaUpper.includes(word[0])) continue;

    word.splice(0, 1, word[0].toUpperCase());
    string[idx] = word.join('');
  }

  return string.join(' ');
}


console.log(capitalizeWords('launch school')); // "Launch School"
console.log(capitalizeWords('javaScript is fun')); // "JavaScript Is Fun"
console.log(capitalizeWords('this is a test')); // "This Is A Test"