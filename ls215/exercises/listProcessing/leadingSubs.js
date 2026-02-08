/*
---- PROBLEM
input: string
output: array of substrings (beginning w/ first letter of word, shortest -> longest)

Rules:
1. There will be substrings equal to the length of the argument string
2. arranged shortest to longest

---- DATA STRUCTURE
iterate over string as is,
- building substrings,
- storing substrings in a new array

---- ALGORITHM
High level:
1. Given a string, for every character determine the `leading` substring it belongs to
  - For each character, build a substring of characters including all previous characters
    in order from first all the way up to the current character

2. store the build substrings in an array `substrings`

3. return the array `substrings`

Low level:
- initialize a variable named `substrings` = []

- for each character in `inputString` (mainIdx = 0)
  - initialize a value `substring` = ''
  - iterate backwards from the current index (mainIdx) down to `0`
    - each letter is concatenated to `substring`
  - reverse `substring` then push it to `substrings`
    1. split the string
    2. call reverse().join('')
    3. push resulting value to `substrings`

- return `substrings`
*/

function leadingSubstrings(inputString) {
  const substrings = [];

  for (let mainIdx = 0; mainIdx < inputString.length; mainIdx += 1) {
    const substring = [];

    for (let idx = mainIdx; idx >= 0; idx -= 1) {
      const letter = inputString[idx];
      substring.push(letter);
    }

    substrings.push(substring.reverse().join(''));
  }

  return substrings;
}


console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]