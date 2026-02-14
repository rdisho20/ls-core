/*
Create a function that takes a string argument and returns a copy of the string with every second character
  in every third word converted to uppercase. Other characters should remain the same.

input: string argument
output: returns string (every second character of every third word set to Uppercase in original string)

Rules:
1. every second character of every third word set to uppercase
2. input string will have at least 3 words seperated by space

Questions:
- Is it possible the third word is less than 2 characters? YES
- If a second character in the third word is a punctuation, what do I do? NOTHING

---- DATA Structure ----
string split into ARRAY by ' '

---- ALGORITHM ----
1. Given a string, split it into an array by whitespace (' ')

2. For each word in the stringArray
  - for every 3rd word, capitalize it's second character

3. return the stringArray joined w/ ' '

Low level
- initialize value `stringArray` equal to input string split @ ' '

- for each word starting at idx = 2, incrementing by 3 (every third word)
  - if length of word is === 1, CONTINUE
  - initialize value `newString` = return value :: .replace(currentChar, currentChar.toUpperCase())
    (replace it's 2nd character (index 1) to it's uppercase w/ )
  - reassign value @ current `idx` equal to `newString`

- return the stringArray joined @ ' '
*/

function toWeirdCase(str) {
  const stringArray = str.split(' ');

  for (let idx = 2; idx < stringArray.length; idx += 3) {
    let word = stringArray[idx].split('');

    if (word.length === 1) continue;

    for (let jdx = 1; jdx < word.length; jdx += 2) {
      const char = word[jdx];
      word.splice(jdx, 1, char.toUpperCase());
    }

    stringArray[idx] = word.join('');
  }

  return stringArray.join(' ');
}

console.log(toWeirdCase('She and I.')) // "She and I."

let original1 = 'Lorem Ipsum is simply dummy text of the printing world';
let expected1 = 'Lorem Ipsum iS simply dummy tExT of the pRiNtInG world';
console.log(toWeirdCase(original1) === expected1); // true

let original2 = 'It is a long established fact that a reader will be distracted';
let expected2 = 'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD';
console.log(toWeirdCase(original2) === expected2); // true

console.log(toWeirdCase('aaA bB c') === 'aaA bB c'); // true