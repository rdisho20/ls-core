/*function logOddNumbers(number) {
  for (let num = 1; num <= number; num++) {
    if (num % 2 == 1) {
      console.log(num);
    }
  }
}*/

/*function logOddNumbers(number) {
  for (let num = 1; num <= number; num += 2) {
    console.log(num);
  }
}*/

function logOddNumbers(number) {
  for (let num = 1; num <= number; num++) {
    if (num % 2 == 0) {
      continue;
    }

    console.log(num);
  }
}

logOddNumbers(19);


