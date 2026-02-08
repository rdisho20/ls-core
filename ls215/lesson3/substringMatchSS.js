/*
Complete the function that determines if any two-character substring from the first string (str1) is present in the second string (str2).

---- PROBLEM
input: 2 strings
output: boolean value
- True: if any 2 character substring from first string is present in second string
- False: if NO 2 character substring is present from first string in second string

Rules:
1. a substring is going to be 2 characters long
2. return true at the first indication of a 2 character substring from first input string existing in the second in put string
3. If the first string has NO substrings (empty), there is nothing to match => false
4. If the second string has NO substrings (empty), there is nothing needing a match => false
5. An input can be another type (not string) => return `undefined`
6. An input can have 1 character (no possible matches) => `false`
7. The function will ALWAYS take only 2 arguements
8. Each input string can be any number length
  - ODD length strings handled with additional condition
9. matching CASE INSENSITIVE

Questions:
Can an input string be 1 character in length? IF so, how do I handle the execution of the function
- can be 1 character, no match possible => false
Can any of the inputs be of a different type other than string?
- YES, 
  - if input is any other type (not string), return `undefined`
Can the function take 0, 1 or more than 2 arguements?
- ASSUME only 2 arguements

---- DATA STRUCTURE ----
- iterate over input strings
- using a string to store substring

---- ALGORITHM ----
High level:
1. Check each input argument, If it's not a string, return `undefined`
2. If an input is any length less than 2, return `false` (no possible matches)

3. Normalize (case insensitive) each input string, reassigned to corresponding parameter name

4. Check each substring that is 2 characters in length starting at the beginning of `string1` up to its length

4b. once I hit the last character of the string => exit the loop early (no more 2 character substrings)

5. Given a 2 character substring, Check if it is included in the second string (`string2`)
  - If there is a match, return `true`

6. If done checking `string1` and no match, we need to return `false`

'Something'
So => in Home? no
om => in Home? yes (includes)

Low level:
- If either of the input arguements aren't `typeof [arg] === 'string'`, return undefined
- If either of input arguments length are < 2, return false

- reassign `string1` and `string2` to [string].toLowerCase() respectively

- For each character in the first substring (idx = 0)
  - IF idx = 1 less the length of the string, exit the for loop
  - initialize a variable currentChar = string1[idx]
  - initialize a variable nextChar = string1[idx + 1]
  - initialize a variable `substring` = current character + next character

  - IF the `substring` is `includes`ed inside the `string2` return `true` (match)

- return `false` (no match)
*/

function substringTest(string1, string2) {
  if (typeof string1 !== 'string' || typeof string2 !== 'string') return undefined;
  if (string1.length < 2 || string2.length < 2) return false;

  string1 = string1.toLowerCase();
  string2 = string2.toLowerCase();

  for (let idx = 0; idx < string1.length; idx += 1) {
    let substring = string1[idx] + string1[idx + 1];

    if (string2.includes(substring)) return true;
  }

  return false;
}

console.log(substringTest("Something", "Home")); // true (om)
console.log(substringTest("Something", "Fun")); // false
console.log(substringTest("Something", "")); // false
console.log(substringTest("", "Something")); // false
console.log(substringTest("Hi", "i")); // false
console.log(substringTest("i", "Hi")); // false
console.log(substringTest([], "Hi")); // undefined
console.log(substringTest("Hi", [])); // undefined
console.log(substringTest("launchschool","ol"))