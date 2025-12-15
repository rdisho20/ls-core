function gcd(num1, num2) {
  let min;
  if (num1 < num2) {
    min = num1;
  } else if (num1 > num2) {
    min = num2;
  } else {
    min = num1;
  };

  let greatestDivisor = 1;

  for (let currentDivisor = 2; currentDivisor <= min; currentDivisor++) {
    if (num1 % currentDivisor === 0 && num2 % currentDivisor === 0) {
      greatestDivisor = currentDivisor;
    };
  };

  console.log(greatestDivisor);
}

gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1