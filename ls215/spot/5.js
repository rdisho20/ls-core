/*
PROBLEM STATEMENT:
Create a function that takes a list of numbers as an argument. For each number,
determine how many numbers in the list are smaller than it, and place the answer in a list.
Return the resulting list.

When counting numbers, only count unique values. That is, if a number occurs multiple times in the list, it should only be counted once.

---- PROBLEM ----
input: array of numbers
- determine how many numbers in the list are smaller than it
output: array of counts
- the array contains the counts for each number of numbers that appear in the input array that are less than the number

Rules:
1. when counting numbers, only count unique values (number occurs multiple times in list?  only count it once)
2. return array contains counts, where each count represents the number of unique numbers less than the current number in question

Questions:
1. I suppose when iterating over the numbers to get their counts, we don't disregard duplicates? YES
e.g. [7, 7, 7, 7] -> [0, 0, 0, 0]
2. input array will always be an array of at least 2 numbers? NO
3. Input array will have at least 1 number, if 1 number return 0

---- EXAMPLES TEST CASES ----
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0, 0, 0, 0]
console.log(smallerNumbersThanCurrent([1, 2])) // [0, 1]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]

---- DATA STRUCTURE ----
- use ARRAY of numbers as is
- after getting the counts, push each count to a `result` ARRAY

---- ALGORITHM ----
High level:
1. Given an input array, for every number in the array, get the counts of numbers that are smaller than it
- get unique values for the array

2. for each unique value, IF it is less than the current number, increment a `count` variable

3. then for each number, push its associated count to a `result` array

4. return the `result` array

HELPER getCount(number, unqiueArray)
- for each num in the unqiueArray
  - if num is less than number
    - increment a count value
- return the count value

Low level:
- initialize variable `counts` = to []
- initialize variable `uniqueValues` = new Set(...array)
- initialize variable `uniqueArray` = [...uniqueValues]

- for each number in the input array
  - initialize a value named `count` = to the invoked function `getCount` passing in the number and `uniqueArray`
  - then push the count to `counts`

- return `counts`
*/


function smallerNumbersThanCurrent(array) {
  const counts = [];
  const uniqueValues = new Set(array);
  const uniqueArray = [...uniqueValues];

  for (let num of array) {
    const count = getCount(num, uniqueArray);
    counts.push(count);
  }

  return counts;
}


function getCount(number, uniqueArray) {
  let count = 0;
  
  for (let num of uniqueArray) {
    if (num < number) count += 1;
  }

  return count;
}

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0, 0, 0, 0]
console.log(smallerNumbersThanCurrent([1, 2])) // [0, 1]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1])); // [0]