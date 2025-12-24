function swap(string) {
  string = string.split(' ');
  let mapped = string.map((word) => {
    word = word.split('');
    [word[0], word[word.length - 1]] = [word[word.length - 1], word[0]];
    return word.join('');
  })

  console.log(mapped.join(' '));
  return mapped.join(' ');
}


swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"