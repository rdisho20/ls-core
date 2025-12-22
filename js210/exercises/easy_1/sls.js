function shortLongShort(firstString, secondString) {
  let firstLength = firstString.length;
  let secondLength = secondString.length;

  if (firstLength < secondLength) {
    console.log(firstString + secondString + firstString);
    return firstString + secondString + firstString;
  } else if (secondLength < firstLength) {
    console.log(secondString + firstString + secondString);
    return secondString + firstString + secondString;
  }
}


shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"