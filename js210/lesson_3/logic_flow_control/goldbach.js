function isPrime(number) {
  if (number === 0 || number === 1) {
    return false;
  }

  for (let num = 2; num <= (number / 2); num++) {
    if (number % num === 0) {
      return false;
    }
  }

  return true;
}


function getPrimes(number) {
  let primes = []

  // get all prime numbers less than expectedSum
  for (let num = 2; num < number; num++) {
    if (isPrime(num)) {
      primes.push(num)
    }
  }

  return primes;
}


function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }

  let primes = getPrimes(expectedSum);

  for (let mainIndex = 0; mainIndex < primes.length; mainIndex++) {
    let first = primes[mainIndex];

    if (first > (expectedSum / 2)) {
      break;
    }

    for (let index = 0; index < primes.length; index++) {
      let second = primes[index];
      if (first + second === expectedSum) {
        console.log(`${first} ${second}`);
      }
    }
  }
}


checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53


/* LSBot Solution
function isPrime(n) {
  if (n < 2) return false;
  for (let d = 2; d * d <= n; d++) {
    if (n % d === 0) return false;
  }
  return true;
}

function checkGoldbach(expectedSum) {
  if (expectedSum < 4 || expectedSum % 2 === 1) {
    console.log(null);
    return;
  }

  for (let first = 2; first <= expectedSum / 2; first++) {
    const second = expectedSum - first;
    if (isPrime(first) && isPrime(second)) {
      console.log(first, second);
    }
  }
}
*/