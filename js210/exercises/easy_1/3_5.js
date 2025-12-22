function multisum(number) {
  let sum = 0;
  for (let num = 1; num <= number; num++) {
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num;
    }
  }

  return sum;
}


console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168