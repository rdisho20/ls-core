/*
input: string
output: array of all substrings of a string
  - ordered by where the substring begins in the string
  - return substrings at a given position SHORTEST to LONGEST

  Rules:
    - You should use `leadingSubstrings` function written in previous exercise

---- ALGORITHM ----
- for each character in the string
  - starting with character up to the end of the input string (sliced)
    - get a list of all substrings for that character
    - for each substring for that character, push it to a `result` list (using forEach)
*/

function substrings(string) {
  const result = [];
  const substringSplit = string.split('');

  return substringSplit
    .map((char, idx) => leadingSubstrings(string.substring(idx)))
    .flat();
}

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

console.log(substrings('abcde'));

/* returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/