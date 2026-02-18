/*
This challenge concerns square matrices (same number of rows and columns) as the below example illustrates:
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
The entries in the diagonal line from the top left to the bottom right form the main diagonal of the matrix. In this case, 1,5,9 form the main diagonal.

Write a function that returns the matrix obtained by replacing the entries above the main diagonal with 0s.

For example, for the matrix above you should return:
[
  [1, 0, 0],
  [4, 5, 0],
  [7, 8, 9]
]

input: 2D array representing a square matrix
- square matrix can be 2x2, 3x3, 4x4, etc
output: 2D array representing square matrix, w/ entries above "main diagonal" replaced w/ 0s

Rules:
- "main diagonal" starts top left corner, ends @ bottom right corner
- input 2d array represents square matrix: 2x2, 3x3, 4x4, etc
  - each index of outer array accesses a ROW
  - accessing index of a subarray accesses a COLUMN
- Points of the main diagonal occur at the same column & row index
  e.g. 3x3 => 0, 0 .. 1, 1 .. (2, 2)
- NO changes ever made to the last row of the matrix ****

Questions:
- Can I always expect a square matrix? YES
- Can I always expect a valid input of array data type? YES

---- DATA STRUCTURE ----
Given length :: array (represents # :: rows & columns)
iterating through ARRAY up to the length
- if we are at idx position 0, all numbers > than the current index in respective rows become `0`

---- ALGORITHM ----
1. Given the input array, copy it

2. Using the copy, manipulate it so that each element above the main diagonal becomes `0`
  - for each row (starting @ idx = 0) up to last row minus 1 (because not changing last row at all)
    - then for each column starting at jdx = idx + 1
      - reassign that value to `0` in the copied array

3. return copied array

[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
[1, 2, 3]
@ idx (0)
jdx = idx + 1
         -> jdx 1 -> 2 => 0
jdx += 1 -> jdx 2 -> 3 => 0

@ idx (1)
jdx = idx + 1
         -> jdx 2 -> 6 => 0

Low level
- initialize value `arrCopy` copying the input array using slice

- for each ROW (row = 0) up to the length of last row MINUS 1
  - for each COLUMN (col = row + 1) up to the last column
    - reassign the value @ the current row & column to `0`

- return `arrCopy`
*/


function lowerTriangle(array) {
  const arrCopy = array.slice();

  for (let row = 0; row < arrCopy.length - 1; row += 1) {
    for (let col = row + 1; col < arrCopy.length; col += 1) {
      arrCopy[row][col] = 0;
    }
  }

  return arrCopy;
}


console.log(lowerTriangle(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
))

/*
[
  [1, 0, 0],
  [4, 5, 0],
  [7, 8, 9]
]
*/


console.log(lowerTriangle(
  [
    [1, 2, 3, 9],
    [4, 5, 6, -1],
    [7, 8, 9, 10],
    [-2, -3, 0, 1]
  ]
))

/*
[
  [1, 0, 0, 0],
  [4, 5, 0, 0],
  [7, 8, 9, 0],
  [-2, -3, 0, 1]
]
*/


console.log(lowerTriangle(
  [
    [5, 7],
    [7, 9]
  ]
))

/*
[
  [5, 0],
  [7, 9]
]
*/