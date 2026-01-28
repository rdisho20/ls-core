/*
input: array of string integers; whole numbers & significant numbers (short hand)
output: array of integers, representing numbers included in "short hand range"

Questions:
Could I expect different data types as inputs?  How to handle? NO
How to deal w/ elements that contain separators not part of 'possible separators'? NO
Will some elements included in argument be floats? NO only whole numbers that are strings
Is output an array of number strings, or integers?  INTEGERSTY4czsa_YYxEvrjQ@
Can there be an equivalent number immedieatly coming after the previous number? YES
  - e.g. [1, 3, 4, 4, 5] <- 4 IS NOT less than nor Greater than, It is equal
    therefore 2nd 4 becomes 14

What is 'significant part' of a number?
- That which reflects what is not obvious (because numbers always increasing in order)
What is short hand range?
- significant numbers w/ or w/o separators; sometimes point of reference being whole 'honest' numbers
e.g. "1, 3, 7, 1:3" => [1, 3, 7, 11, 12, 13]

- Will there be inputs where a range uses different separators? NO

Rules:
1. always expect a valid input  w/ valid range separators
  - numbers & ranges separated by commas, can contain numbers and/or shorthand notation, or just shorthand notation
2. significant numbers can be led by 0's
3. If a number is less than the one immediatly preceding it in the sequence/range,
  then increment the number by the count of the preceding's "place" *  leading digit of preceding number
  - get leading number by getting remainder of preceding number divided by "places" before current "place"
  - Examples:
    [4, 3] => 3 < 4 => 3+10 => 13
    [545, 64] => 64 < 545 => 500 + 64 =>                 564
      - 545 -> 100 -> 545 % 10 ========> 5 * 100 + 64 => 564

3b. If number less than one immediately preceding it,
  then check every number greater than previous number, that ends w/ current number

4. Any numbers separated by ':', '-' or '..' represent a range

---- DATA STRUCTURE ----
seperate numbers out into groups of elements in an ARRAY
- a number string becomes a number, numbers w/ seperators become a number string range
  - number string range will need additional processing using an ARRAY

---- ALGORITHM ----
High level:
1. Start w/ a `result` array for building the result array based on implementation of algo

2. Given an input string w/ numbers & shorthand notation, create an array of elements `elements`

3 (OBSOLETE). for each element in the array, determine if single number or number range
  - If we get a number range separated by :, - or .. then build out the array w/ those numbers
    - Separate the range into array of elements using :, - or :, and then for each element...
      - if a number in the range is a significant number (less than previous),
        use processSignificantNumber and change it to that number
      - then get the minimum & maximum value in the range, `min` and `max`
    - Up to the largest number in the range, starting w/ the smallest, push that number to our `result` array
  - If we have a single number, push that number to the `result` array

3b. For each element in the array, we must determine if it is a number or if it is a number range (isNumberRange)

4. If it is a number range, we must find the minimum and maxium value for that number range
  - iterate over the range and push the values to a new array
    - checking if significant number along the way
  - push the new array of numbers to our main `elements` array

5. If it is a number,
  - check if significant number, and if it is, process it
  - OTHERWISE convert to #, then push that number into the `elements` array

6. For each value we have in a new array that consists of numbers and array of numbers (representing ranges)
  - If it is an array (number range), iterate through the elements, convert to #, pushing to `result`
  - If it is a number string, convert to #, push it to `result`

7. return the `result` array

HELPER: isSignificant(previousNum, currentNum)

HELPER: isNumberRange(element) => using regex

HELPER: getNumberRange(element)
  - initialize variable `rangeNumbers` = -> [];
    - seperate the range into array of elements assigned to `range` w/ regex /:|-|[.]{2}/
    - convert each number string to a number using `map` & `parseInt(.., 10)`
    - for each `number` in the range, starting @ idx = 1
      - initialize variable `previousNum` equal to `range[idx - 1]`
      - invoke isSignificant passing in the `number` & `previousNum`
      - IF it is significant
        - initialize variable `newNumber` = -> return value of `processSignificantNumber()` passing in `previousNum` & `number`
        - mutate `range` in place, replacing number w/ `newNumber` w/ splice(idx, 1, newNumber)
    - after getting final `range` array, initialize variables `min` and `max`, assigned to `Math.min(...range)` & `Math.max(...range)` respectively
    - for each number starting @ `min` & up to & including `max`, push it to `rangeNumbers`
  - return `rangeNumbers`

HELPER: returnSignificantNumber(previousNum, significantNum)
High Level:
1. given 2 numbers, `previousNum` & `significantNum` (EXECUTED IF `previousNum` >= `significantNum`)
  - we need to find how much to add to `significantNum` and return that value

2. We must add a digit, initialized as `digitToAdd` assigned to value `1`

3. Do one time, add the digit `digitToAdd` in front of string version of `significantNum`,
  assigned to `newNum`, then increment digit
  - then WHILE `prevNum` is still greater than or equal to `newNum` add digitToAdd in front of `newNum`,
    assigned to `newNum`, increment `digitToAdd`

4. return `significantNum`

Low Level:
- initialize variable `elements` = -> []
- initialize variable `results` = -> []
- split the input into an array of elements using `, ` assigned to variable `numbers`

- for each `element` in `numbers`
  - invoke isNumberRange() passing in element as arguement, determine if is a number range
  - IF it is a number range, invoke `getNumberRange` passing in `element` assigned to `rangeNumbers`
    - FINALLY push the `rangeNumbers` array spread (...) to our `elements` array
  
  - OTHERWISE, convert `element` to #, push to `elements`

- for each `element` in `elements` starting w/ idx = 0
  - initialize variable `number` = -> `elements[idx]`
  - IF idx = 0,
    - push `element` converted to #, to `results` array, CONTINUE to next iteration
  - initialize variable `previousNum` = -> `elements[idx - 1]`
  - invoke isSignificant passing in `previousNum` & `number`
  - IF it isSignificant, get the Significant number, convert it to #, then push to `results`
  - OTHERWISE
    - push the string number after converting it to a number w/ `parseInt(.., 10)` to `results`

- return `results` array


*/


function isNumberRange(element) {
  if (/:|-|[.]{2}/.test(element)) {
    return true
  }

  return false;
}

function isSignificant(previousNum, number) {
  return previousNum >= number;
}

function returnSignificantNumber(previousNum, significantNum) {
  let digitToAdd = 1;
  while (parseInt(previousNum, 10) >= parseInt(significantNum, 10)) {
    const numArray = significantNum.split('');
    numArray.unshift(String(digitToAdd));
    significantNum = numArray.join('');
    digitToAdd += 1;
  }

  return significantNum;
}

function getNumberRange(range) {
  range = range
    .split(/:|-|[.]{2}/);
  const rangeNumbers = [];

  for (let idx = 1; idx < range.length; idx += 1) {
    const previousNum = range[idx - 1];
    const number = range[idx];
    if (isSignificant(previousNum, number)) {
      const newNumber = returnSignificantNumber(previousNum, number)
      range.splice(idx, 1, newNumber);
    }
  }

  range = range.map(num => parseInt(num, 10));
  const min = Math.min(...range);
  const max = Math.max(...range);

  for (let num = min; num <= max; num += 1) {
    rangeNumbers.push(num);
  }

  return rangeNumbers;
}

function completeNumbers(numbers) {
  const elements = [];
  const results = [];
  numbers = numbers.split(/, /);

  for (let element of numbers) {
    if (isNumberRange(element)) {
      const rangeNumbers = getNumberRange(element);
      console.log(rangeNumbers);
    }
  }
}


// console.log(completeNumbers("1, 3, 7, 1:3")); // [1, 3, 7, 11, 12, 13]
// console.log(completeNumbers("1, 3, 7, 2, 4, 1")); // [1, 3, 7, 12, 14, 21]
// console.log(completeNumbers("1-3, 1-2")); // [1, 2, 3, 11, 12]
console.log(completeNumbers("1:5:2")); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(completeNumbers("104-2")); // 104, 105, ... 112
console.log(completeNumbers("104-02")) // 104, 105, ... 202
console.log(completeNumbers("545, 64:11")) // 545, 564, 565, ... 611

// duplicates
// console.log(completeNumbers("1, 3, 4, 4, 5")) // [1, 3, 4, 14, 15]

// w/ 2 '.' separators
// console.log(completeNumbers("10, 11, 2..2"))
/* [
  10, 11, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 31, 32
] */

// console.log(completeNumbers("10, 13, 2..33"))
/* [
  10, 13, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 31, 32, 33
] */

// whole number after a range
// console.log(completeNumbers("1:3, 2")); // [1, 2, 3, 12]


