const rlSync = require('readline-sync');
const first = rlSync.question('Enter a number: ');
const second = rlSync.question('Enter a number: ');
const third = rlSync.question('Enter a number: ');
const fourth = rlSync.question('Enter a number: ');
const fifth = rlSync.question('Enter a number: ');
const sixth = rlSync.question('Enter a number: ');

const numArr = [first, second, third, fourth, fifth]

if (numArr.includes(sixth)) {
  console.log(`The number ${sixth} appears in ${numArr}`);
} else {
  console.log(`The number ${sixth} does not appear in ${numArr}`);
}