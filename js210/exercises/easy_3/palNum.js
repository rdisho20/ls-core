function isPalindromicNumber(number) {
  number = String(number);
  let halfLength;
  let left;
  let right;

  if (number.length % 2 === 1) {
    halfLength = Math.floor(number.length / 2);
    right = number.slice(halfLength + 1);
    left = number.slice(0, halfLength);
  } else {
    right = number.slice(halfLength + 1);
    left = number.slice(0, halfLength);
  }

  console.log(left);
  console.log(right.split('').reverse().join(''));
  return left === right.split('').reverse().join('');
}


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true