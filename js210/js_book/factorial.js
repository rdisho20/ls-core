/*
function factorial(number) {
  let result = 1;
  for (let counter = number; counter > 0; counter -= 1) {
    result *= counter;
  }

  return result;
}
*/

function factorial(number) {
  if (number <= 1) return 1;
  return number * factorial(number - 1);
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320

/*
-> 5
1 --> 1    .. 1
2 --> 2 * (1).. 2
3 --> 3 * (2).. 6
4 --> 4 * (3).. 24
5 --> 5 * (4).. 120

*/