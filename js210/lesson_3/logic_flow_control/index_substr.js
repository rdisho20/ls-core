/*
-P
input: string 1, substring
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
start w/ consecutive matching characters = 0

for every character in substring
  then for every character in firstString
    if the character doesn't match, reset consecutive matching characters, & continue to next iteration
    IF the character matches, 
      IF consecutive matching chars count == 0, assign current index in firstString to startingIndex
      increment 'consecutive matching chars'
      then set starting index for firstString to the main index + 1 AND BREAK out of this loop

    check if matching consecutive characters === the length of the substring

--------
when to log starting index

'hel' - 'hello'
h === h, set index to mainIndex + 1 (1)
e === e(1), set index to mainIndex + 1 (2)
l === l(2), set index to mainIndex + 1 (2)


*/


function indexOf(firstStr, secondStr) {
  let consecutiveCharacters = 0;
  let startingIndex = -1;
  let nextIndex = 0;

  for (let mainIndex = 0; mainIndex < secondStr.length; mainIndex++) {
    // let mainChar = secondStr[mainIndex];

    for (let index = nextIndex; index < firstStr.length; index++) {
      let mainChar = secondStr[mainIndex];
      let char = firstStr[index];

      if (mainChar !== char) {
        if (index === firstStr.length - 1) {
          console.log(-1);

          return -1;

        }
        consecutiveCharacters = 0;
        mainIndex = 0;

        continue;

      } else if (mainChar === char) {
        if (consecutiveCharacters === 0) {
          startingIndex = index; // set the starting index for potential match
          nextIndex = startingIndex;
        }
        consecutiveCharacters++;
        nextIndex++;
        
        if (consecutiveCharacters === secondStr.length) {
          console.log(startingIndex);

          return startingIndex;

        } else if (index === firstStr.length - 1) {
          console.log(-1);

          return -1;

        }

        break;
      }
    }
  }
}

indexOf('hello', 'h');
indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1