/*
let rlSync = require('readline-sync')
let age = Number(rlSync.question("What be your age, mister?\n"))

console.log(`You are ${age} years old.`)
console.log(`In 10 years, you will be ${age+10} years old.`)
console.log(`In 20 years, you will be ${age+20} years old.`)
console.log(`In 30 years, you will be ${age+30} years old.`)
console.log(`In 40 years, you will be ${age+40} years old.`)
*/

let rlSync = require('readline-sync');
let age = Number(rlSync.question("What be your age, mister?\n"));
console.log(`You are ${age} years old.`);

for (let yrs = 10; yrs < 41; yrs += 10) {
  console.log(`In ${yrs} years, you will be ${age + yrs} years old.`)
}

