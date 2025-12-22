const CODE_UPPER_A = 'A'.codePointAt(0);
const CODE_UPPER_Z = 'Z'.codePointAt(0);
const CODE_LOWER_A = 'a'.codePointAt(0);
const CODE_LOWER_Z = 'z'.codePointAt(0);


function isAlphabetic(character) {
  let charCode = character.charCodeAt(0);
  return (CODE_UPPER_A <= charCode && charCode <= CODE_UPPER_Z) ||
          (CODE_LOWER_A <= charCode && charCode <= CODE_LOWER_Z);
}


function getNewCode(asciiCode, min, max) {
  let charCode = asciiCode + 13;
  if (charCode > max) {
    charCode = ((charCode - max)) + min - 1;
    return String.fromCharCode(charCode);
  } else {
    return String.fromCharCode(charCode);
  }
}


function rot13(string) {
  let result = '';

  for (let index = 0; index < string.length; index++) {
    let char = string[index];
    if (!isAlphabetic(char)) {
      result += char;
      continue;
    }

    let asciiCode = char.charCodeAt(0);
    if (CODE_UPPER_A <= asciiCode && asciiCode <= CODE_UPPER_Z) {
      let code = getNewCode(asciiCode, CODE_UPPER_A, CODE_UPPER_Z);
      result += code;
    } else if (CODE_LOWER_A <= asciiCode && asciiCode <= CODE_LOWER_Z) {
      let code = getNewCode(asciiCode, CODE_LOWER_A, CODE_LOWER_Z);
      result += code;
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


/* LS Solution
function rot13(text) {
  let transformed = '';
  for (let index = 0; index < text.length; index += 1) {
    transformed += rot13Character(text[index]);
  }

  return transformed;
}

function rot13Character(char) {
  const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
  let isUpperCase = false;
  let initialIndex = ALPHABET.indexOf(char);

  // no match might mean that we are dealing with an uppercase letter
  if (initialIndex === -1) {
    initialIndex = ALPHABET.indexOf(char.toLowerCase());
    isUpperCase = true;
  }

  // if there is still no match, it's not a character between a-z
  if (initialIndex === -1) {
    return char;
  }

  let shiftedIndex = (initialIndex + 13) % 26;
  let transformed = ALPHABET[shiftedIndex];

  if (isUpperCase) {
    transformed = transformed.toUpperCase();
  }

  return transformed;
}
*/