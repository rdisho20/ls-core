function trim(string) {
  if (string.length === 0) {
    console.log(string);
    return;
  }

  let letters = '';
  let leftRemoved = '';

  for (let index = 0; index < string.length; index++) {
    let char = string[index];
    if (char !== ' ') {
      letters += char;
      leftRemoved += char;
    } else if (letters && char === ' ') {
      leftRemoved += char;
    }
  }

  let rightRemoved = '';
  letters = '';

  for (let index = leftRemoved.length - 1; 0 <= index; index--) {
    let char = leftRemoved[index];
    if (char !== ' ') {
      letters += char;
      rightRemoved += char;
    } else if (letters && char === ' ') {
      rightRemoved += char;
    }
  }

  let result = '';

  for (let index = rightRemoved.length - 1; 0 <= index; index--) {
    result += rightRemoved[index];
  }

  console.log(result);
  return;
}


trim('  abc  ');  // "abc"
trim('abc   ');   // "abc"
trim(' ab c');    // "ab c"
trim(' a b  c');  // "a b  c"
trim('      ');   // ""
trim('');         // ""