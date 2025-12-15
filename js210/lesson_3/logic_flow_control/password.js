let rlSync = require('readline-sync');
let password = 'password';
let entries = 0;

while (entries < 3) {
  let entry = rlSync.question('What is the password: ');
  if (entry !== password) {
    entries += 1;
    console.log('You have been denied access.');
  } else {
    console.log('You have succesfully logged in.');
    break;
  }
}