function generatePattern(nStars) {
  let stars = [];
  for (let num = 1; num <= nStars; num++) {
    stars.push('*');
  }

  console.log(stars)

  let numbers = '';
  for (let num = 1; num <= nStars; num++) {
    if (num >= 0) {
      numbers += String(num % 10);
    } else {
      numbers += String(num);
    }
    stars.pop();
    console.log(`${numbers}${stars.join('')}`);
  }
}

generatePattern(7);
generatePattern(20);