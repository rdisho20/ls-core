function product() {
  let factors = [];
  for (let i = 0; i < arguments.length; i += 1) {
    factors.push(arguments[i]);
  }

  return factors.reduce((total, number) => total * number);
}

let result = product(2, 3, 4, 5);