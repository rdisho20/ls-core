function swap(string) {
  string = string.split(' ');
  let result = [];
  for (let i = 0; i < string.length; i++) {
    let word = string[i].split('');
    [word[0], word[word.length - 1]] = [word[word.length - 1], word[0]];
    result.push(word.join(''));
  }

  console.log(result.join(' '));
  return result.join(' ');
}


swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"


/* LS Solution
function swap(words) {
  const wordsArray = words.split(' ');

  for (let i = 0; i < wordsArray.length; i += 1) {
    wordsArray[i] = swapFirstLastCharacters(wordsArray[i]);
  }

  return wordsArray.join(' ');
}

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}
*/