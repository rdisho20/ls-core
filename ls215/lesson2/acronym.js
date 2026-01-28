/*
if there's already an acronym present, use that one.
*/

'use strict';

function acronym(string) {
  const stringSplit = string.split(/[-: ]+/);

  let acronym = '';

  for (let word of stringSplit) {
    if (isAcronym(word)) {
      return word;
    }

    acronym += word[0].toUpperCase();
  }

  return acronym;
}

function isAcronym(string) {
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (const char of string) {
    if (!upper.includes(char)) return false;
  }

  return true;
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"