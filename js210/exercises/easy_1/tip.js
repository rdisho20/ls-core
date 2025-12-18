let rlSync = require('readline-sync');

let bill = rlSync.questionInt('What is the bill? ');
let tipPerecentage = rlSync.question('What is the tip perecentage? ');

let tip = bill * (tipPerecentage / 100);
let total = bill + tip;

console.log(`The tip is $${tip}.00`);
console.log(`The total is $${total}.00`)