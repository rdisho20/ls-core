const rlSync = require('readline-sync');
let name = rlSync.question("What's your name? ");

if (name.endsWith('!')) {
  console.log(`HELLO ${name.slice(0, name.length - 1).toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`)
}