function myReduce(array, func, initial) {
  let firstIndex;
  let accum;

  if (initial === undefined) {
    accum = array[0];
    firstIndex = 1;
  } else {
    accum = initial;
    firstIndex = 0;
  }

  for (let i = firstIndex; i < array.length; i += 1) {
    let currentValue = array[i];
    accum = func(accum, currentValue);
  }

  return accum;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49