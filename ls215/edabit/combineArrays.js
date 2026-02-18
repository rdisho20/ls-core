/*
Create a function that takes three arrays and returns one array where all passed arrays are combined into nested arrays.

These arrays should be combined based on indexes: the first nested array should contain only the items on index 0, the second array on index 1, and so on.

If any array contains fewer items than necessary, supplement the missing item with "*".

--------------------

input: 3 seperate arrays
output: single array
- all passed arrays are combined into nested arrays

Rules:
- arrays combined based on indexes
  - first nested array contains only items @ index 0, second nested array @ index 1, etc.
- If any array contains fewer items than necessary, supplement missing item w/ "*"
- The 3 arrays can be any lengths, w/ any data type as elements
- will always receive 3 arrays
- maintain element order based on argument array insertion order

---- DATA STRUCTURE ----
given the input ARRAYS, iterate over each, building result 2D ARRAY

---- ALGORITHM ----
1. build result array w/ empty arrays where the number of sub arrays is equal to the argument w/ the longest length

2. For each array in the array w/ all arguement arrays collected
  - build a result 2 dimensional array according to specifications @ Rules
  - given current array
    - for each element, given it's current index up to the length of the longest argument array's length
      - using that index, access result array
      - add the value to that array (push)
      - if the current index is out of bounds in the current array
        - add the value "*" to the result array at current index (push)

[1, 2, 3], ["hello", "world"], [[1], [2], [3]] - max length is 3 therefore 3 sub arrays
[ [1, "hello", [1]], [2, "world", [2]], [3, "*", [3]] ]
1 - idx 0, 2 - idx 1, 3 - idx 2
"hello" - idx 0, "world" - idx 1, idx 2.. if undefined => "*"
[1] - idx 0, [2] - idx 1, [3] - idx 2

3. return the final array

HELPER resultStarter(longestLength)
- start w/ `result` = []
- for n up to the `longestLength`
  - push an empty array ([]) to the `result`
- return `result`

HELPER getLongestLength(...arrays)
- start w/ 'longest' = 0
- for each array in arrays
  - if the current length is longer than 'longest'
    - set 'longest' = current length

Low level:
- initialize variable `longestLength` = invocation of `getLongestLength` passing in all 3 arrays (already collected)
- init variable `result` = invocation of `resultStarter` passing in `longestLength` as argument

- for each array in arrays array
  - for each element in the array starting w/ idx = 0 up to the `longestLength`
    - init variable `currentValue` = array[idx];
    - IF the element at current idx is `undefined` 
      - PUSH `ASTERISK` to the current idx @ `result` array
    - OTHERWISE
      - using value @ current index in the current array, PUSH to current idx @ `result` array

- return `result` array
*/

const ASTERISK = "*";

function combineArrays(...arrays) {
  const longestLength = getLongestLength(arrays);
  const result = resultStarter(longestLength);

  for (let array of arrays) {
    for (let idx = 0; idx < longestLength; idx += 1) {
      const currentValue = array[idx];

      if (currentValue === undefined) result[idx].push(ASTERISK);
      else result[idx].push(currentValue);
    }
  }

  return result;
}

function getLongestLength(arrays) {
  let longest = 0;

  for (let array of arrays) {
    if (array.length > longest) longest = array.length;
  }

  return longest
}

function resultStarter(longestLength) {
  const result = [];

  for (let n = 0; n < longestLength; n += 1) {
    result.push([]);
  }

  return result;
}


// same number :: elements
console.log(combineArrays([1, 2, 3], ["hello", "world", "!"], [[1], [2], [3]]));
/*
[[1, "hello", [1]], [2, "world", [2]], [3, "!", [3]]]
*/


// different number :: elements
console.log(combineArrays([1, 2, 3], ["hello", "world"], [[1], [2], [3]]));
/*
[[1, "hello", [1]], [2, "world", [2]], [3, "*", [3]]]
*/


// maximum number of elements in a single array less than number of arguments
console.log(combineArrays([1, 2], ["hello", "world"], [[1], [2]]));
/*
[[1, "hello", [1]], [2, "world", [2]]
*/

console.log(combineArrays([false, "false"], ["true", true, "bool"], ["null", "undefined"])); // [[false, "true", "null"], ["false", true, "undefined"], ["*", "bool", "*"]]

console.log(combineArrays([1, 2, 3], [4, 5, 6], [7, 8, 9])); // [[1, 4, 7], [2, 5,  8], [3, 6, 9]]

console.log(combineArrays(["Jack", "Joe", "Jill"], ["Stuart", "Sammy", "Silvia"], ["Rick", "Raymond", "Riri"])); // [["Jack", "Stuart", "Rick"], ["Joe", "Sammy",  "Raymond"], ["Jill", "Silvia", "Riri"]]