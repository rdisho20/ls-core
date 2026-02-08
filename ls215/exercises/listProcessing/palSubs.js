/*
input: input string
output: array of all palindromic substrings of a string 

Rules:
1. each substring ▬ consist :: same character sequence forwards & backwards
2. substrings in returned list ▬ sorted by order :: appearance
3. duplicate substrings included multiple times.
4. use substrings function written @ previous exercise
5. consider all characters, including symbols, numbers, punctuation
6. @ this exercise, palindromes are case-sensitive
7. single characters are NOT plaindromes

---- DATA STRUCTURE ----
Given an input string, in order to find it's palindromes of all substrings,
we get an ARRAY of its substrings, check IF they are palindromes,
IF they are a palindrome, we can add it to a resulting ARRAY
- for this problem we will iterate over substrings ARRAY and build a resulting ARRAY

---- ALGORITHM ----
1. Get all substrings of the input string

2. check the list of all substrings, for every substring, if it is a palindrome, add it to a resulting array

3. return the array w/ all substrings that are palindromes

HELPER: isPalindrome(string)
- given a string, it is a palindrome if it is the same forwards and reverse
  - IF they are equal, return true
  - OTHERWISE return false

Low level:
- initialize a variable named `results` equal to `[]`
- initialize a variable named `substrings` equal to invocation of `substrings()` passing in input string

- for each string in `substrings`
  - IF it is a palindrome, invoking `isPalindrome`
    - push it to `results`
  - OTHERWISE do nothing

- After iterating through all substrings, we return `results`
*/

function isPalindrome(substring) {
  return substring === substring.split('').reverse().join('');
}


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


function palindromes(string) {
  const results = [];
  const allSubstrings = substrings(string);

  for (const substring of allSubstrings) {
    if (substring.length === 1) continue;
    if (isPalindrome(substring)) results.push(substring);
  }
  
  return results;
}


console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
/* returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]
*/

console.log(palindromes('knitting cassettes'));
/* returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
*/