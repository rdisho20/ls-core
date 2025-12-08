function factorial(number) {
  if (number === 1) {
    return number
  } else {
    let counter = 2;   // 2*1=2, 3*2=6, 4*3=12
    let product = 1;
    do {
      product = counter * product;
      counter += 1;
    } while (counter <= number)

    return product
  }
}

console.log(factorial(1));     // => 1
console.log(factorial(2));     // => 2
console.log(factorial(3));     // => 6
console.log(factorial(4));     // => 24
console.log(factorial(5));     // => 120
console.log(factorial(6));     // => 720
console.log(factorial(7));     // => 5040
console.log(factorial(8));     // => 40320