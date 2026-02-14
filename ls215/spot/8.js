/*
Create a function that takes a list of integers as an argument and returns an array of the two numbers that are closest together in value. 
If there are multiple pairs that are equally close, return the pair that occurs first in the list.

input: array of integers
output: array of 2 numbers closest together in value from array of integers

Rules:
1. If there are multiple pairs that are equally close, return pair occuring first
2. If get input array of 2 numbers, return the input array as-is

Questions:
1. Will I get an input array of at least 2 numbers?  YES
2. Will I need to account for a different data type for input, and how to deal with?  NO

---- DATA STRUCTURE ----
Given an array of integers, iterate over the ARRAY to get pairs
Using that ARRAY of pairs, we can determine their 'closeness' values

---- ALGORITHM ----
High Level:
1. Given an array of integers, build an array of pairs so that we can check their 'closeness' values

2. using the pairs array, reduce each element to their difference (represents the closeness value)

3. get the index of the minimum value from the closeness values array

4. return the element at that index from the pairs array

HELPER getPairs(inputArray)
HELPER getClosenessValues(pairsArray)

e.g.
[1, 5, 7, 12] -> [[1, 5], [5, 7], [7, 12]] -> using reduce [4, 2, 5], idx 1 has `min` value -> [5, 7]

Low level:
- initialize variable `pairs` = invoked function `getPairs(inputArray)`
- initialize variable `closenessValues` = invoked function `getClosenessValues(pairs)`
- initialize a variable `minimumCloseness` = the minimum value in `closenessValues`
- initialize variable `minIdx` = the closenessValues.indexOf(minimumCloseness) -- to get correct index

- return the value in `pairs` @ `minIdx`

HELPER getPairs(inputArray)
- `result` = []
- for each number in array starting at idx = 0 up to less than its length minus 1
  - get the number at current index, and next index assigned as 2 elements in a new array respectively
  - push this new array to `result`
- return `result`

HELPER getClosenessValues(pairsArray)
- `result` = []
- for each pair in the pairs array
  - reduce the array to the pair's difference passing in `num - diff` into Math.abs()
  - push this value to the `result` array
- return the result array
*/

function closestNumbers(numbers) {
  if (numbers.length === 2) return numbers;

  const pairs = getAllPossiblePairs(numbers);
  const closenessValues = getClosenessValues(pairs);
  const minimumCloseness = Math.min(...closenessValues);
  const minIdx = closenessValues.indexOf(minimumCloseness);

  return pairs[minIdx];
}

function getAllPossiblePairs(numbers) {
  const pairs = [];

  for (let idx = 0; idx < numbers.length - 1; idx += 1) {
    for (let jdx = idx + 1; jdx < numbers.length; jdx += 1) {
      pairs.push([numbers[idx], numbers[jdx]]);
    }
  }

  return pairs;
}

function getClosenessValues(pairs) {
  const values = [];

  for (let pair of pairs) {
    values.push(pair.reduce((diff, num) => {
      return Math.abs(num - diff);
    }));
  }

  return values;
}



console.log(closestNumbers([1, 5, 7, 12])) // [5, 7]

// w/ negative number
console.log(closestNumbers([-1, 5, 7, 12])) // [5, 7]

// 2 elements in input array
console.log(closestNumbers([1, 2])); // [1, 2]

// multiple w/ same 'closest together' value
console.log(closestNumbers([1, 2, 3, 5, 9])) // [1, 2]

// additional tests from SPOT wiki
console.log(closestNumbers([5, 25, 15, 11, 20])); // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17])); // [12, 7]
