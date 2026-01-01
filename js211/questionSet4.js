/*
// 1
function capitalizeWords(string) {
  string = string.split(' ');
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    let word = string[i];
    if (i === string.length - 1) {
      // no capitalize method; must do manually w/ another for loop on the letters of the word
      result += `${word.slice(0, 1).toUpperCase() + word.slice(1)}`;
    } else {
      result += `${word.slice(0, 1).toUpperCase() + word.slice(1)} `;
    }
  }

  return result;
}


console.log(capitalizeWords('launch school tech & talk')); // 'Launch School Tech & Talk'
console.log(capitalizeWords('hello world'));               // 'Hello World'
*/

/*
// 2
// Write a function named `logNamesAndIndex` that takes an array of names.
// Using the `forEach` method, log each name and its index to the console in the format `"Index: [index], Name: [name]"`.  
// •   ​**Test Cases**​:  

    // Expected Console Output:
    // "Index: 0, Name: Alice"
    // "Index: 1, Name: Bob"
    // "Index: 2, Name: Charlie"


function logNamesAndIndex(arr) {
  arr.forEach((elem, index) => {
    console.log(`Index: ${index}, Name: ${elem}`)
  })
}


let names = ['Alice', 'Bob', 'Charlie'];
logNamesAndIndex(names);
*/


/*
// 3
function extractAges(array) {
  return array.map(element => element.age);
}


let people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Sam', age: 42 }
];
console.log(extractAges(people)); // [30, 25, 42]
*/


/*
// 4
function filterLongWords(array, minLength) {
  return array.filter((element) => element.length > minLength)
}

let words = ['apple', 'banana', 'kiwi', 'strawberry', 'orange'];
console.log(filterLongWords(words, 6)); // ['strawberry']
console.log(filterLongWords(words, 4)); // ['apple', 'banana', 'strawberry', 'orange']
*/


/*
// 5
function findUserById(array, id) {
  return array.find((object) => object.id === id);
}

let users = [
  { id: 101, username: 'jsmith' },
  { id: 102, username: 'abaker' },
  { id: 103, username: 'cjones' }
];
console.log(findUserById(users, 102)); // { id: 102, username: 'abaker' }
console.log(findUserById(users, 105)); // undefined
*/


/*
// 6
function tallyScores(object) {
  let result = {
    winning: [],
    losing: [],
  };

  for (let key of Object.keys(object)) {
    let score = object[key];

    if (score > 80) {
      result.winning.push(key);
    } else {
      result.losing.push(key);
    }
  }

  return result;
}

let scores = {
  'Red Team': 85,
  'Blue Team': 78,
  'Green Team': 92,
  'Yellow Team': 80
};
console.log(tallyScores(scores));
// Expected Output:
// {
//   winning: ['Red Team', 'Green Team'],
//   losing: ['Blue Team', 'Yellow Team']
// }
*/


/*
// 8
function checkIfArray(array) {
  return Array.isArray(array);
}

console.log(checkIfArray([1, 2, 3]));      // true  
console.log(checkIfArray('not an array')); // false  
console.log(checkIfArray({ a: 1, b: 2 })); // false  
console.log(checkIfArray(null));           // false
*/
