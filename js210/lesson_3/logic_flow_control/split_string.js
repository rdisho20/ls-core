function splitString(string, delimiter) {
  let result = '';

  if (delimiter === '' || (delimiter)) {
    for (let index = 0; index < string.length; index++) {
      let char = string[index];
      if (delimiter === '') {
        if (index === string.length - 1) {
          result += char;
          break;
        }
        result += `${char}\n`;
        continue;
      } else if (char !== delimiter) {
        result += char;
      } else if (char === delimiter) {
        result += '\n';
      }
    }

    console.log(result);
    return;
  } else if (!delimiter) {
    console.log('Error: No delimiter');
    return;
  }

  /*
  string = string.split(delimiter)

  for (let index = 0; index < string.length; index++) {
    console.log(string[index]);
  }

  return;
  */
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

// splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello