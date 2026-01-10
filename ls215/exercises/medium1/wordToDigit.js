/*

*/

const numberMap = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
}

function wordToDigit(string) {
  const stringArray = string.split(' ');
  let newStringArray = [];

  for (let word of stringArray) {

    let punctuation;

    if (/[^\w]/.test(word)) {
      punctuation = word[word.length - 1];
      word = word.slice(0, word.length - 1);
    }

    if (numberMap.hasOwnProperty(word)) {
      if (punctuation) {
        newStringArray.push(`${numberMap[word]}${punctuation}`);
        console.log(newStringArray);
      } else {
        newStringArray.push(numberMap[word]);
      }
      continue;
    }

    word = punctuation ? `${word}${punctuation}` : word;
    newStringArray.push(word);
  }

  return newStringArray.join(' ');
}


console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."


/* Launch School SOLUTION
function wordToDigit(sentence) {
  Object.keys(NUM_WORDS).forEach(word => {
    let regex = new RegExp(word, 'g');
    sentence = sentence.replace(regex, NUM_WORDS[word]);
  });

  return sentence;
}
*/