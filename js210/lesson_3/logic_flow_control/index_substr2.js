/*
-P
input: string1, string2 (substring)
output: index (number)

-R
explicit rules:
- return -1 if 1st string does not contain substring
- return starting index of character in first string, where substring appears first
- (second function) return starting index of character in first string, where substring appears last

implicit rules:
- only alphabetic characters, white space included; no other symbols

-D
- use string -> iterate over

-A
for every index position in string1
  create a range of characters of string1 to compare w/ string2
  get length of window = string2.length
  then use loop to concat all characters to make substring
  IF the substring is equal to string2, return the current index

  if we hit the end and the IF condition didn't run, return -1

*/


function indexOf(firstString, secondString) {
  for (let mainIndex = 0; mainIndex < firstString.length; mainIndex++) {
    if (firstString.length - mainIndex < secondString.length) {
      return -1;
    }

    let substring = '';
    let offset = mainIndex;

    for (let index = 0; index < secondString.length; index++) {
      let char = firstString[offset + index];
      substring += char;
    }

    if (substring === secondString) {
      return mainIndex;
    }
  }
}


function lastIndexOf(firstString, secondString){
  /*
    if you find the first, you can iterate backwards
    up to that point + the length of the secondString to find the last

    start iteration at the last index minus length of secondString
  */
  let firstIndex = indexOf(firstString, secondString);
  if (firstIndex === -1) {
    return -1;
  }

  for (let mainIndex = firstString.length - secondString.length; mainIndex > firstIndex; mainIndex--) {
    let substring = '';
    let offset = mainIndex;

    for (let index = 0; index < secondString.length; index++) {
      let char = firstString[offset + index];
      substring += char;
    }

    if (substring === secondString) {
      return mainIndex;
    }
  }
}


console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1


console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1