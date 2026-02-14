/*
input: number
output: next featured number greater than argument

for each number above the argument, check if it is a multiple of 7, then check if each digit is unique

HELPER: isUnique(number)
- given an integer, stringify it, then split at ''
- for each digit, check if we've `seen` it before
  - IF not, add it to `seen`
  - IF we HAVE seen it, return false
- IF we did not return false, return true (iteration finished without encountering a duplicate number)
*/

/*
function featured(number) {
  for (let num = number + 1; ; num += 1) {
    if (num > 9876543201) {
      return "There is no possible number that fulfills those requirements.";
    }

    if (num % 7 === 0 && num % 2 === 1) {
      if (isUnique(num)) return num;
    }
  }
}
*/


const MAX_FEATURED = 9876543201;

function featured(number) {
  const startingNum = number - (number % 7);

  for (let num = startingNum + 7; ; num += 7) {
    if (num > MAX_FEATURED) {
      return "There is no possible number that fulfills those requirements.";
    }

    if (num % 2 === 1 && isUnique(num)) return num;
  }
}

function isUnique(number) {
  const numberStringArray = String(number).split('');
  const seen = [];

  for (let digit of numberStringArray) {
    if (seen.includes(digit)) return false;
    seen.push(digit);
  }

  return true;
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."


/* LS solution
function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);

  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }

    featuredNum += 14;
  } while (featuredNum <= MAX_FEATURED);

  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);

  return number;
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};

  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      return false;
    }

    seen[digits[idx]] = true;
  }

  return true;
}
*/