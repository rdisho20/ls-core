function fibonacci(n) {
  if (n <= 2) {
    return 1;
  }

  let f1 = 1;
  let f2 = 1;
  let fib;

  for (let nth = 3; nth <= n; nth += 1) {
    fib = f1 + f2;
    f1 = f2;
    f2 = fib;
  }

  return fib;
}


console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050