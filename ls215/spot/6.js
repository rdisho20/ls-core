/*
Create a function that takes a list of integers as an argument.
The function should return the minimum sum of 5 consecutive numbers in the list.
If the list contains fewer than 5 elements, the function should return null.

input: array of integers
output: integer (minimum sum :: 5 consecutive numbers @ list)

Rules:
1. If the list contains fewer than 5 elements, return null
2. argument will always be an array of integers

Question:
- what if I have 2 sums that are the lowest and equal each other?  Just return either of the sums
- what if all sums are equal?  Just return any of the sums

---- DATA Structure ----
Using the array of integers,
  for each integer, we take it and the following 4 elements to get the corresponding sum

---- ALGORITHM ----
High level:
1. Given an array of integers,
  for each integer, find the sum of it and the following 4 elements
  AS LONG AS there are at least 5 remaining integers (inclusive)

2. add each sum to a `sums` array

3. return the minimum value of the `sums` array

Low level:
- If the array has a length of less than 5, RETURN `null`

- initialize a value `sums` = []

- For each number in the array
  - if the sliced array at current index's length is less than 5, break out of loop

  - initialize value `currentSum` = `currentNum`
  - for each of the following numbers up to idx + 5, add them to `currentSum`
  - push `currentSum` to the `sums` array

- return the minimum value in the `sums` array
*/


function minimumSum(numbers) {
  if (numbers.length < 5) return null;

  const sums = [];

  for (let idx = 0; idx < numbers.length; idx += 1) {
    if (numbers.slice(idx).length < 5) break;

    let currentSum = numbers[idx];

    for (let jdx = idx + 1; jdx < idx + 5; jdx += 1) {
      currentSum += numbers[jdx];
    }

    sums.push(currentSum);
  }

  return Math.min(...sums);
}



console.log(minimumSum([1, 2, 3, 4, 5, 6])) // 15

// multiple minimum sums
console.log(minimumSum([4, 5, 6, 7, 8, 9, 10, 8, 1, 2, 9])) // 30

// empty
console.log(minimumSum([])) // null

// less than 5
console.log(minimumSum([1, 2, 3, 4])) // null

// spot test cases
console.log(minimumSum([1, 2, 3, 4])); // null
console.log(minimumSum([1, 2, 3, 4, 5, -5])); // 9
console.log(minimumSum([1, 2, 3, 4, 5, 6])); // 15
console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100])); // 16
console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4])); // -10