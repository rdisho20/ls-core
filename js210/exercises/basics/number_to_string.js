function integerToString(number) {
  let digits = [];
  let currentNumber = number;
  let currentDigit;

  do {
    currentDigit = number % 10;
    digits.push(currentDigit);
    currentNumber = (currentNumber - currentDigit) / 10;
  } while (currentNumber >= 1);
  
  return digits.reverse()
}

integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"