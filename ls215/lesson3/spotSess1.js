/*
// Create a function that takes an array of numbers as an argument. For each number
// determine how many numbers in the array are smaller than it, and place the answer
// in an array. Return the resulting array.
// When counting numbers, only count unique values. That is, if a number occurs
// multiple times in the array, it should only be counted once.

input: array of numbers
output: array of numbers representing the count of UNIQUE numbers that are smaller
  than each corresponding number in the input array

- Rules & Requirements:
  - numbers can positive and negative
  - count duplicate numbers only once
  - the input will always be an array of positive and negative numbers, or 0

---- DATA STRUCTURE ----
- input array used for iteration

---- ALGORITHM ----
High Level:
1. Given an input array of numbers
  - For each number I find all values that are less then that number
  - For each of these smaller numbers,
    - I need to remove any duplicates
  - Once the duplicates are removed, I can count the 'unique' smaller numbers
  - push the count to a `result` array
2. return the `result` array

HELPER FUNCTION: removeDuplicates(numArr)
  - HELPER FUNCTION: getUniqueNumbers(numArr)

HELPER FUNCTION: getSmallerNumbers(number)

----

Low level:
- For each number in `numArr`, I can transform the array using `map`
  - Given the current number, `getSmallerNumbers(currentNum)` return value (array)
    initialized to a `smaller` variable
  - set the `smaller` variable to return value of `removeDuplicates(smaller)`
  - return the length of `smaller`, buidling the new array returned by `map`

return `result` array;

HELPER Low Level getSmallerNumbers(number, numArr):
- sort `numArr` from smaller to largest
- initialze value `idx` set equal to the index of the first occuence of `number`
- return the slice of `numArr` array ending @ `idx` non-inclusive

HELPER Low Level getUniqueNumbers(numArr)
- given the `numArr`, create a new `Set` object using this array assigned to `numSet`
- return the `size` (instance property) of the `numSet` object

*/

function getSmallerNumbers(number, numArr) {
  numArr = numArr.slice();
  numArr.sort((a, b) => a - b);
  const index = numArr.indexOf(number);

  return numArr.slice(0,index);
}

function getUniqueNumbers(numArr) {
  const uniqueValues = new Set(numArr);

  return uniqueValues;
}

function smallerNumbersThanCurrent(numbers) {
  return numbers.map((num, _, array) => {
    const smallerNums = getSmallerNumbers(num, array);
    const uniqueValues = getUniqueNumbers(smallerNums);
    
    return uniqueValues.size;
  })
}


// Examples:
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // Expected output: [3, 0, 1, 1, 2]
console.log(smallerNumbersThanCurrent([7, 7, 7, 7]));    // Expected output: [0, 0, 0, 0]
console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));    // Expected output: [2, 1, 0, 3]
console.log(smallerNumbersThanCurrent([1]));             // Expected output: [0]

// // when the numbers are negative
console.log(smallerNumbersThanCurrent([1, -4, -5]));             // Expected output: [2, 1, 0]
console.log(smallerNumbersThanCurrent([1, 9, 0, -5]));             // Expected output: [2, 3, 1, 0]