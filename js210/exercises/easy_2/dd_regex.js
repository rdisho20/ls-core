function crunch(string) {
  if (!string || string.length === 1) {
    return string;
  }

  let result = '';
  let previousChar = '';
  let char;

  for (let index = 0; index < string.length; index++) {
    char = string[index]
    if (char !== previousChar) {
      result += char;
      previousChar = char;
    } else {
      continue;
    }
  }

  return result;
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""


/*w/ regex

function crunch(text) {
  return text.replace(/(.)\1+/g, '$1');
}


`/(.)\1+/g` means:
- `(.)` capture any character,
- `\1+` match that same character one or more additional times (a run of duplicates),
- `/g` global search.

`'$1'` replaces the whole run with a single copy of the captured character.
*/