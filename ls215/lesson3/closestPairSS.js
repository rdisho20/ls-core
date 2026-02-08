/*
Write a function that takes an array of numbers and returns an array containing the two numbers from the input array that are closest to each other in value. If there is a tie, return the pair that appears first in the original array.

P:
- Input: an array of numbers
- Output: an array of two numbers that closest in value from the input array

Question:
- What is a tie? if the difference between all the pairs is the same
- the input array will always be an of integers
- the input array will be in any order
- the paired numbers do not adjucent 
- the order of the output array matter

Data Structure:
n/a

[1, 2, 3, 6]
[[1, 2], [1, 3], [1, 6], [2, 3], [2, 6], [3, 6]]
Algorithm:
1. Iterate over the input array using nested loops
2. Use a `pair` and `difference` variable to keep track of the closest pair yet
3. Return `pair`
-------------------
Detailed:
1. Initalize `pair` to undefined
2. Initialize `difference` Infinity
4. Iterate over the array start from the idx = 0
 - Iterate from idx + 1
 - If the current number - next number is smaller than `difference`:
   - Update `difference` to the current difference
   - Update `pair` to [next number, current number]
5. Return `pair`
*/

function closestPair(numbers) {
  let currentSmallestPair;
  let difference = Infinity;

  for (let idx = 0; idx < numbers.length - 1; idx += 1) {
    const first = numbers[idx];

    for (jdx = idx + 1; jdx < numbers.length; jdx += 1) {
      const second = numbers[jdx];

      if (difference > Math.abs(first - second)) {
        difference = Math.abs(first - second);
        currentSmallestPair = [first, second];
      }
    }
  }

  return currentSmallestPair;
}


// The two closest numbers are 15 and 11, with a difference of 4.
console.log(closestPair([5, 25, 15, 11, 20]));    // [15, 11]

// The two closest numbers are 1 and 2 (difference of 1).
// 99 and 100 also have a difference of 1, but [1, 2] is the first pair found.
console.log(closestPair([1, 100, 50, 2, 99]));      // [1, 2]

// A simple case with only two numbers.
console.log(closestPair([10, 20]));                 // [10, 20]

// Negative numbers and zero. The closest pair is -1 and 1.
console.log(closestPair([50, -1, 10, -5, 1]));      // [-1, 1]

let p = console.log;
p(closestPair([1, 2, 3, 6])); // [1, 2]
p(closestPair([1, 2, 3, 6])); // [1, 2]
p(closestPair([1, 4, -3, 6])); // [4, 6]
p(closestPair([-1, -2, -3, -6])); // [-1, -2]
p(closestPair([1, 0, 3, 6])); // [1, 0]
p(closestPair([1, 5, 3])); // [1, 3]
p(closestPair([1, 6])); // [1, 6]