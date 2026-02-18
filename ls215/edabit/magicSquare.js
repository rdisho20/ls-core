/*
In recreational mathematics, a square array of numbers, usually positive integers, 
is called a magic square if the sums of the numbers in each row, each column, and both main diagonals are the same.

Create a function that takes a square 2D array as an argument and returns a Boolean (if it is: true, if it isn't: false).

input: 2D square array of numbers (2x2, 3x3, 4x4 etc)
output: boolean (true if magice square, false if NOT magic square)

Rules:
"magic square" is a square array where sums of integers of each ROW, COLUMN & MAIN DIAGONAL are equal
Square array of numbers will have all positive integers
Each subarray represents a row of numbers
Columns are represented by each index of the sub array
Main diagonal starts at top left corner & ends at bottom right corner

Questions:
Can I expect a non square input 2dArray? NO
Will all integers be positive? YES
will the argument input always be a 2d array? YES

---- DATA STRUCTURE ----
Given a 2D array
- I want to build a columns ARRAY
  - so that for each I can get the sums
- I want to build a main diagonal ARRAY
  - so that I can get the sum
- use the existing 2D ARRAY
  - get sums of all rows

---- ALGORITHM ----
2. Given the input array
  - build a columns array

3. for each array in the inputArray, get their sums

4. for each array in the `columns` array, get their sums

5. get main diagonal sum

6. concat `columnSums` to `rowSums` then push the `mainDiagonalSum` to resulting array

7. check if all values in sumsArray are equal, IF so return true, IF NOT return false

HELPER: getColumns(inputArray)
- build starter array (for columns) passing in the length of the inputArray
- while mainIndex < length of the starter array
  - for each array in input array (idx = 0)
    - add element @ mainIndex :: current array @ idx to array at current corresponding index (idx) of starter 2D array
  - increment the mainIndex by 1

HELPER: getMainDiagonalSum(inputArray)
- inti variable `result` = []
- for each array in 2D inputArray (idx = 0)
  - add the value at `idx` of the array to `result`

- return sum reduced from `result`

HELPER: getStarter(n)
- init variable `starter` = []
- for every number up to n (exclusive)
  - push a `[]` to `starter`
- return starter

HELPER: allSame(sumsArray)
- for each value starting at the second idx
  - if it is not equal to the previous value, return false
- if loop finishes w/o returning false, return true

HELPER getSums(row or column 2D array)
- for each array in the 2D array
  - reduce it to its sum value

- return the array passed as the argument

Low level:
init variable `columnsArray` = invoking `getColumns()` passing in input array
init variable `rowSums` = `getSums()` passing in `array`
init variable `columnSums` = `getSums()` passing in `columnArray`
init variable `mainDiagonalSum` = `getMainDiagonalSum()` passing in input array
init variable `sums` = concating `columnSums` to `rowSums`, pushing `mainDiagonalSum` to the end
return the value returned by calling `allSame()` passing in `sums`
*/

'use strict';

function isMagicSquare(array) {
  const columnsArray = getColumns(array);
  const rowSums = getSums(array);
  const columnSums = getSums(columnsArray);
  const mainDiagonalSum = getMainDiagonalSum(array);
  const sums = rowSums.concat(columnSums);
  sums.push(mainDiagonalSum);
  
  return allSame(sums);
}

function allSame(sumsArray) {
  for (let idx = 1; idx < sumsArray.length; idx += 1) {
    if (sumsArray[idx] !== sumsArray[idx - 1]) return false;
  }

  return true;
}

function getSums(array) {
  return array.map(arr => {
    return arr.reduce((sum, number) => sum += number);
  });
}

function getMainDiagonalSum(array) {
  const result = [];
  
  for (let idx = 0; idx < array.length; idx += 1) {
    const value = array[idx][idx];
    result.push(value);
  }

  return result.reduce((sum, number) => sum += number);
}

function getColumns(array) {
  let columns = getStarter(array.length);
  let mainIndex = 0;

  while (mainIndex < array.length) {
    for (let idx = 0; idx < array.length; idx += 1) {
      const arr = array[idx];
      columns[idx].push(arr[mainIndex]);
    }

    mainIndex += 1;
  }

  return columns;
}

function getStarter(n) {
  const starter = [];
  
  for (let idx = 0; idx < n; idx += 1) {
    starter.push([]);
  }

  return starter;
}

console.log(isMagicSquare([
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1]
])); // true

console.log(isMagicSquare([
  [2, 1, 1],
  [1, 1, 1],
  [1, 1, 2]
])); // false

console.log(isMagicSquare([
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
])); // true

console.log(isMagicSquare([
  [16, 3, 2, 13],
  [5, 10, 11, 8],
  [9, 6, 7, 12],
  [4, 15, 14, 1]
])); // true

console.log(isMagicSquare([
  [1, 14, 14, 4],
  [11, 7, 6, 9],
  [8, 11, 10, 5],
  [13, 2, 3, 15]
])); // false