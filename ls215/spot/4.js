/*
PROBLEM STATEMENT:
Write a function that takes a two-dimensional array as an argument and turns it into a flat array
with all duplicated elements removed. Treat numbers and number strings (e.g., 1 and '1') as duplicates,
and keep the one that comes first in the result.

---- PROBLEM ----
input: two-dimensional array
output: a flattened array with all duplicate elements removed
  - if an element appears more than once, only keep the one appearing first

Rules:
1. treat numbers & number strings as duplicates

Questions:
- Could I expect an argument that is a 1 dimensional array or 3 or more dimensional array? NO
- Could I expect to see an argument that is of a different type? NO
- will there be at least 1 element in the array, or is an empty array possible? empty array is possible
- will there be an empty element array? NO, all sub arrays will have at least 1 element
- will there be object elements in any of the sub arrays? NO

---- TEST CASES ----
console.log(flattenAndUnique([])) // []
console.log(flattenAndUnique([[1, 2], [2, 3]])) // [1, 2, 3]
console.log(flattenAndUnique([[1, 2, '3'], [2, 3]])) // [1, 2, '3']
console.log(flattenAndUnique([[1, 2, 'hello'], [2, 3, 'hello']])) // [1, 2, 'hello', 3]

---- DATA STRUCTURE ----
Given a 2 dimensional array, flatten it to a 1 dimensional ARRAY
- use this array to build a `result` array of unique values

---- ALGORITHM ----
1. Given an input array, check if has elements
  - IF so, flatten the array w/ `.flat()`

2. Using the new flattened array, build a `result` array
  - for each element in the flattened array,
    - since numbers will match their string counterparts, IF we have a number element 
      we need to check if either its number or string version is in `seen`
      - IF it is NOT in `seen`, push it to `seen`
    - ELSE IF, we have a string value,
      - IF it can be converted to a number,
        - IF it can, and IF it is NOT in `seen` PUSH it
      - OTHERWISE if it is not in `seen` PUSH it

3. return the resulting `seen` array

Low level:
- IF the argument array is empty, return an empty array
- Given the argument array, assign it to variable `flattened` flattened (array.flat())
- initialize a variable `result` = to an empty array

- for each element in `flattened`
  - IF we have a number element, check
    - if either both the number or string version of the number is present in `result`, CONTINUE
  - ELSE IF the element is in the `result` array, CONTINUE
  - OTHERWISE, push the current element to the `result` array

- return `result`

*/


function flattenAndUnique(twoDArray) {
  if (twoDArray.length === 0) return [];

  const flattened = twoDArray.flat();
  const result = [];

  for (let element of flattened) {
    if (typeof element === 'number') {
      if (!result.includes(String(element)) && !result.includes(parseInt(element, 10))) {
        result.push(element);
      }
    } else if (typeof element === 'string') {
      if (parseInt(element, 10)) {
        if (!result.includes(String(element)) && !result.includes(parseInt(element, 10))) {
          result.push(element)
        }
      } else {
        if (!result.includes(element)) result.push(element);
      }
    }  
  }

  return result;
}


console.log(flattenAndUnique([])) // []
console.log(flattenAndUnique([[1, 2], [2, 3]])) // [1, 2, 3]
console.log(flattenAndUnique([[1, 2, '3'], [2, 3]])) // [1, 2, '3']
console.log(flattenAndUnique([[1, 2, 'hello'], [2, 3, 'hello']])) // [1, 2, 'hello', 3]