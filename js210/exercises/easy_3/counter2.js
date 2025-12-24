function wordSizes(string) {
  if (!string) {
    console.log({});
    return {};
  }

  string = string.split(' ');
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  let result = {};
  for (let word of string) {
    let length = 0;
    for (let char of word) {
      if (alpha.includes(char.toLowerCase())) {
        length++;
      }
    }
    if (!result.hasOwnProperty(length)) {
      result[length] = 0;
    }
    result[length] += 1;
  }

  console.log(result);
  return result;
}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}