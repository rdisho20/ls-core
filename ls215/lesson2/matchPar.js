/*
extract all parentheses, in order
as long as there is a '(', we must encounter another '('
as long as there is a ')', we must encounter another ')'
if at any point our counts are anything other than 0 after looping
we have UNBALANCED parentheses

if end w/ ( or begin w ), FALSE
*/

function isBalanced(string) {
  const parentheses = string.replace(/[^()]/g, '');
  if (/^\)/.test(parentheses) || /\($/.test(parentheses)) {
    return false;
  }

  let count = 0;

  parentheses.split('').forEach(char => {
    if (count < 0) return false;
    if (char === '(') count += 1;
    if (char === ')') count -= 1;
  })

  /*
  for (const char of parentheses) {
    if (char === '(') count += 1;
    if (char === ')') count -= 1;
  }
  */

  return count === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false

// (())()) 1 1 -1 -1 1 -1 -1 = -1
// (()))( 1 1 -1 -1 -1 1 = 