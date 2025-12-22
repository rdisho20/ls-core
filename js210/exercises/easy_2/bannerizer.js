/*
- A
while count is less than 5
  if count is equal to 0 or 4
    log to console '+-' + '-' multiplied by length of string + '-+'
  if count is equal to 1 or 3
    log to console '| ' + ' ' multiplied by length of string + ' |'
  if count is equal to 2
    log to console '| ' + string + ' |'  

*/

function buildWidth(char, amount) {
  let result = '';
  for (let i = 0; i < amount; i++) {
    result = result + char;
  }
  return result;
}


function logInBox(string) {
  let length = string.length;
  let count = 0;
  while (count < 5) {
    if (count === 0 || count === 4) {
      console.log(`+-${buildWidth('-', length)}-+`);
    } else if (count === 1 || count === 3) {
      console.log(`| ${buildWidth(' ', length)} |`)
    } else {
      console.log(`| ${string} |`)
    }
    count++;
  }
}

logInBox('To boldly go where no one has gone before.');
console.log();
logInBox('');