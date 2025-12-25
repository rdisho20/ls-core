function doubleConsonants(string) {
  const vowels = 'aeiou- 0123456789!';
  let result = '';
  string.split('').forEach((char) => {
    if (vowels.includes(char.toLowerCase())) {
      result += char;
    } else {
      result += `${char}${char}`;
    }
  });

  console.log(result);
  return result;
}


doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""