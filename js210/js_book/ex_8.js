function isNotANumber(value) {
  if (typeof value === 'number') {
    if (String(value) === 'NaN') {
      return true;
    }
  }

  return false;
}

/*
function isNotANumber(value) {
  if (typeof value === 'number') {
    if (!!value === false && value !== 0 && value !== -0 && value !== 0n) {
      return true;
    } else {
      return false;
    }
  }

  return false;
}
*/

/*
0, -0, 0n
*/