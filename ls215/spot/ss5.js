// Find the Lowest Neighbor of a 2D Array Element
// Create a function that returns the lowest neighbor of a given (x, y) coordinate element in a 2D array. The function will be passed three parameters.

//  arr,  x,  y
// arr will be a 2D array holding integer values and will always be symmetrical in size (e.g. 2x2, 3x3, 4x4).
// x will hold the row coordinate, while y will hold the column coordinate.
// You will have to check the horizontal, vertical and diagonal neighbor elements. If there isn't any lower neighbors, return the value of the given (x, y) coordinate.

/*
input: 3 args: 2 dimensional array, x coordinate & y coordinate (int, int)
- 2d array 
output: return lowest neighbor of given (x, y) coordinate element

Rules:
1. 2d array will always be symmetrical (2x2, 3x3, 4x4 etc)
2. 2d array contains subarrays representing rows, and the elements of those sub arrays are integers
3. you are required to check horizontal, vertical & diagonal neighbor elements
4. if there aren't any lower neighbors, return value of given (x,y) coordinate
5. to find the integer element given in the coordinates, find the row using x, then use y to find column
  - from here can get left, right, up, down, diagonal left up, diagonal left down, diagonal right up, diagonal right down
6. If either of the coordinates are greater than it's cooresponding array length, return null
  - x > length of 2D array? => null
  - y > length of subarray? => null

Questions:
Does the x y coordinate represent a single point in the input 2D array? YES
From which corner do our coordinates start?  UPPER LEFT QUADRANT
What would constitute no lower neighbors?  if all neighbors are 7?  is that not the lowest neighbor?

---- DATA STRUCTURE ----
Use 2dimensional ARRAY as is
- find element at given (x,y) coordinates
  - left => x, y - 1
  - right => x, y + 1
  - up => x - 1, y
  - down => x + 1, y
  - D left up => x - 1, y - 1
  - D left down => x + 1, y - 1
  - D right up => x - 1, y + 1
  - D right down => x + 1, y + 1

---- ALGORITHM ----
High level:
1. If either of the coordinates are greater than the 2D array, return null (symmetrical grid so just check 1 length);

get NEIGHBORING using getNeighboring & getCoord
2. Given the input array and coordinate arguements, build array with neighboring elements

3. sort the neighboring elements array, least -> greatest

4. if least is greater than the element at the coordinate, RETURN the element at argument coordinate

5. if least is less than the element at the coordinate, return the lowest value of the neighboring elements array (arr[0])

HELPER getNeighboringElements(array, x, y)
- start w/ a neighboring elements array equal to an empty array
- For each value (left, right, up ETC) IF the value is NOT undefined, push it to the neighboring elements array
- RETURN the neighboring elements array sorted (a - b)

HELPER getCoordinateElement(array, x, y)
- return array[x][y]

Low level:
- if either of the coordinates are greater than or equal to the length of the input array, return null
- initialize a value `neighboringElements` equal to the return value of invoked function `getNeighboringElements` passing in 2D array and coordinate arguments
- initialize a value `lowestNeighbor` = to neighboringElements[0]
- initialize a value `coordinateElement` = to inputArray[x][y]
- IF coordinate element is less than it's lowest neighbor, return `coordinateElement`
- OTHERWISE return `lowestNeighbor`
*/

function getNeighboringElements(array, x, y) {
  const left = array[x] ? array[x][y - 1] : undefined;
  const right = array[x] ? array[x][y + 1] : undefined;
  const up = array[x - 1] ? array[x - 1][y] : undefined;
  const down = array[x + 1] ? array[x + 1][y] : undefined;
  const dLeftUp = array[x - 1] ? array[x - 1][y - 1] : undefined;
  const dLeftDown = array[x + 1] ? array[x + 1][y - 1] : undefined;
  const dRightUp = array[x - 1] ? array[x - 1][y + 1] : undefined;
  const dRightDown = array[x + 1] ? array[x + 1][y + 1] : undefined;
  const neighboringElements = [
    left, right, up, down, dLeftUp, dLeftDown, dRightUp, dRightDown
  ];

  return neighboringElements
    .filter(element => element !== undefined)
    .sort((a, b) => a - b);
}


function lowestElement(array, x, y) {
  if (x >= array.length || y >= array.length) return null;

  const neighboringElements = getNeighboringElements(array, x, y);
  const lowestNeighbor = neighboringElements[0];
  const coordinateElement = array[x][y];

  if (coordinateElement <= lowestNeighbor) return coordinateElement;

  return lowestNeighbor;
}


// Examples
console.log(lowestElement([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
], 1, 1)); // 1

/*
[
  [1, 2, 3]
  [4, 5, 6]  // (1, 1) holds the integer 5. Check the surrounding neighbors.
  [7, 8, 9]
]
*/

console.log(lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 0, 0)); // -1

/*
[
  [9, 8, 7]   // (0, 0) holds the integer 9. Check the surrounding neighbors.
  [0, -1, -3]
  [-5, -9, 54]
]
*/

// coordinates greater than size of array
console.log(lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 3, 3)); // null


// no lower neighbors
console.log(lowestElement([
  [9, 8, 7, -10],
  [0, -1, -3, 4],
  [-5, -9, 54, 3],
  [4, 5, -10, 7]
], 3, 2)); // -10

console.log(lowestElement([
  [9, 8, 7],
  [0, -1, -3],
  [-5, -9, 54]
], 2, 2)); // -9