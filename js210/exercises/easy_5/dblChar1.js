function repeater(string) {
  let result = '';
  string.split('').forEach(char => result += `${char}${char}`);

  return result;
}


repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""