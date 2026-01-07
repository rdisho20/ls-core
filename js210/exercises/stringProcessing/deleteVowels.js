function removeVowels(strings) {
  const vowelsRemoved = [];

  for (let word of strings) {
    let newWord = '';
    for (let char of word) {
      if (!/[aeiouAEIOU]/.test(char)) {
        newWord += char;
      }
    }

    vowelsRemoved.push(newWord);
  }

  return vowelsRemoved;
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]