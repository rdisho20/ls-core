function startsWith(string, searchString) {
  for (let index = 0; index < searchString.length; index++) {
    let char = string[index];
    let searchChar = searchString[index];

    if (char != searchChar) {
      return false;
    }
  }

  return true;
}


let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false