/*
-I/O
input: string
output: string

-R
explicit rules:
- each letter changes -> character 13 positions later (keeping case)
  - reach end? return -> beginning
- don't modify characters that aren't letters

implicit rules:
- lowercase character range 'a' - 'z': 97 - 121
- uppercase: 65 - 90

-D
string -> loop through

-A
For each character in input string

  IF character is alphabetic,
    get characters ASCII code => 'asciiCode'
    add 13 to the 'asciiCode' number => 'charCode'
    get range of original 'charCode' (upperCase || lowerCase)

    IF 'charCode' is out of range (> than upperCase || > than lowerCase)
      subtract charCode by LAST CHARCODE IN RANGE & add that to first number in range - 1 => 'charCode'
    
    concat fromCharCode('charCode') to result string

  IF NOT alphabetic
    concat 'char' to result string

*********************
-T
hello world
h - 104 => 117 - u
e - 101 => 114 - h
l - 108, l - 108 => 121 - y
o - 111 out of range 124 - 122 = 2 so add (2 - 1) + 97 => 98 - b
w - 119
o - 111
r - 114
l - 108
d - 100

h - 104
*/

/*
const UPPER_RANGE_MIN = 65;
const UPPER_RANGE_MAX = 90;
const LOWER_RANGE_MAX = 97;
const LOWER_RANGE_MAX = 122;
*/

function isAlphabetic(character) {
  let charCode = character.charCodeAt(0);
  if ((97 <= charCode && charCode <= 122) || (65 <= charCode && charCode <= 90)) {
    return true;
  }

  return false;
}


function rot13(string) {
  let result = '';
  let upperMin, upperMax;
  let lowerMin, lowerMax;
  [upperMin, upperMax] = [65, 90];
  [lowerMin, lowerMax] = [97, 122];

  for (let index = 0; index < string.length; index++) {
    let char = string[index];
    if (!isAlphabetic(char)) {
      result += char;
      continue;
    }

    let asciiCode = char.charCodeAt(0);
    if (upperMin <= asciiCode && asciiCode <= upperMax) {
      let charCode = asciiCode + 13;
      if (charCode > upperMax) {
        charCode = ((charCode - upperMax)) + upperMin - 1;
        result += String.fromCharCode(charCode);
      } else {
        result += String.fromCharCode(charCode);
      }
    } else if (lowerMin <= asciiCode && asciiCode <= lowerMax) {
      let charCode = asciiCode + 13;
      if (charCode > lowerMax) {
        charCode = ((charCode - lowerMax)) + lowerMin - 1;
        result += String.fromCharCode(charCode);
      } else {
        result += String.fromCharCode(charCode);
      }
    }
  }

  return result;
}


console.log(rot13('Teachers open the door, but you must enter by yourself.'));
// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.
console.log();

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));
// logs:
// Teachers open the door, but you must enter by yourself.