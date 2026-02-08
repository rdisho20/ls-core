// Question: Run-Length Encoding
// Difficulty​​: Intermediate
// Problem Description
// Implement run-length encoding, a form of lossless data compression. In this method, consecutive sequences of the same data value (runs) are stored as a single data value and a count, rather than as the original run.
// Write a function that takes a string as input and returns its run-length encoded version. For example, the string "WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB" would be encoded as "12W1B12W3B24W1B".
// 
// Rules:
// 1.  The function should be case-sensitive. 'a' and 'A' are considered different characters.
// 2.  If the input string is empty, the function should return an empty string.
// 3.  Each run, even if it's a single character, should be represented by its count and the character. 

// For example, "ABC" would be encoded as "1A1B1C".

/*
----Problem
input: string (alphabetic characters)
output: run-length encoded version (string)

Rules:
1. Case-sensitive
2. If the input string is empty, the function should return an empty string.
3. a RUN is the same 'data' repeated a number of times in a string
4. a RUN-LENGTH ENCODED VERSION of the RUN represented by:
  - Number of times repeated
  - followed by the character (case-sensitive)

Questions:
1. Will a 'piece of data' be a symbol, a number, punctuation? YES its possible

---- DATA STRUCTURE
- use string as-is and iterate over the string


Algorithm:
High Level:
 1. Traverse the input string, and get the count of each distinct character.
 3. Build a result string for the chracters in the input str
 4. Return the result

Detailed:
1. Initialize the 'initialValue' to the first character in the input string
2. Initialize 'count' to 0, and 'resultStr' to ''
3. If the input stirng is '', return 'resultStr'
4. Iterate over the input string
 - If the current character is a digit:
  - reassign 'count' to 0
  - Concate the digit with 'resultStr'
 - If the current character does not equal to 'initialValue':
   - Concatenate 'count' and then 'initialValue' to 'resultStr'
   - Reassign 'initialValue' to the current character
   - Reassign 'count' to 1
   - Reassign 'initialValue' to 'char'
 - Otherwise,
  - Increment 'count'
  - Reassign 'initialValue' to 'char'

*/


function runLengthEncode(inputString) { 
  let initialValue = inputString[0];
  let count = 0;
  let resultStr = '';

  if (inputString === '') return resultStr;

  for (let char of inputString) {
    if (char !== initialValue) {
      if (/\d/.test(char)) {
        resultStr += count;
        resultStr += initialValue;
        resultStr += char;
        count = 0;
      } else {
        resultStr += count;
        resultStr += initialValue;
        count = 1;
        initialValue = char;
      }
    } else {
      count += 1;
    }
  }
  
  if (!/\d/.test(inputString[inputString.length - 1])) {
    resultStr += count;
    resultStr += initialValue;
  }

  return resultStr;
}


// Test Cases:
console.log(runLengthEncode("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB")); //"12W1B12W3B24W1B"
console.log(runLengthEncode("AABBC")); // "2A2B1C"
console.log(runLengthEncode("ABC")); // "1A1B1C"
console.log(runLengthEncode("AaBbC")); // "1A1a1B1b1C"
console.log(runLengthEncode("")); // ""
console.log(runLengthEncode("a")); // "1a"
console.log(runLengthEncode("AABB1")); // "2A2B1"
console.log(runLengthEncode("1AABB")); // "12A2B"
/*
A -> c: 1, i: A
A -> c: 2, i: A =>
B -> c: 1, i: B => '2A'
B -> c: 2, i: B
1 -> c: 0, i: 1 => '2B' (final processing previous 'initialValue)
outside: i: 1, don't concat 'count', just value (if digit)

*/

console.log(runLengthEncode("aB??????????"));  // "1a1B10?"
