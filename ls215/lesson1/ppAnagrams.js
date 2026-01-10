function anagram(word, wordsArray) {
  // sort words to compare
  // check if each character equals the other, count matches
  // if match count equals word length, we have an anagram
  // ...filter based on anagrams

  return wordsArray.filter(elem => {
    let match = 0;
    const wordSplit = word.split('').sort();
    const compareWord = elem.split('').sort();
    wordSplit.forEach((char, index) => {
      if (char === compareWord[index]) match += 1;
    })

    return match === word.length && word.length === elem.length;
  })
}


console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]


/* LS Solution
Check if a word is an anagram => "areAnagrams"
we need to compare the arrays by checking one's characters against the each of the other's
..."compareArrays"

function anagram(word, list) {
  return list.filter(candidate => areAnagrams(candidate, word));
}

function areAnagrams(source, target) {
  let sourceLetters = source.split('').sort();
  let targetLetters = target.split('').sort();
  return compareArrays(sourceLetters, targetLetters);
}

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  return array1.every((letter, index) => letter === array2[index]);
}
*/