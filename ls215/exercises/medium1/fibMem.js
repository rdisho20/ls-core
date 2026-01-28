const memory = {};

function fibonacci(n) {
  if (n <= 2) {
    memory[n] = 1;
    return memory[n];
  }

  memory[n] = fibonacci(n - 1) + memory[n - 2];

  return memory[n];
}


console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(6));       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765