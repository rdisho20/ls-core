let arr1 = [2, 5, 13];             // [2, 7, 20]
let arr2 = [14, 11, 7, 15, 20];    // [14, 25, 32, 47, 67]
let arr3 = [3];                    // [3]
let arr4 = [];                     // []

let runningTotal = 0

let result1 = arr1.map((number) => {
  return runningTotal += number
})
console.log(result1);

runningTotal = 0

let result2 = arr2.map((number) => {
  return runningTotal += number
})
console.log(result2);

runningTotal = 0

let result3 = arr3.map((number) => {
  return runningTotal += number
})
console.log(result3);

runningTotal = 0

let result4 = arr4.map((number) => {
  return runningTotal += number
})
console.log(result4);