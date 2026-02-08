/*
PROBLEM STATMENT:
Given an array of integers, nums, return the third largest number in the array. If the third largest number does not exist, return the greatest number.

You are not allowed to sort the array.

---- PROBLEM ----
input: array of integers
output: return 3rd largest number in the array.
- if 3rd largest doesn't exist, return greatest number

Rules:
1. cannot sort array
2. get no numbers in input array? return null
3. no 3rd largest number exists? return largest number
4. if there are elements in the array, they will always be integers

---- DATA STRUCTURE ----
Given an array of numbers, get an array of unique numbers
- sort the array of unique number returning the 3rd largest, or largest if there is no 3rd number

---- ALGORITHM ----
1. Given an input array of numbers, first, get a set of the array (isolating unique values)
2. Then, find the largest number in the array
3. If the array has a length of less than 3, return the largest number
4. If the array has at least 3 numbers, iterate through
  - if current number is the largest, CONTINUE
  - given the current number, IF there is no second largest number, it becomes the second largest number
  - given the current number, ELSE IF there is a second largest, but no third largest,
    - check it against the second largest, If it is greater than the second largest, current becomes 2nd largest, 2nd largest becomes 3rd largest
    - OTHERWISE, it becomes the third largest
  - ELSE IF there is a third largest
    - if the current number is greater than the second, it becomes second largest, second becomes the third largest
    - ELSE IF if it is greater than the 3rd, it becomes the third largest

5. After completing the iteration, return the third largest value

EXAMPLE:
[1, 2, 2, -1, 1] ... unique => [1, 2, -1]
get largest => 2
< 3 length? NO
for each number in [1, 2, -1]
1 => second largest
2? continue
-1, -1 > 1? no -1 becomes 3rd largest
return -1

EX2:
[1, 2, 5, 3, 4, 6, 7, 8] ... largest => 8
1 => 2nd largest
2nd largest but no 3rd largest
2 > 1 => 2nd lrg = 2, 3rd lrg = 1
5 > 2 => 2lrg = 5, 3lrg = 2
4 > 5? NO 4 > 2? YES 2lrg = 5, 3lrg = 4
3 > 5? NO 3 > 4? NO
6 > 5 => 2lrg = 6, 3lrg = 5
7 > 6 => 2lrg = 7, 3lrg = 6
====> 6

Low Level:
- initialize a variable `uniqueValues` = -> a set of the input array converted to a new array
- initialize a variable `largest` = -> Math.max(passing spread of `...uniqueValues`)

- IF the length of `uniqueValues` is less than 3, RETURN `largest`

- declare variables `secondLargest` & `thirdLargest`

- For each number in `uniqueValues`
  - IF the `number` is === `largest`, CONTINUE
  - IF `secondLargest` is undefined, `number` becomes the `secondLargest` number, CONTINUE
  - ELSE IF `secondLargest` exists BUT `thirdLargest` is undefined
    - IF `number` is greater than 2nd
      - `number` becomes `secondLargest` & `secondLargest` becomes `thirdLargest`
    - OTHERWISE it becomes `thirdLargest`
  - ELSE IF `thirdLargest` exists
    - IF `number` is > than `secondLargest`
      - `number` becomes `secondLargest`, and `secondLargest` becomes `thirdLargest
    - OTHERWISE IF `number` is > than `thirdLargest`, `number` becomes `thirdLargest`
  
- return `thirdLargest`

HELPER: getLargestNumber(uniqueArray)
- Math.max(...uniqueArray)
*/

function thirdLargest(numbers) {
  if (numbers.length === 0) return null;

  let uniqueValues = new Set(numbers);
  uniqueValues = [...uniqueValues];
  const largest = Math.max(...uniqueValues);

  if (uniqueValues.length < 3) return largest;

  let secondLargest;
  let thirdLargest;

  for (let number of uniqueValues) {
    if (number === largest) continue;

    if (secondLargest === undefined) {
      secondLargest = number;

      continue;
    } else if (secondLargest !== undefined && thirdLargest === undefined) {
      if (number > secondLargest) {
        thirdLargest = secondLargest;
        secondLargest = number;
      } else {
        thirdLargest = number;
      }
    } else if (thirdLargest !== undefined) {
      if (number > secondLargest) {
        thirdLargest = secondLargest;
        secondLargest = number;
      } else if (number > thirdLargest) {
        thirdLargest = number;
      }
    }
  }

  return thirdLargest;
}


// 3rd largest doesn't exist
console.log(thirdLargest([1, 2])); // 2
console.log(thirdLargest([1, 2, 2, 1])); // 2

// 3rd largest exists
console.log(thirdLargest([1, 2, 3])); // 1
console.log(thirdLargest([1, 2, 3, 4, 5, 6, 7, 8])); // 6
console.log(thirdLargest([1, 2, 2, -1, 1])); // -1
console.log(thirdLargest([10, 10, 20, 20, 30, 30])); // 10

// no numbers in input array
console.log(thirdLargest([])); // null

// 0 is the third largest
console.log(thirdLargest([0, 2, 3])) // 0