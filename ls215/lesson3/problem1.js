/*
input: phone number string
output: a number string of just numbers

Rules:
1. phone # < 10 digits? assume bad number
2. phone # === 10 digits? assume good number
3. phone # === 11 digits & first # === 1? trim 1 & use last 10
4. phone # === 11 digits & first # !== 1? assume bad number
5. phone # > 11 digits? bad number

Questions?
What does a cleaned up phone number look like?
Other than a string, could I get an input of a different type?  how to handle that data?
- what if I get a phone number that is a data type of number?
Is it possible some strings are valid numbers, AND allowed symbols appear more than once back-to-back?
What if the number is valid, but the symbols are placed at awkward and unusual positions in the string?
-- not doing awkward symbol placements
What happens if the phone number starts w/ a symbol such as `+` for country codes?  Are these numbers handled normally?
-- not doing country codes

---- EXAMPLE / TEST CASES ----

// valid 10 digit numbers
console.log(cleanPhoneNumber('514-354-5918')); // 5143545918
console.log(cleanPhoneNumber('(713) 445-8021')); // 7134458021
console.log(cleanPhoneNumber('112.345.6899')); // 112345689

// valid 11 digit numbers
console.log(cleanPhoneNumber('1 514-354-5918')); // 5143545918

// valid numbers, allowed symbols appearing more than once
console.log(cleanPhoneNumber('(713) 445--8021')); // '0000000000'
console.log(cleanPhoneNumber('1 514--354-5918')); // '0000000000'

// bad numbers
console.log(cleanPhoneNumber('123')); // '0000000000'
console.log(cleanPhoneNumber('123456789012')); // '0000000000'
console.log(cleanPhoneNumber('2 514-354-5918')); // '0000000000'

---- DATA STRUCTURE ----
use string, checking w/ regex if valid, then splitting w/ regex for a clean number

---- ALGORITHM ----
2 separate regexes:
- 1 -> determining if valid number
/^1?[-.( ]?\d{3}[-.) ]? ?\d{3}[-.) ]?\d{4}$/

- 1 -> splitting
/[-.() ]/g OR /[-.() ]+/g
  - use + sign in case `split` won't like separate matches next to each other

- High Level:
1. Given the input string, check if it is a valid number based on our rules
- IF the string is not a valid number, return the string '0000000000'
2. IF it is a valid number, Clean the number string by splitting it using a regex
3. If the length of the string array is 11, trim the 1 at the beginning
4. Finally, return the string array joined on an empty string

HELPER FUNCTION: isValidNumber(string)
- return any matches by invoking string.match(regex) where `regex` is /^1?[-.( ]?\d{3}[-.) ]? ?\d{3}[-.) ]?\d{4}$/
- IF a match is found, we return a truthy value (array w/ match), OTHERWISE `null` is returned

----------------

Low Level:
- Given a phone number string, pass it as an arguement to `isValid()`
  - IF returns `false`, then invalid number

- initialize a `phoneNumberCleaned` variable assigned the split phone number string @ regex /[-.() ]/g OR /[-.() ]+/g

- IF the length of the array is 11, return the `phoneNumberCleaned` value, sliced @ `1` and joined w/ an empty string ''
- OTHERWISE return the `phoneNumberCleaned` value, joined w/ an empty string ''

*/

function isValid(s) {
  return s.match(/^1?[-.( ]?\d{3}[-.) ]? ?\d{3}[-.) ]?\d{4}$/);
}

function cleanPhoneNumber(s) {
  if (!isValid(s)) {
    return '0'.repeat(10);
  }

  const phoneNumberCleaned = s.split(/[-.() ]+/);

  if (phoneNumberCleaned.length === 4) {
    return phoneNumberCleaned.slice(1).join('');
  }

  return phoneNumberCleaned.join('');
}


// valid 10 digit numbers
console.log(cleanPhoneNumber('514-354-5918')); // 5143545918
console.log(cleanPhoneNumber('(713) 445-8021')); // 7134458021
console.log(cleanPhoneNumber('112.345.6899')); // 1123456899

// valid 11 digit numbers
console.log(cleanPhoneNumber('1 514-354-5918')); // 5143545918

// valid numbers, allowed symbols appearing more than once
// console.log(cleanPhoneNumber('(713) 445--8021')); // '0000000000'
// console.log(cleanPhoneNumber('1 514--354-5918')); // '0000000000'

// bad numbers
// console.log(cleanPhoneNumber('123')); // '0000000000'
// console.log(cleanPhoneNumber('123456789012')); // '0000000000'
// console.log(cleanPhoneNumber('2 514-354-5918')); // '0000000000'
