/*
input: odd integer `n`, representing nXn grid
output: logged to the console an 8 pointed star in an nXn grid

Rules:
- input will be an odd number greater than 7
- smallest needed to handle is 7x7 grid
- can be any odd number greater than or equal to 7
- MIDDLE row of star has `n` asterisks `*`
  - ALL OTHER rows have `3` asterisks, same for all inputs, seperated by calculated number of spaces
    except for immediatly preceding & succeeding 3 count `*` rows


---- DATA STRUCTURE ----
- build an OBJECT using a for loop that contains values for each row in first half

EXAMPLE 11
*    *    *
 *   *   *
  *  *  *
   * * *
    ***
***********
    ***
   * * *
  *  *  *
 *   *   *
*    *    *

7
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *

---- ALGORITHM ----
1. Given an odd number greater than 7,
  - calculate value of middle row (e.g. 7 -> '*******')

2. Given the argument number, build the first half of the star
  - use helper to get resulting array for first half

3. Build 2nd half of star w/ number

4. log to the console first half joined by `\n`, followed by middle row, followed by second half joined @ `\n`

HELPER firstHalf(n)
- initialize `result` variable = to []
- for each `number` up to n / 2
  - build a string w/ ' ' repeated `number` times + * + ' ' repeated `n/2 - number` times + * + ' ' repeated `n/2 - number` times + *
  - push to result array

HELPER secondHalf(n)
- initialize `result` variable = to []
- for each `number` where number starts @ `n / 2` down to `0`
  - build a string w/ ' ' repeated `number` times + * + ' ' repeated `n/2 - number` times + * + ' ' repeated `n/2 - number` times + *
  - push to result array

Low level:
- initialize a value `middle` assigned to '*'.repeat(n) times
- initialize value `firstHalf` equal to `firstHalf(n)` return value
- initialize value `seconHalf` equal to `secondHalf(n)` return value
- log to console `firstHalf` joined by `\n`
- log to console `middle`
- log to console `secondHalf` joined by `\n`
*/

function firstHalf(n) {
  const result = [];
  const halved = Math.floor(n / 2);

  for (let num = 1; num <= halved; num += 1) {
    let row = ' '.repeat(num - 1) + '*' + ' '.repeat((halved) - num) + '*' + ' '.repeat((halved) - num) + '*';
    result.push(row);
  }

  return result;
}

function secondHalf(n) {
  const result = [];
  const halved = Math.floor(n / 2);

  for (let num = halved; num > 0; num -= 1) {
    let row = ' '.repeat(num - 1) + '*' + ' '.repeat((halved) - num) + '*' + ' '.repeat((halved) - num) + '*';
    result.push(row);
  }
  /*
  3 -> '  ***'
  2 -> ' * * *'
  1 -> '*  *  *'
  */

  return result;
}

function star(n) {
  const first = firstHalf(n);
  const second = secondHalf(n);
  const middle = '*'.repeat(n);
  console.log(first.join('\n'));
  console.log(middle);
  console.log(second.join('\n'));
}

star(7);
/* logs
*  *  *
 * * *
  ***
*******
  ***
 * * *
*  *  *
*/

star(9);
/* logs
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *
*/

star(11);
/*
*    *    *
 *   *   *
  *  *  *
   * * *
    ***
***********
    ***
   * * *
  *  *  *
 *   *   *
*    *    *
*/


