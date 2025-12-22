function reverseOrder(arr) {
  let toReverse = arr.slice()
  return arr.concat(toReverse.reverse());
}


let digits = [4, 8, 15, 16, 23, 42];

console.log(reverseOrder(digits));