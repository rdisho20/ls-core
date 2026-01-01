/*
const user = { role: 'admin' };

function performAction(user) {
  if (user.role === 'admin') {
    console.log('Performing admin action: Deleting all files.')
  } else {
    console.log('Performing guest action: Viewing the homepage.')
  }
}

performAction(user);
*/


/*
//9
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers);


​**Test Case:**​ 
The `doubledNumbers` array should be `[2, 4, 6, 8, 10]`, 
and this should be logged to the console.
*/


// 10
const addFive = function(number) {
  return 5 + number
}

const multiplyByThree = function(number) {
  return 3 * number
}

function transformNumber(number) {
  const added = addFive(number);
  const multiplied = multiplyByThree(added);

  return multiplied
}


transformNumber(10) // `45`. (Process: 10 + 5 = 15, then 15 * 3 = 45).


