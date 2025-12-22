function lastNOf(arr, count) {
  let newArray = arr.slice().reverse().slice(0, 3).reverse();
  return newArray;
}


let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3));    // returns [16, 23, 42]