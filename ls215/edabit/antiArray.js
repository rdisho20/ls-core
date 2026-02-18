/*
---- PROBLEM STATEMENT
Given two arrays, return whether the two arrays are opposites of each other.
That means both arrays are comprised only from elements a and b and the occurrences of these elements are swapped between the two arrays.

-----

input: 2 arrays
output: boolean, true if opposite, false if NOT opposite

Definitions:
"opposite" array - 
- comprised only from elements a and b (2 elements?) & occurences of these elements are swapped between the two arrays
e.g.
array 1 [1, 2] a, b
array 2 [2, 1] b, a

Questions:
A minimum requirement of an opposite array must be that they are both of the same length? YES
Can input arrays have a length of more than 2? YES
Could I expect an input of a different type than an array? NO
Could I expent that the lengths of the array are different? and how to deal w/?
- YES, and return false (arrays of 2 different lengths cannot be opposite)
Will any of our test cases include more than 2 unqiue elements? NO

Rules:
All tests will include only two different elements.
- Each array will have 2 different types of elements each representing (a & b)
  - arrays are opposite if these 2 values are swapped between the 2 arrays
If input arrays are of different length, RETURN false
Our tests cases will always include 2 arguement arrays

---- DATA STRUCTURE ----
given one of the argument ARRAYs, we can designate a value as a `a` and a value as `b`
- using first input array, we iterate through, building a result ARRAY we use
  to check values against our 2nd array.
  - we do this by iterating through the ARRAY, checking if what's swapped equals what is in the 2nd array,
    at respective positions

ARRAY to iterate through, building ARRAY for checking, iterating through ARRAY to check against 2nd input array

---- ALGORITHM ----
1. first check if input array lengths are not the same; return false if they are not

2. given the first input array,
  - for each value, our first value is `a`
    - if we see a new unique value this is our `b` value
    - once we have both values we can stop looping

3. Now that we have value a & value b, we can build a new array
  - for each value in our first array
    - if it equals `a`, push value `b`
    - if it equals `b`, push value `a`

4. Given our new result array, check if it equals our 2nd array
  - if it equals our second array, return true, otherwise return false

HELPER getAAndB(firstArray) => array

HELPER buildNewArray(firstArray, a, b)

HELPER hasSameValues(builtArray, secondArray)

e.g.
[1, 1, 2, 2] & [2, 2, 1, 1]
1 -> a = 1
1 ..
2 -> b = 1

[2, 2, 1, 1]
1 - push 2
1 - push 2
2 - push 1
2 - push 1

[2, 2, 1, 1] & [2, 2, 1, 1]
2 === 2? yes
..

Low level:
- if arr1.length !== arr2.length, return false

- init variable `a` = invoked function `getAAndB` passing in `arr1`, access idx value 0
- init variable `b` = invoked function `getAAndB` passing in `arr1`, access idx value 1
- init variable `arrayToCheck` = invoked function `buildNewArray` passing in `arr1`, `a` and `b`

- return the return value of invoked function `hasSameValues` passing in `arrayToCheck` & `arr2`

HELPER getAAndB(firstArray) => array
- declare variables `a` assigned to first value in array
- for each value in array starting w/ idx = 1
  - if the current value !== `a`, assign `b` current value
  - return [a, b]

HELPER buildNewArray(firstArray, a, b)
- for each value in firstArray
  - if it equals `a`, push `b`
  - otherwise, push `a`

HELPER hasSameValues(builtArray, secondArray)
- for each value in the built array starting @ idx = 0
  - check if it equals the value at the same index in second Array
  - if it DOES NOT, return false
- loop finishes? return true

*/

function isAntiArray(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const [a, b] = getAAndB(arr1);
  const arrayToCheck = buildNewArray(arr1, a, b);

  return hasSameValues(arrayToCheck, arr2);
}

function hasSameValues(arrayToCheck, arr2) {
  for (let idx = 0; idx < arr2.length; idx += 1) {
    if (arrayToCheck[idx] !== arr2[idx]) return false;
  }

  return true;
}

function buildNewArray(arr1, a, b) {
  const result = [];
  arr1.forEach((element) => {
    if (a === element) result.push(b);
    else result.push(a);
  })

  return result;
}

function getAAndB(arr1) {
  const a = arr1[0];
  let b;

  for (let idx = 1; idx < arr1.length; idx += 1) {
    const currentValue = arr1[idx];

    if (currentValue !== a) {
      b = currentValue;
      
      return [a, b];
    }
  }
}


// same # of swaps
console.log(isAntiArray([1, 1, 2, 2], [2, 2, 1, 1])); // true
console.log(isAntiArray([1, 1, 2, 2], [2, 1, 1, 2])); // false

// different swaps
console.log(isAntiArray([1, 1, 2], [2, 2, 1])); // true
console.log(isAntiArray([1, 1, 2, 1, 1, 2], [2, 2, 2, 2, 2, 1])); // false

// different lengths
console.log(isAntiArray([1, 1, 2, 1], [2, 2, 1])); // false

// additional test cases
console.log(isAntiArray(["1", "0", "0", "1"], ["0", "1", "1", "0"])); // true

console.log(isAntiArray(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"])); // true

console.log(isAntiArray([3.14, true, 3.14], [3.14, false, 3.14])); // false
