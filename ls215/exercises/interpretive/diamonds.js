/*
---- PROBLEM
input: odd integer (arg will always be odd integer)
  - `n` represents total number of rows, as well as the widest
output: logged to the console a four-pointed diamond in an `n`x`n` grid

Rules:
1. diamond represented by `*`
2. each row of the diamond has an odd number of `*`
3. If the argument is a 1, log to the console single row w/ 1 `*`
4. Middle row of diamond has the largest number of `*`
5. Top & bottom rows have least number of `*`
6. leading spaces are whitespace, with no whitespaces after the last `*` in a row
7. leading whitespace of Top & Bottom rows is `n` divided by `2` floored (`Math.floor(n / 2)`)
  other rows, incremented by one (from top), reduce the whitespace by 1
8. If a row length equals the argument `n` value, we've reached the middle of the diamond
9. each row number asterisks incremented by 2
  e.g. 1 => 1 asterisk, 2 => 3 asterisk, 3 => 5 asterisk, 4 => 7 asterisk

Questions:
Is there a maximum integer to be taken as an argument? YES, 49
Should this output as one log?  Or can output as multiple logs?

---- EXAMPLE TEST CASES
console.log(diamond(1));
console.log(diamond(3));
console.log(diamond(9));
console.log(diamond(49));

---- DATA STRUCTURE ----
Use a for loop building a string line by line

---- ALGORITHM ----
High Level:
1. Loop, using a for loop w/ index starting at 1 up to `n`
  - every row will have a number of white spaces prepended equal to `(n - asterisk number) / 2`

2. at each iteration, log to the console the number of whitespaces plus the number of `*`

HELPER: getAsteriskCount(totalRows, RowAsteriskCount)
High Level:
1. If the currentRow is greater to the totalRows / 2, we've passed the middle and calculate differently (building second half)
  - if current row == -> totalRows, 1 asterisk, return 1
  - OTHERWISE
    - take previousRow asterisks count and SUBTRACT 2, return that value

2. After checking first condition and not passes, calculate number of asterisks
  - if row 1 => 1 asterisk, return 1
  - OTHERWISE
    - take previousRow asterisks count and ADD 2, return that value

Low Level:
initialize variable `rowAsteriskCount`

for each row (row = 1) up to `n`
  - IF row === 1
    - assign `rowAsteriskCount` = 1
  - IF row === n
    - assign `rowAsteriskCount` = n

  - OTHERWISE
    - get asterisk count `rowAsteriskCount` assigned to return value of `getAsteriskCount()` passing in `n`, `row` & `rowAsteriskCount`
  
  - log to the console number of whitespaces (n - rowAsteriskCount) / 2 concatenated with `'*''.repeat(rowAsteriskCount)`

HELPER: getAsteriskCount(totalRows, currentRow, rowAsteriskCount)
Low Level:
- IF `currentRow` is > `totalRows / 2`
  - return `rowAsteriskCount` - 2
- OTHERWISE return `rowAsteriskCount` + 2
*/

function getAsteriskCount(totalRows, currentRow, rowAsteriskCount) {
  if (currentRow > Math.round(totalRows / 2)) return rowAsteriskCount - 2;
  else return rowAsteriskCount +2;
}

function diamond(n) {
  let rowAsteriskCount;

  for (let row = 1; row <= n; row += 1) {
    if (row === 1) rowAsteriskCount = 1;
    else if (row === n) rowAsteriskCount = 1;
    else {
      rowAsteriskCount = getAsteriskCount(n, row, rowAsteriskCount);
    }

    console.log(`${' '.repeat((n - rowAsteriskCount) / 2)}${'*'.repeat(rowAsteriskCount)}`);
  }
}

console.log(diamond(1));
console.log(diamond(3));
console.log(diamond(9));
console.log(diamond(49));