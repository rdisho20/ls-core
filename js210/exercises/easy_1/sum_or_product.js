function message(number, choice, result) {
  let operation = choice === 's' ? 'sum' : 'product'
  return `The ${operation} of the integers between 1 and ${number} is ${result}`
}


let rlSync = require('readline-sync');
let number = Number(rlSync.question('Please enter a number greater than 0: '));
let choice = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (choice === "s") {
  let sum = 0;
  for (let num = 1; num <= number; num++) {
    sum += num;
  }

  console.log(message(number, choice, sum))
}

if (choice === "p") {
  let product = 1;
  for (let num = 1; num <= number; num++) {
    product *= num;
  }

  console.log(message(number, choice, product))
}

