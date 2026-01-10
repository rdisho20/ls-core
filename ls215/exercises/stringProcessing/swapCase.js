function swapCase(string) {
  return string
    .split('')
    .map(char => {
      if (char >= 'a' && char <= 'z') {
        return char.toUpperCase();
      } else if (char >= 'A' && char <= 'Z') {
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join('');
}


console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"