function wordSizes(string) {
  if (!string) {
    console.log({});
    return {};
  }

  string = string.split(' ');
  let result = {};
  for (let word of string) {
    let length = word.length;
    if (!result.hasOwnProperty(length)) {
      result[length] = 0;
    }
    result[length] += 1;
  }

  console.log(result);
  return result;
}


wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}


/* LS Solution
function wordSizes(words) {
  const wordsArray = words.split(' ');
  const count = {};

  for (let i = 0; i < wordsArray.length; i += 1) {
    let wordSize = wordsArray[i].length;
    if (wordSize === 0) {
      continue;
    }

    count[wordSize] = count[wordSize] || 0;
    count[wordSize] += 1;
  }

  return count;
}
*/