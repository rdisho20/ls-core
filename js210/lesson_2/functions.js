function average(arr) {
  return sum(arr) / arr.length;
}

function sum(arr) {
  let total = 0;
  for (let index = 0; index < arr.length; index++) {
    total += arr[index];
  }

  return total
}

console.log(average([5, 7, 9, 11, 4]));