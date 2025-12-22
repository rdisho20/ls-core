function wordCount(string) {
  let stringSplit = string.split(' ');
  let result = {};

  for (let word of stringSplit) {
    if (result.hasOwnProperty(word)) {
      result[word] += 1;
    } else {
      result[word] = 1;
    }
  }

  console.log(result);
  return result;
}


wordCount('box car cat bag box');  // { box: 2, car: 1, cat: 1, bag: 1 }


/*
function wordCount(str) {
  let strArray = str.split(' ');
  let result = {};

  for (let word of strArray) {
    let total = strArray.reduce((accum, element) => {
      let count = 0;
      if (element === word) {
        count++;
      }

      return count;
    }, 0)

    result[word] = total;
  }

  console.log(result);
  return result;
}
*/