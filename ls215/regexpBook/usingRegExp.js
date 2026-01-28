/*
// 1
function isUrl(url) {
  // const regex = new RegExp('^https?:\/\/.+\.com$');
  // if (regex.test(url)) return true;

  if (/^https?:\/\/.+\.com$/.test(url)) return true;

  return false;
}


console.log(isUrl('https://launchschool.com'));   // -> true
console.log(isUrl('http://example.com'));         // -> true
console.log(isUrl('https://example.com hello'));  // -> false
console.log(isUrl('   https://example.com'));     // -> false
*/


/*
// 2 - my answer works w/o using split()
function fields(string) {
  return string.match(/(\w+|\n)/gi);
}

console.log(fields("Pete,201,Student"));    // ['Pete', '201', 'Student']
console.log(fields("Pete \t 201   ,  TA")); // ['Pete', '201', 'TA']
console.log(fields("Pete \t 201"));         // ['Pete', '201']
console.log(fields("Pete \n 201"));         // ['Pete', '\n', '201']

// LS Solution
let fields = function (text) {
  return text.split(/[ \t,]+/);
};
*/


/*
// 3
function mysteryMath(equation) {
  return equation.replace(/[-+*\/]/, '?');
}

console.log(mysteryMath('4 + 3 - 5 = 2'));
// '4 ? 3 - 5 = 2'

console.log(mysteryMath('(4 * 3 + 2) / 7 - 1 = 1'));
// '(4 ? 3 + 2) / 7 - 1 = 1'
*/



// 5
function danish(string) {
  return string.replace(/\b(apple|blueberry|cherry)\b/, 'danish');
}

console.log(danish('An apple a day keeps the doctor away'));
// -> 'An danish a day keeps the doctor away'

console.log(danish('My favorite is blueberry pie'));
// -> 'My favorite is danish pie'

console.log(danish('The cherry of my eye'));
// -> 'The danish of my eye'

console.log(danish('apple. cherry. blueberry.'));
// -> 'danish. cherry. blueberry.'

console.log(danish('I love pineapple'));
// -> 'I love pineapple'

