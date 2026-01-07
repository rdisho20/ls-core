function staggeredCase(string) {
  return string.split('').map((char, index) => {
    if (/[a-z]/.test(char) || /[A-Z]/.test(char)) {
      if (index % 2 === 0) {
        return char.toUpperCase();
      } else if (index % 2 === 1) {
        return char.toLowerCase();
      }
    }

    return char;
  }).join('');
}


console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"


/* LSBot concise solution
// Calling toUpperCase() or toLowerCase() on a non-alphabetic character (like ' ', '7', '_')
// returns the same character

function staggeredCase(string) {
  return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
}
*/