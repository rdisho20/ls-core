/*
 Given an array of integers, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

-P
input: array; contiguous? Is it an array of integers? or array w/ subarrays of integers?
output: single integer (largest sum of a contiguous array)

Rules:
- given an array, our array will have at least 1 integer (no floats), positive or negative

- we must calculate sum of the contiguous array ('windowed' / 'sectioned off' numbers -> calculate sum)

- return the largest sum from all calculated sums

Questions:
- input: 0 => undefined
- input: not an array => undefined?
- input: array is empty => undefined
Data structure:
- an array to store subarrays

Algorithm:
High level:
- total variable to store largest sum
- loop through input array
  - find the sum of all possible subarrays
  - assign the largest sum to total
- return total

Low level:
- initialize variable `total` as negative infinity
- if input is not an array return undefined
or if input array is empty return undefined
- iterate through input array starting at idx = 0
  - iterate through input array starting at jdx = idx + 1
    - initialize variable `currentSum` 
    - assign `currentSum` to the result of invoke `sum()` pass in input array SLICE from idx to jdx
    - assign the larger value when compare `currentSum` and `total` to `total`
- return `total`

HELPER function sum(array)
total = number[0]

for each number in the array (start at idx 1)
  add it to the current total

- return the sum of input array   
*/

function sum(numbers) {
  let total = numbers[0];

  if (numbers.length < 2) {
    return numbers[0];
  }

  for (let idx = 1; idx < numbers.length; idx += 1) {
    total += numbers[idx];
  }

  return total;
}

function maxSubarraySum(numbers) {
  let total = -Infinity;

  if (!Array.isArray(numbers) || numbers.length === 0) {
    return undefined;
  }

  for (let idx = 0; idx < numbers.length; idx += 1) {
    for (let jdx = idx + 1; jdx <= numbers.length; jdx += 1) {
      let currentSum = sum(numbers.slice(idx, jdx));

      if (currentSum > total) total = currentSum;
    }
  }

  return total;
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 (from subarray [4, -1, 2, 1])
console.log(maxSubarraySum([1])); // 1; single integer => return integer
console.log(maxSubarraySum([5, 4, -1, 7, 8])); // 23 (from subarray [5, 4, -1, 7, 8])
console.log(maxSubarraySum([-5, -1, -3])); // -1
console.log(maxSubarraySum("hello"));
console.log(maxSubarraySum([]));