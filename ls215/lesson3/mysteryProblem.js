// You are given a table, in which every key is a stringified number, and each
// corresponding value is an array of characters, e.g.

// {
//   "1": ["A", "B", "C"],
//   "2": ["A", "B", "D", "A"],
// }
// Create a function that returns a table with the same keys, but each
// character should appear only once among the value-arrays, e.g.

// examples below

/*
input: object w/ stringified number keys w/ array of characters as values
output: object w/ same keys, but each character only appears once among the value-arrays

Questions:
Should each value be processed in order?  YES
Should final object sort key value pairs by their number-ified keys?  YES
Can a character in one of the arrays be lowercase?  IF so, we count that as a distinct character from it's uppercase counterpart? NO, all uppercase

Rules:
1. process the key-value pairs of the input object based on the order of their appearance
2. Output object should have key-value pairs sorted by number-ified keys (least to greatest)
3. each array of a key-value pair will contain at least 1 character
4. all characters will be uppercase

---- DATA STRUCTURE ----
Given an object as input, we check each key's ARRAY value, iterating through
  in order to keep track of what has been seen
When we see a duplicate value, we need to remove it from the array

For each key value pair, we need to sort it (using ARRAY) then build new OBJECT for final result

2 arrays, 1 object
- 1 arr to iterate
- 1 arr to turn object into array sort by keys
- build new object

---- ALGORITHM ----
High level:
1. For each value in the input object
  - for each letter, 
    - if it is in `seen` we should not add it to the new value array
    - otherwise, we can push it to the new array, then add it to `seen`

2. Once we have the updated array values, make a new sorted array with the key value pairs based on their number-ified keys

3. using this new sorted array, we can build our result object.

Low level:
- sort object descending invoking `sortObjDescending(inputObj)` assigned to variable `objToSortedArray`

- for each key value array in the object sorted to an array starting @ idx = 0
  - init a variable `seen` = []
  - init variable `currentArr` = `objToSortedArray[idx][1]`

  - for each element in the character array (`currentArr`)
    - init a variable `newArr` = []

    - for each character in the character array
      - if it is in `seen`, CONTINUE
      - otherwise, push character to `newArr`
        - then push character to `seen`

    - reassign array at current index = to `newArr` (`objToSortedArray[idx][1] = newArr`)
  
- using `objSortedArray`, sort it in ascending order by number-ified keys
  - objToSortedArray.sort(parseInt(a[0], 10) - parseInt(b[0], 10))

- return the value of the invoked function `buildResult(objToSortedArray)`
      
HELPER sortObjDescending(inputObj)
- start w/ `result = []`
- given input object, for each key in object.keys()
  - push the array [key, inputObj[key]] to `result
- return result.sort((a, b) => parseInt(b[0], 10) - parseInt(a[0], 10))

HELPER buildResult(inputArr)
- init a variable result = {}
- for each `arr` in inputArr
  - result.arr[0] = arr[1]
- return result
*/

function duplicates(obj) {
  const objToSortedArray = sortObjDescending(obj);
  const seen = [];

  for (let idx = 0; idx < objToSortedArray.length; idx += 1) {
    const currentArr = objToSortedArray[idx][1];
    const newArr = []

    for (let char of currentArr) {
      if (!seen.includes(char)) {
        newArr.push(char);
        seen.push(char);
      }

      continue;
    }

    objToSortedArray[idx][1] = newArr;
  }

  objToSortedArray.sort((a, b) => parseInt(a[0], 10) - parseInt(b[0], 10))

  return buildResult(objToSortedArray);
}

function sortObjDescending(obj) {
  const result = [];

  for (let [key, value] of Object.entries(obj)) {
    result.push([key, value])
  }

  result.sort((a, b) => parseInt(b[0], 10) - parseInt(a[0], 10))
  
  return result;
}


function buildResult(inputArr) {
  const result = {};

  for (let array of inputArr) {
    result[array[0]] = array[1];
  }

  return result;
}



// Example 1
console.log(duplicates({
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
}));

// output = {
//   "1": ["F", "G"],
//   "2": ["C"],
//   "3": ["A", "B", "D"],
// }

// Example 2
console.log(duplicates({
  "1": ["A"],
  "2": ["A"],
  "3": ["A"],
}));

// output = {
//   "1": [],
//   "2": [],
//   "3": ["A"],
// }

// Example 3
console.log(duplicates({
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"],
}));

// output = {
//   "11": ["P", "R", "S"],
//   "53": ["C"],
//   "236": ["L", "X", "G", "H"],
//   "432": ["A", "B", "D"],
// }
