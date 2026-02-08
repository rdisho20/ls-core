/*
Write a function that takes two strings, s1 and s2, and returns true if a substring of s1 can be rearranged to form s2, and false otherwise.

// For "supercalifragilisticexpialidocious" and "pads":
// The substring "pads" exists in the first string.
// However, we are looking for a substring that can be *rearranged*.
// "supercalifragilisticex**pialidoc**ious" contains the letters "p, i, a, l, i, d, o, c".
// These cannot be rearranged to form "pads".
// 
// For "rkrodlw" and "world":
// The substring "rodlw" can be rearranged to form "world".
// The function should return true.


Problem:
 - Input: two strings
 - Output: boolean

Rules:
 - a substrin in the s1 should be rearranged to form the second string
 - if a substring is the same as the s2 without being rearranged, return false
 - 

Questions:
 - two valid input strings will be provided

Data structure:
- an array of all possible substrings
- an array of characters

Algorithm:
High Level:
1. Convert both s1 and s2 into lowercase
3. Get all possible substrings for s1
4. Iterate over the input string and if there is a substring that is equal to s2, return true
5. Return false
------------------
HELPER: getAllSubstrings(str) => an array of substrings
- Initialize an 'substrings' array
- Iterate over all characters in str
  - Iterate again using the next character
   - Get a substring and append it to 'substrings'
- After the iteration is done, return 'substrings'
------------
HELPER: areEqual(str1, str2) => boolean
 - Iterate over str1
  - If the current character does not exist in str2:
    - Return false
 - Return true
-----------
Low Level:
1. Convert s1 and s2 to lowercase, then to arrays. Then conver the arrays of chars back to strings
2. Get all substrings for s1 using `getAllSubstrings()`
3. Iterate over `substrings` array 
  - If the length of the current substring is equal to s2:
   - If substring can be rearranged to form s2
      - Return true
4. Return false after the iteration has finished.

*/

function rearrange(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();
  let substrings = getAllSubstrings(s1);

  for (let i = 0; i < substrings.length; i += 1) {
    let substring = substrings[i]


    if (substring.length === s2.length) {
      if (areEqual(substring, s2)) return true;
    }
  }

  return false;
}

function areEqual(str1, str2) {
  for (let i = 0; i < str1.length; i += 1) {
    let char = str1[i];
    if (!str2.includes(char)) return false
  }

  return true;
}

function getAllSubstrings(str) {
  let substrings = [];

  for (let i = 0; i < str.length; i += 1) {
    for (let j = i + 1; j <= str.length; j += 1) {
      substrings.push(str.slice(i, j));
    }
  }

  return substrings;
}


// console.log(rearrange("supercalifragilisticexpialidocious", "pads")); // false
// console.log(rearrange("rkrodlw", "world")); // true
// console.log(rearrange("rkrodlw", "world")); // true// 

// console.log(rearrange("rKroDlw", "worLd")); // true
// console.log(rearrange("rKroDlw", "WORLD")); // true

console.log(rearrange('barbecue', 'cue'));                             // true
console.log(rearrange('scriptingjava', 'javascript'));                // false
console.log(rearrange('scriptjava', 'javascript'));                   // true
console.log(rearrange('supercalifragilisticexpialidocious', 'pads')); // false
console.log(rearrange('boothill', 'hill'));                           // true
console.log(rearrange('abc', 'bca'));                                 // true
console.log(rearrange('abc', 'd'));                                   // false
console.log(rearrange('thing', 'gin'));                               // true


