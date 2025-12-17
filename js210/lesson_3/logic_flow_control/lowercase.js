function toLowerCase(string) {
  let result = '';

  for (let index = 0; index < string.length; index++) {
    let asciiNumeric = string.charCodeAt(index);
    if (asciiNumeric >= 48 && asciiNumeric <= 57) {
      char = String.fromCharCode(asciiNumeric);
      result += char;
    } else if (asciiNumeric >= 97 && asciiNumeric <= 122) {
      char = String.fromCharCode(asciiNumeric);
      result += char;
    } else {
      asciiNumeric += 32;
      char = String.fromCharCode(asciiNumeric);
      result += char;
    }
  }

  console.log(result);
  return result;
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"