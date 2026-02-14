/*
- Given a year
  - for each month,
    - find all fridays for each month, if their date number is 13, increment a count by 1
  
- return the value of `count`

Date.toDateString() -> parse() -> Date.getDay()
*/

function fridayThe13ths(year) {
  let thirteenthCount = 0;

  for (let idx = 0; idx < 12; idx += 1) {
    const date = new Date(year, idx, 13);
    
    if (date.getDay() === 5) thirteenthCount += 1;
  }

  return thirteenthCount;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2


/* LS Bot
Using toDateString().includes('Fri') works but is brittle (depends on locale/format). 
**** date.getDay() === 5 is clearer and tied directly to the weekday index. ****
*/