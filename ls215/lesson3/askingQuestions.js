'use strict';

// 1
/*
Can the input array have only 1 element?
Can elements in the input array be a different data type other than a string?
- How should I handle elements of a different data type? should the program stop executing and log an Invalid Input message?
Can the input array be empty?
Could the second argument be a negative number or zero, and how do should I deal with these inputs?
Could the second arguement be of a different data type other than an integer, and how should I deal w/ those inputs?
Is the distinct string case-sensitive? ('cat' is distinct from 'Cat'?)
Can a string be an empty string?
Can the string have more than one character?
If there are no distinct strings, should I return ''?
*/

// 2
/*
input: array of integers
output: integer; third largest number in the array

Questions:
If I'm not allowed to sort the array, can I build my own array and sort that one?
Can the input array be empty?  How to deal w/ that?
Can the input array have less than 3 numbers?  How to deal w/ that?
Can the input array have elements of a different data type?  How to deal w/ that?
Can there be additional arguments?  How to deal with that?
Can the numbers be floats?

Rules:
1. Input always an array, can be empty, can contain less than 3 numbers
2. If there is no 3rd largest number, return the largest
3. If an array is empty, return null
4. Cannot sort the array
5. a same number in an array constitutes for one account of 'number'

---- TEST CASES
// negative, zero, positive
thirdMax([1, 2, 3, 4, 0, -1]);
thirdMax([1, 2, 3, 3, 10, -2, -1]);
thirdMax([0, 4, 5, 5.5]);

// no 3rd largest
thirdMax([1, 2]);

// duplicate numbers no 3rd largest
thirdMax([1, 2, 2]);

// empty array and less than 3 elements
thirdMax([20, 23]);
thirdMax([]);

---- DATA STRUCTURE
- Iterate through an ARRAY of numbers
  - can use iterations to assign values of 'largest', 'secondLargest' & 'thirdLargest'

---- ALGORITHM
High Level:
- If the array is empty, return null
1. Given an array of numbers, assign the `largest` varialbe to the first value in the array
2. Use `largest` value to compare integers in the array, iterating starting at `idx` = 1
3. If the value is greater than the largest, assign `largest` to `secondLargest`
  then assign the current number to `largest`
4. If the value is less than `largest`, check if it is greater than `secondLargest`
  If it is greater than `secondLargest`, assign `secondLargest` to `thirdLargest`
  then assign `secondLargest` to the current value in the array
5. If `thirdLargest` is still `-Infinity`, we do not have a 3rd largest number, therefore return `largest`
  OTHERWISE we return `thirdLargest`

Low Level:
- Given an array of intgers, check the length of the array
- IF the array's length === 0, return null
- IF the array's length === 1, return arr[0]

- initialize a variable `largest` equal to the first element in the array (arr[0])
- itialize variables `secondLargest` and `thirdLargest` to -Infinity

- for each value in the array starting at `idx` = 1
  - IF the value is greater than `largest`,
    - assign `largest` to `secondLargest`
    - assign current value to `largest`
  - ELSE IF the value is greater than `secondLargest`
    - assign `secondLargest` to `thirdLargest`
    - assign current value to `secondLargest`
  - ELSE IF value is greater than `thirdLargest`
    - assign current value to `thirdLargest`

- IF `thirdLargest` === `-Infinity`, return `largest`
- OTHERWISE return `thirdLargest`

HELPER: isLarger (num1, num2)
return num1 > num2

----

function isLarger(num1, num2) {
  return num1 > num2;
}

function thirdMax(arr) {
  if (!arr || arr.length === 0) return null;
  else if (arr.length === 1) return arr[0];

  let largest = arr[0];
  let [secondLargest, thirdLargest] = [-Infinity, -Infinity];

  for (let idx = 1; idx < arr.length; idx += 1) {
    let currentValue = arr[idx];

    if (isLarger(currentValue, largest)) {
      if (isLarger(largest, secondLargest)) {
        if (isLarger(secondLargest, thirdLargest)) {
          thirdLargest = secondLargest;
        }
        secondLargest = largest;
      }
      largest = currentValue;

    } else if (isLarger(currentValue, secondLargest)) {
      if (isLarger(secondLargest, thirdLargest)) {
        thirdLargest = secondLargest;
      }
      secondLargest = currentValue;

    } else if (isLarger(currentValue, thirdLargest)) {
      thirdLargest = currentValue;
    }
  }

  console.log(thirdLargest);
  if (thirdLargest === -Infinity) return largest;
  
  return thirdLargest;
}

// negative, zero, positive, floats
// console.log(thirdMax([1, 2, 3, 3, 10, -2, -1])); // 2
// console.log(thirdMax([0, 4, 5, 5.5])); // 4

// duplicates
// console.log(thirdMax([1, 1, 3, 4, 0, -1])); // 1

// no 3rd largest
// console.log(thirdMax([1, 2])); // 2
// console.log(thirdMax([20, 23])); // 23
// console.log(thirdMax([100])); // 100

// duplicate numbers no 3rd largest
// console.log(thirdMax([1, 2, 2])); // 2

// empty array
// console.log(thirdMax([])); // null

// no args
// console.log(thirdMax()); // null
*/


// 3
/*
input: string
output: array of prime numbers

Questions:
Can we expect inputs other than strings?  How to handle that?
String input w/o numbers? How to deal w/
Empty string as input? How to deal w/
Can we expect float substrings in input?  If so how to deal w/ that?
Can we expect multiple arguments? How to deal w/?
Can we expect no arguments? How to deal w?
What if no prime numbers present? How to deal w?
Will there be negative numbers? How to deal w?

---- Example Test Cases
console.log(primeNumberPrinter("a4bc2k13d")); // [2, 13]

// no prime
console.log(primeNumberPrinter("ad1c4k6jk")); // []

// no numbers present
console.log(primeNumberPrinter("adckjk")); // []

// empty string
console.log(primeNumberPrinter("")); // []

// negative numbers (treat as positive)
console.log(primeNumberPrinter("a4bc-2k-13d")); // [2, 13]

---- DATA STRUCTURE
array

---- ALGORITHM
High level:
1. Isolate the number substrings from the input string w/ a helper function
2. Iterate of the numbers array checking if each number is prime or not w/ helper function
  - IF it is, add it to a result array

HELPER: getNumbers(string) w regex /[^\d]/
HELPER: isPrime(number)

Low level:
- Given a string, invoke getNumbers passing in string argument & assign return value to `numbers`
- initialize `result` variable = to `[]`

- For each number,
  - IF number isPrime, push the value to the result array

- return result

HELPER: getNumbers(string) w regex /[^\d]/
- given the input string, split it at regex, assign it to `numbers`

- return a mapped filtered numbers array removing all empty strings
  - map, convert all values to numbers
  - filter w/ !Number.isNaN()

HELPER: isPrime(number)
- For number 1 up to number / 2 floored
- Check if `number` can be divided by the `currentFactor` evenly, IF so return false

- If loop finishes, return true


function getNumbers(string) {
  return string
    .split(/[\D]/)
    .map(number => parseInt(number, 10))
    .filter(number => !Number.isNaN(number));
}

function isPrime(number) {
  if (number === 1) return false;

  for (let currentFactor = 2; currentFactor <= number / 2; currentFactor += 1) {
    if (number % currentFactor === 0) {
      return false;
    }
  }

  return true;
}

function primeNumberPrinter(string) {
  const numbers = getNumbers(string);
  const primeNumbers = [];
  
  numbers.forEach(number => {
    if (isPrime(number)) primeNumbers.push(number);
  })

  return primeNumbers;
}

console.log(primeNumberPrinter("a4bc2k13d")); // [2, 13]

// no prime
console.log(primeNumberPrinter("ad1c4k6jk")); // []

// no numbers present
console.log(primeNumberPrinter("adckjk")); // []

// empty string
console.log(primeNumberPrinter("")); // []

// negative numbers (treat as positive)
console.log(primeNumberPrinter("a4bc-2k-13d")); // [2, 13]
*/


// 4
/*
input: 2 dimensional array
output: flattened array w/ duplicate elements removed

Question:
1 Dimensional array input w/ elements?  How to handle?
2 dimensional array w/ empty nested arrays?  How to handle?
How to handle empty array input as an argument?
Can an element be any type?
- If an element is an object, copy the reference or copy value? *reference*
- If an element is an array, copy the reference or copy the value? *reference*
Can a string element be any length?
Are string elements case sensitive? (duplicate are only if same case)
How to handle the 2 dimensional array w/ 3 or more elements?
Can the nested arrays be empty arrays?  How to handle?

Rules:
1. if element is a number and another is the string version of the number, treat as duplicate, remove String version
2. elements can be of any type, if array or object, check for equality, if same object in memory, remove the duplicate
3. array flattened, w/ elements appearing in same order as in their corresponding argument array, from left to right
4. may contain falsy values such as (NaN, undefined, null) or even booleans (true, false)

---- EXAMPLE / TEST CASES
// empty or valid arrays
flattenAndUnique([]); // []
flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']]); // [1, 2, 3, 4, 5, 'a']

// 1 dimension
flattenAndUnique([1, 2, 3]); // []

// w/ non-primitive elements
flattenAndUnique([[1, 2], [2, {'a': 1, 'b': 2}]]); // [1, 2, {'a': 1, 'b': 2}]

// w/ any thing of string
flattenAndUnique([['hello', 'world'], ['hello world', 'hello']]); // ['hello', 'world', 'hello world']

// w/ 3 or more nested arrays
flattenAndUnique([[1, 2, 3], ['3', 4, 5,], [7, 8, 9]]); // [1, 2, 3, 4, 5, 7, 8, 9]

// empty nested array
flattenAndUnique([[], [1, 2, 3]]); // [1, 2, 3]
flattenAndUnique([[], []]); // []

// same object in memory
let obj = {'first': 1, 'second': 2};
flattenAndUnique([[1, 2, obj], [2, 5, 7, obj, 9]]); // [1, 2, {'first': 1, 'second': 2}, 5, 7, 9]

// booleans & falsy values
flattenAndUnique([[1, 2, true, '3'], ['3', 3, 5, true]]); // [1, 2, true, 3, 5, 'a']
flattenAndUnique([[1, 2, true, NaN], [NaN, undefined, true, false, undefined]]); // [1, 2, true, NaN, undefined, false];

---- DATA STRUCTURE ----
iterate over the array using itself; forEach method
- for each element in the array we can perform some action,
  checking if the value is already in the result array,
  and if not we can push the value to the result array,
  if it is, we can do nothing
  
---- ALGORITHM ----
High Level:
1. We can first check if the array is empty, if it is, we return `[]`
2. Next, we can iterate over each element per the length of the array, checking if indeed each element
  is an array => we are dealing w/ a two dimensional array.  If at least one is not, we return a `null`
  value because it cannot be flattened appropriately w/ `isTwoDimensional()`
3. Because we have a valid 2 dimensional array, we can iterate w/ `forEach` over the outer array
  then iterating over each sub-array w/ another `forEach`
  - for each element in the sub-array, we can check if the element is in the `result` array
    - First, we check if the element can be converted into a Number,
      - IF we can convert it, we have a number string and check if the number version is in the `result` array
        - IF it isn't, push the string version to the array
        - IF it is, do nothing
      - IF the string version of the number is in the array, check if our value is the number version
        - IF our current value is the number version, replace the string version in the result array w/ our current value
    - IF it the value CANNOT BE converted to a number, (!parseInt(value, 10))
      - IF it is NOT in the `result` array
        - we PUSH it to our `result` array (checking w/ `.includes()`, works w/ `NaN`, `null`, `undefined`)
      - OTHERWISE, we do nothing
4. Return the `result` array

HELPER: isTwoDimensional(array)
for each element in the array, we check to see if it indeed an array
IF it isn't, return `null`

--------------------

- IF our element can be converted into a number and isn't of boolean type
  - check IF the type of our element is a number
    - IF it is, check if the string version of our number is in the `result` array
      - IF the string version is in the `result` array, `replace` it w/ the number
    - OTHERWISE check if the number isn't in the `result` array, then push it to the `result` array

- IF our value cannot be converted into a number
  - Check IF it isn't in the `result` array, and if it isn't, push it to the `result` array

- return the result

*/

// TODO: IMPLEMENT isTwoDimensional Function
function isTwoDimensional(array) {
  for (const elem of array) {
    if (!Array.isArray(elem)) return false;
  }

  return true;
}

function flattenAndUnique(array) {
  if (array.length === 0) return [];
  if (!isTwoDimensional(array)) return null;
  
  const result = [];

  array.forEach(subArr => {
    subArr.forEach((element) => {
      if (parseInt(element, 10) && typeof element !== 'boolean') {
        const numStr = String(element);
        if (typeof element === 'number') {
          if (result.includes(numStr)) {
            const numStringIndex = result.indexOf(numStr);
            console.log('REPLACING!!!!')
            result.splice(numStringIndex, 1, element);
          }

          if (!result.includes(element)) {
            result.push(element);
          }
        } else {
          if (!result.includes(parseInt(element, 10))) {
            result.push(numStr);
          }
        }
      } else if (!result.includes(element)) {
        result.push(element);
      }
    })
  })

  return result;
}

// empty or valid arrays
// console.log(flattenAndUnique([])); // [], correct
console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']])); // [1, 2, 3, 4, 5, 'a']

// 1 dimension
// console.log(flattenAndUnique([1, 2, 3])); // null, correct

// w/ non-primitive elements
// console.log(flattenAndUnique([[1, 2], [2, {'a': 1, 'b': 2}]])); // [1, 2, {'a': 1, 'b': 2}], correct

// w/ any thing of string
// console.log(flattenAndUnique([['hello', 'world'], ['hello world', 'hello']])); // ['hello', 'world', 'hello world']

// w/ 3 or more nested arrays
console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5,], [7, 8, 9]])); // [1, 2, 3, 4, 5, 7, 8, 9], correct

// empty nested array
// console.log(flattenAndUnique([[], [1, 2, 3]])); // [1, 2, 3], correct
// console.log(flattenAndUnique([[], []])); // [], correct

// same object in memory
// let obj = {'first': 1, 'second': 2};
// console.log(flattenAndUnique([[1, 2, obj], [2, 5, 7, obj, 9]])); // [1, 2, {'first': 1, 'second': 2}, 5, 7, 9], correct

// booleans & falsy values
// console.log(flattenAndUnique([[1, 2, true, '3'], ['3', 3, 5, true]])); // [1, 2, true, 3, 5]
// console.log(flattenAndUnique([[1, 2, true, NaN], [NaN, undefined, true, false, undefined]])); // [1, 2, true, NaN, undefined, false], correct
