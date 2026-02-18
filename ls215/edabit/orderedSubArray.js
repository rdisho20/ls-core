/*
Given two arrays: smarr and bigarr, we say smarr is an ordered subarray of bigarr if all the elements of smarr can be found in bigarr, and in the same order.

Examples:
[4, 3, 2] is an ordered subarray of [5, 4, 3, 2, 1].
[5, 3, 1] is an ordered subarray of [5, 4, 3, 2, 1].
[5, 3, 1] is not and ordered subarray of [1, 2, 3, 4, 5] since elements are not in the same - [1, 2, 3] is an ordered subarray of [3, 2, 1, 2, 3].

Write a function that, given arrays smarr and bigarr, decides if smarr is an ordered subarray of bigarr.

input: 2 arrays: smallArr & bigArr
output: boolean
- true if small array is ordered subarray of big array
- false if NOT

Rules:
1. The small array is ordered subarray of big array as long as long as all elements in small array can be found in big array in the same order
2. bigArray will always be longer than smallArray
3. If smallArray is empty, return `false`, if both arrays are empty, return `null`
4. If elements have same exact elements & in same exact order, return `true`

Questions:
Can I expect smallArray arguement to be bigger than bigArray argument? NO
Will each element in the arrays be numbers or can there be different types like strings or collection? they will all be numbers
Can I expect the small arguement array to be empty or both be empty? YES
- if small array empty, return `false`
- if both empty, return `null`
What if both arrays have the same exact elements in the same exact order? return `true`

---- DATA STRUCTURE ----
How do I keep track of whether in correct order or not?

copybig array
when a value in small array equals value in big array, push it to `result` ARRAY

example
[1, 4, 9] & [1, 3, 4, 5, 7, 9] -- [1, 4, 9] true
1 -> 1, break
4 == 3? NO, splice out 3 from big array
4 -> 4, break
9 == 5? NO, splice out 5
9 == 7? NO, splice out 7

if big array has all value spliced out (empty array) -> return false
if big array length is less than small array -> return false
if big array length is === small array length -> true

example 2
[1, 4, 9, 10] & [1, 4, 10, 9, 11] -- [1, 4, 9] false
1 -> 1
4 -> 4
9 == 10? NO, splice out 10
9 == 9? -> 9
10 == 11? NO, splice out 11

USE copied big ARRAY for splicing, iterate over small ARRAY
all the while building a result ARRAY to check against small array
(3 arrays)

---- ALGORITHM ----
High level:
1. If small array && big array are empty, return null

2. If small array is empty, return false

3. make a copy of the big array

4. for each value in the small array
  - for every value in big array (jdx = idx)
    - if the value @ jdx === `undefined` break out of loop
    - if value is equal to the corresponding value in big array (same index), push it to a result array, break out of sub for loop
    - if value is not equal to corresponding value in big array, splice out value at corresponding index in big array, CONTINUE to next value in small array (jdx DOES NOT INCREMENT OR DECREMENT)

5. check if big array is empty, return false

6. if big array length is less than small array length, return false

7. if big array length is same length as small array, return true (we have all same values in same order)

for idx in small array
seen (10,)
[1, 4, 9, 10] & [1, 4, 9, 11] -- [1, 4, 9]
1 (idx 0)
1 -> 1 (jdx 0)
4 (idx 1)
4 -> 4 (jdx 1)
9 (idx 2)
9 != 10 splice out 10 (jdx 2)
9 -> 9 (jdx 2)
10 (idx 3)
10 != 11 splice out 11 (jdx 3)
10 != undefined (if value is undefined, we've reached end of sub loop)

Low level:
- if length of both small and big arrays are empty (=== 0?) => return `null`
- if small array length === 0, return false

- init variable bigArrCopy = sliced bigArr
- init variable `result` = []

- for each value in small array (idx = 0)
  - init value smallArrValue = smallArr[idx]
  - for each value in big array (jdx = idx)
    - init value bigArrValue = bigArr[jdx]
    - if bigArrValue === undefined, BREAK
    - if smallArrValue === bigArrValue, push to `result` array, BREAK
    - if bigArrValue !== smallArrValue, splice out 1 value in bigArrCopy @ jdx

- if bigArrCopy is empty (length === 0), return false
- if result length less than smallArr length, return false
- if result length === smallArr length, return true
*/


function isOrderedSub(smallArr, bigArr) {
  if (smallArr.length === 0 && bigArr.length === 0) return null;
  if (smallArr.length === 0) return false;

  const bigArrCopy = bigArr.slice();
  const result = [];

  for (let idx = 0; idx < smallArr.length; idx += 1) {
    const smallArrValue = smallArr[idx];

    for (let jdx = idx; ; ) {
      const bigArrValue = bigArrCopy[jdx];

      if (bigArrValue === undefined) break;
      if (smallArrValue === bigArrValue) {
        result.push(bigArrValue);
        break;
      }
      if (smallArrValue !== bigArrValue) bigArrCopy.splice(jdx, 1);
    }
  }

  if (bigArrCopy.length === 0) return false;
  if (result.length < smallArr.length) return false;
  if (result.length === smallArr.length) return true;
}

// happy path
console.log(isOrderedSub(
  [1, 4, 9], [1, 3, 4, 5, 7, 9]
))
// true

console.log(isOrderedSub(
  [1, 4, 9], [1, 4, 9]
))
// true

console.log(isOrderedSub(
  [1, 4, 9, 10], [1, 4, 10, 9, 11]
))
// false


// empty smallArr
console.log(isOrderedSub(
  [], [1, 4, 10, 9, 11]
))
// false


// both empty
console.log(isOrderedSub(
  [], []
))
// null

// additional test cases (not mine)
console.log(isOrderedSub([4, 3, 2], [5, 4, 3, 2, 1])); //➞ true

console.log(isOrderedSub([5, 3, 1], [5, 4, 3, 2, 1])); //➞ true

console.log(isOrderedSub([5, 3, 1], [1, 2, 3, 4, 5])); //➞ false

console.log(isOrderedSub([1, 2, 3], [3, 2, 1, 2, 3])); //➞ true