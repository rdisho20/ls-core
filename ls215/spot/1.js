/*
input: array of strings, & an integer
output: return `k`th distinct string in input array

Rules:
1. If there are fewer than `k` distinct strings, return an empty string ""
2. A distinct string is present in an array ONLY ONCE

---- DATA STRUCTURE ----
array as is, checking counts along the way

---- ALGORITHM ----
1. Given an input array, filter (custom filter) the array so that only elements that appear 1 time are returned in a new array

2. using this new array, return the element @ the `k - 1` index

HELPER: filterDistinctStrings(array)
- for each element in the array
  - map its count to its appropriate key in `objMap`

- for each key in `objMap`, filter keys to new array that have a count === 1

Low level:
- initialize new variable `distinctStrings` assigned the return value of the invocation of `filterDistinctStrings` passing in `array` as an argument
- return `distincStrings[k - 1]`

filterDistinctStrings(array) Low level:
- initialize an `objMap` variable = to {}
- for each string in `array`
  - If it doesn't exist in `objMap` add it w/ value of 0
    otherwise increment it's count

- using `Object.keys(objMap)`, filter to a new array where each key's value (count)
  is === to 1
*/


function filterDistinctStrings(array) {
  const objMap = {};

  array.forEach(string => {
    objMap[string] = objMap[string] + 1 || 1;
  })

  return array.filter(string => objMap[string] === 1);
}


function distinctString(array, k) {
  const filtered = filterDistinctStrings(array);

  if (filtered.length < k) return "";

  return filtered[k - 1];
}

console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a"
console.log(distinctString(["aaa","aa","a"], 1)); // "aaa"
console.log(distinctString(["a","b","a"], 3)); // ""