function logMultiples(number) {
  let largestMultiple = Math.floor(100 / number) * number;
  for (let num = largestMultiple; num >= 0; num -= number) {
    if (num % 2 === 1) {
      console.log(num);
    }
  }
}

logMultiples(17);
console.log("----------")
logMultiples(21);