/*function multiplesOfThreeAndFive() {
  for (let num = 0; num <= 100; num++) {
    if (num % 3 == 0 || num % 5 == 0) {
      if (num % 3 == 0 && num % 5 == 0) {
        console.log(String(num) + '!');
        continue;
      }
      console.log(String(num));
    }
  }
}*/

function multiplesOfThreeAndFive(min, max) {
  for (let num = min; num <= max; num++) {
    if (num % 3 == 0 || num % 5 == 0) {
      if (num % 3 == 0 && num % 5 == 0) {
        console.log(String(num) + '!');
        continue;
      }
      console.log(String(num));
    }
  }
}

multiplesOfThreeAndFive(5, 75);