/*
4
5
1
3
101
*/

/*
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

console.log(
  myArray.filter(num => num % 2 == 0)
);
*/

/*
let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

let result = [];

for (let i = 0; i < myArray.length; i++) {
  myArray[i].forEach(function(num) {
    if (num % 2 === 0) {
      result.push(num);
    }
  });
}

console.log(result)
*/

/*
let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

console.log(
  myArray.map(function(num) {
    if (num % 2 === 0) {
      return 'even'
    } else {
      return 'odd'
    }
  })
)
*/

/*
function findIntegers(arr) {
  return arr.filter(value => Number.isInteger(value))
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]
*/

/*
given an array, filter based on their lengths if the length is odd

function oddLengths(arr) {
  let newArr = arr.map(
    function (string) {
      return string.length
    }
  )
  return newArr.filter(num => num % 2 === 1)
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

*/

/*
function sumOfSquares(arr) {
  return arr.reduce((accum, element) => (element * element) + accum)
}

let array = [3, 5, 7];
console.log(sumOfSquares(array));
*/


/*
function oddLengths(arr) {
  return arr.reduce(function (accum, elem) {
    let length = elem.length
    if (length % 2 === 1) {
      accum.push(length);
    }

    return accum
  }, [])
}

let arr = ["a", "abcd", "abcde", "abc", "ab"];
console.log(oddLengths(arr));
*/





