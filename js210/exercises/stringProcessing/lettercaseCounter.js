function letterCaseCount(string) {
  const counts = {};

  for (let char of string) {
    if (/[a-z]/.test(char)) {
      counts.lowercase = counts.lowercase ? counts.lowercase += 1 : 1;
    } else if (/[A-Z]/.test(char)) {
      counts.uppercase = counts.uppercase ? counts.uppercase += 1 : 1;
    } else {
      counts.neither = counts.neither ? counts.neither += 1 : 1;
    }
  }

  return counts;
}


console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }