/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

An empty array is considered to have a sum of 0.


Input: an array of integers
Output: N the index of an integer

Questions:

Rules:
 - if the sum of the elements to the left side and right side of an integer are equal, return the index of that integer
 - If it didn't occur, return -1
 - for an empty array, return 0
Data:
-> an array of numbers

Algorithm:
High level:
1. Given an array of integers, we iterate over each element, finding the sum of the elements to the left side & sum of the elements to the right side of the current element

2. Check if the left sum is equal to the right sum, IF so return the current element's index position (integer)

3. If we don't find any sums (left & right) equal to one another, return -1

4. If we get an empty array as an input, return 0

HELPER: getLeftSum(currentIndex, originalArray), getRightSum(currentIndex, originalArray)
LEFT
- slice originalArray 0 up to the currentIndex
  - using the slice, reduce the elements to their sum
  - return the sum

RIGHT
- slice originalArray starting @ currentIndex + 1
  - using the slice, reduce the elements to their sum
  - return the sum

Low level:
- Check if input array is empty, IF so return `0`

- For each number in `inputArray` (`idx` = 0`)
  - initialize a variable `leftSum` = return value of getLeftSum(idx, arr)
  - initialize a variable `rightSum` = return value of getRightSum(idx, arr)

  - IF `leftSum` === `rightSum`, return `idx`

- return `-1`
*/

function getLeftSum(currentIndex, originalArray) {
  return originalArray
    .slice(0, currentIndex)
    .reduce((sum, number) => {
      return sum + number
    }, 0);
}

function getRightSum(currentIndex, originalArray) {
  return originalArray
    .slice(currentIndex + 1)
    .reduce((sum, number) => {
      return sum + number
    }, 0);
}

function findEvenIndex(arr) {
  if (arr.length === 0) return 0;
  
  for (let idx = 0; idx < arr.length; idx += 1) {
    const leftSum = getLeftSum(idx, arr);
    const rightSum = getRightSum(idx, arr);

    if (leftSum === rightSum) return idx;
  }

  return -1;
}

/*
const sum = arr => arr.reduce((acc, num) => acc + num);

function findEvenIndex(numbers) {
  if (numbers.length === 0) return 0;

  for (let idx = 0; idx < numbers.length; idx += 1) {
    leftSum = sum(numbers.slice(0, idx));
    rightSum = sum(numbers.slice(idx + 1));

    if (leftSum === rightSum) return idx
  }

  return -1;
}
*/

// Test Cases:
// For the array [1, 2, 3, 4, 3, 2, 1]:
// // At index 3, the sum of the left side is 1 + 2 + 3 = 6
// // and the sum of the right side is 3 + 2 + 1 = 6.
// // The function should return 3.

// For the array [20, 10, -80, 10, 10, 15, 35]
// // At index 0, the left side is [], sum is 0.
// // The right side is [10, -80, 10, 10, 15, 35], sum is 0.
// // The function should return 0.

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); // 3
console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); // 1
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35])); // 0
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20])); // 6
console.log(findEvenIndex(Array(100).fill(0))); // 0
console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); // -1
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1])); // 3

console.log(findEvenIndex([])); // 0
