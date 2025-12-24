/*
function isPalindrome(string) {
  string = string;
  let halfLength;
  let left;
  let right;

  if (string.length % 2 === 1) {
    halfLength = Math.floor(string.length / 2);
    right = string.slice(halfLength + 1);
    left = string.slice(0, halfLength);
  } else {
    right = string.slice(halfLength + 1);
    left = string.slice(0, halfLength);
  }

  console.log(left);
  console.log(right.split('').reverse().join(''));
  return left === right.split('').reverse().join('');
}


/*
console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
*/


function alphasOnly(string) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  result = '';
  for (let char of string.toLowerCase()) {
    if (alpha.includes(char)) {
      result += char;
    }
  }

  return result;
}


function isRealPalindrome(string) {
  string = alphasOnly(string);
  let halfLength;
  let left;
  let right;

  if (string.length % 2 === 1) {
    halfLength = Math.floor(string.length / 2);
    right = string.slice(halfLength + 1);
    left = string.slice(0, halfLength);
  } else {
    right = string.slice(halfLength + 1);
    left = string.slice(0, halfLength);
  }

  return left === right.split('').reverse().join('');
}


console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false