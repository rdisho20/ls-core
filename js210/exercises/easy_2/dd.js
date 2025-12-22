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