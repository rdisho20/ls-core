function centerOf(string) {
  let start;
  let end;
  if (string.length % 2 === 1) {
    start = Math.floor(string.length / 2);
    end = start + 1;
    return string.slice(start, end);
  }

  start = (string.length / 2) - 1;
  end = start + 2;

  return string.slice(start, end);
}


console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"