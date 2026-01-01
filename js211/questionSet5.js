/*
// 1
// Helper Functions:

const p = console.log;
const eq = (arr1, arr2) => JSON.stringify(arr1) === JSON.stringify(arr2);

//

function smallerNumbersThanCurrent(numbers) {
  // for every number, push to a new array the number of numbers that are smaller than current number
  // only count unique values
  // start w/ result array
  // start w/ checked numbers (for count) array
  const result = [];
  for (let number of numbers) {
    const checkedNumbers = [];
    let toCount = numbers.filter((num) => {
      if (!checkedNumbers.includes(num)) {
        if (num < number) {
          checkedNumbers.push(num);
          return num;
        }
      }
    })
    console.log(checkedNumbers);
    result.push(toCount.length);
  }

  console.log(result);
  return result;
}

// Test Cases
p(eq(smallerNumbersThanCurrent([8, 1, 2, 2, 3]), [3, 0, 1, 1, 2]));
p(eq(smallerNumbersThanCurrent([7, 7, 7, 7]), [0, 0, 0, 0]));
p(eq(smallerNumbersThanCurrent([6, 5, 4, 8]), [2, 1, 0, 3]));
p(eq(smallerNumbersThanCurrent([1]), [0]));

let myArray = [1, 4, 6, 8, 13, 2, 4, 5, 4];
let result = [0, 2, 4, 5, 6, 1, 2, 3, 2];
p(eq(smallerNumbersThanCurrent(myArray), result));
*/


/*
// 2
For every 5 numbers
  sum the 5 numbers and check if it is the least of all the sums of numbers


// BUG: it appears when I get to the second number in the array, it's skipped
  // and it goes to the third number to start iterating...
const p = console.log;

function minimumSum(numbers) {
  if (numbers.length < 5) return null;

  let sums = numbers.map((number, index, array) => {
    let fiveNumbers = array.slice(index, index + 5);

    if (fiveNumbers.length === 5) {
      let total = 0;

      for (let i = 0; i < fiveNumbers.length; i += 1) {
        let currentNumber = fiveNumbers[i];
        total += currentNumber;
      }

      return total;
    }

    return NaN;
  });

  sums = sums.slice(0, numbers.length - 4);
  sums.sort((a, b) => a - b);

  return sums[0];
}


//**Test Cases**​:
// getting correct amount of NaNs
p(minimumSum([1, 2, 3, 4]) === null);

p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);

p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

*/


/*
// 3
const p = console.log;

function greatestProduct(numStr) {
  if (numStr.length < 4) return null;

  let numbers = numStr.split('');
  numbers = numbers.map((numberString) => Number(numberString))
  console.log(numbers);

  let products = numbers.map((number, index, array) => {
    let fourNumbers = array.slice(index, index + 4);

    if (fourNumbers.length === 4) {
      let product = 1;

      for (let i = 0; i < fourNumbers.length; i += 1) {
        let currentNumber = fourNumbers[i];
        product *= currentNumber;
      }

      return product;
    }

    return NaN;
  });

  products = products.slice(0, numbers.length - 3);
  products.sort((a, b) => b - a);

  return products[0];
}

// **Test Cases**​:

p(greatestProduct('23456') === 360);      // 3 * 4 * 5 * 6  
p(greatestProduct('3145926') === 540);    // 5 * 9 * 2 * 6  
p(greatestProduct('1828172') === 128);    // 1 * 8 * 2 * 8  
p(greatestProduct('123987654') === 3024); // 9 * 8 * 7 * 6
*/


/*
// 4
const p = console.log;

function distinctMultiples(string) {
  const stringSplit = string.split('');

  let counts = stringSplit.reduce((accum, elem) => {
    elem = elem.toLowerCase();
    accum[elem] = accum[elem] ? accum[elem] : 0;
    const keys = Object.keys(accum);

    if (keys.length > 0) {
      if (keys.includes(elem)) {
        accum[elem] += 1;
      }
    }

    return accum;
  }, {});

  let values = Object.values(counts).filter(elem => elem > 1);

  return values.length;
}

// **Test Cases**​:

p(distinctMultiples('xyz') === 0);              // (none)  
p(distinctMultiples('xxyypzzr') === 3);         // x, y, z  
p(distinctMultiples('xXyYpzZr') === 3);         // x, y, z  
p(distinctMultiples('unununium') === 2);        // u, n  
p(distinctMultiples('multiplicity') === 3);     // l, t, i  
p(distinctMultiples('7657') === 1);           // 7 
p(distinctMultiples('3141592653589793') === 4); // 3, 1, 5, 9  
p(distinctMultiples('2718281828459045') === 5); // 2, 1, 8, 4, 5 
*/


/*
// 5
let arr = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];  

let newArr = arr.map((obj) => {
  let newObj = {...obj}
  for (let key in newObj) {
    newObj[key] += 1;
  }

  return newObj;
})

console.log(newArr);
console.log(arr);


// RETURNS => [ { a: 2 }, { b: 3, c: 4 }, { d: 5, e: 6, f: 7 } ]  

// arr is still [ { a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 } ]
*/


// 6
function objForEach(object, callbackFunction) {
  for (const key in object) {
    const value = object[key];
    callbackFunction(key, value);
  }
}

let obj = { foo: 1, bar: 2, qux: 3 };  

objForEach(obj, (property, value) => {  
  console.log(`the value of ${property} is ${value}`);  
});  

// **Expected Output**​:

// the value of foo is 1  
// the value of bar is 2  
// the value of qux is 3  
