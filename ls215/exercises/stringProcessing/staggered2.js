/*
let array = ['h', 'e', 'l', '1', '3', 'l', '9', 'o']
console.log(array.toReversed().slice(1));
*/


function staggeredCase(string) {
  let alphaChars = '';

  return string.split('').map((char, index) => {
    if (/[a-zA-Z]/.test(char)) {
      const previousAlphaChar = alphaChars[alphaChars.length - 1];
      if (previousAlphaChar >= 'a' && previousAlphaChar <= 'z') {
        char = char.toUpperCase();
        alphaChars += char;
      } else if (previousAlphaChar >= 'A' && previousAlphaChar <= 'Z') {
        char = char.toLowerCase();
        alphaChars += char;
      } else {
        char = char.toUpperCase();
        alphaChars += char;
      }
    }

    return char;
  }).join('');
}
  

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"   
console.log(staggeredCase('ALL_CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 444 nUmBeRs"

