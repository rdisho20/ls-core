/*
let rlSync = require('readline-sync');
let firstName = rlSync.question("What is your name?\n");

console.log(`Good Morning, ${firstName}`);
console.log(`Good Afternoon, ${firstName}`);
console.log(`Good Evening, ${firstName}`);


firstName = rlSync.question("What is your first name?\n");
let lastName = rlSync.question("What is your last name?\n");

console.log(`Good Morning, ${firstName} ${lastName}!`);
console.log(`Good Afternoon, ${firstName} ${lastName}!`);
console.log(`Good Evening, ${firstName} ${lastName}!`);
*/

function getName(prompt) {
  let rlSync = require('readline-sync');
  let name = rlSync.question(prompt);
  return name;
}

let firstName = getName("What is your first name? ");
let lastName = getName("What is your last name? ");
console.log(`Hello, ${firstName} ${lastName}!`);