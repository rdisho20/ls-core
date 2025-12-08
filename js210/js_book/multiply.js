function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);

/*
2, 3, 4

let result = num1 * num2 * num3
return result

function multiplyNumbers(num1, num2, num3) {...}

multiplyNumbers(2, 3, 4);

multiplyNumbers

num1, num2, num3

result

num1, num2, num3, result, product, multiplyNumbers
*/

/*
line 1: multiply, left, right
line 2: product, left, right
line 3: product

line 6: getNumber, prompt
line 7: parseFloat, question, prompt

line 10: left, getNumber
line 11: right, getNumber
line 12: log, left, right, multiply, left, right
*/

/*
multiply = global
left and right = global
product = local
prompt = local
getNumber = global
parseFloat = global
question = global
console = global
*/

/*
No, and that is because on line 1, they are defined locally by the function declaration,
and on line 10-11 they are defined globally, thus being inherently different.  
Difference on line 10 is that when passed to multiply the global left and right are passed as arguments to multiply
where left and right on line 1 can are still independant of those arguments as they are declared as part of a function declaration.
*/