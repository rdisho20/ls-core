function rotateRightmostDigits(number, nDigits) {
  const numberStringSplit = String(number).split('');
  const toRotate = numberStringSplit.slice(-nDigits);
  const first = toRotate.shift();
  toRotate.push(first);
  return Number(numberStringSplit.slice(0, -nDigits).concat(toRotate).join('')); // HERE
}


console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917