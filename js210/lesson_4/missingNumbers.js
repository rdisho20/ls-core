function missing(array) {
  if (array.length === 1) {
    return [];
  }
  
  let result = [];
  let min = array[0];
  let max = array[array.length - 1];

  for (let num = min + 1; num < max; num++) {
    if (!array.includes(num)) {
      result.push(num);
    }
  }

  return result;
}


console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []


/*
input: array
output: array

rules
expl:
- array arg sorted ASC
- return array contains all missing integers between first and last element

impl:
- some elements that are missing are between other elements e.g. -2, 1, 5 are missing -1, 0, 2, 3, 4
-if one value in array, return empty array
- if array contains no missing values, return empty array

-A
find minimum value, and maximum value; arr[0] and arr[arr.length -1]

start w/ 'previousValue' equal to the minimum value
for each value beginning at index 1 in the argument array
  check difference between current value and previous value (currentValue - previousValue)
  IF the difference is greater than 1,
    WHILE 'count' is less than the difference,
      add 1 + previousValue setting it equal to newValue; and assign to previousValue
      increment 'count'


-- OLD ALGO

function missing(arr) {
  if (arr.length === 1) {
    return [];
  }

  let result = [];
  let min = arr[0];
  let previousValue = min;

  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i]
    let difference = currentValue - previousValue;

    if (difference > 1) {
      let count = 0;
      while (count < difference) {
        let newValue = previousValue + 1;
        result.push(newValue);
        count++;
      }
    }
  }

  return result;
}
*/