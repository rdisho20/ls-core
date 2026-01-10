const UPPER = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ! '

function isUppercase(string) {
  if (!string) {
    return true;
  }

  let count = 0;
  for (let char of string) {
    count = UPPER.includes(char) ? count += 1 : count;
    /*
    if (UPPER.includes(char)) {
      return false;
    }*/
  }

  return count === string.length;
}


console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true