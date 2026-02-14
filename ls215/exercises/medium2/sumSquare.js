/*
sum first n positive integers then square the solution

get squares of each integer up to `n` inclusive

subtract sumSquare by squaresSum
*/


function sumSquareDifference(n) {
  let sumSquare = 0;
  let squaresSum = 0;

  for (let num = 1; num <= n; num += 1) {
    sumSquare += num;
    squaresSum += num**2;
  }

  return sumSquare**2 - squaresSum;
}


console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150