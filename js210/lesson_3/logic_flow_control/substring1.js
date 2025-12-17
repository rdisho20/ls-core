function substr(string, start, length) {
  let result = '';
  start = start >= 0 ? start : string.length + start;

  for (let index = start; index < start + length; index++) {
    if (!string[index]) {
      break;
    }
    char = string[index];
    result += char;
  }

  return result;
}


let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""