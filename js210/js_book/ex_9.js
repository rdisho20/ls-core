function isNegativeZero(value) {
  return (1 / value === -Infinity);

  /*
  if (value === 0) {
    if (1 / value !== 1 / 0) {
      return true;
    }
  }

  return false;
  */
}

console.log(isNegativeZero(-0));
console.log(isNegativeZero(0));