function randomInt(min, max) {
  let withinRange = false;
  let value;

  if (min === max) {
    return min;
  } else if (min > max) {
    [min, max] = [max, min];
  }

  while (withinRange === false) {
    value = Math.random()
    if (value >= min && value <= max) {
      value = value * 100;
      return value.floor();
    }
  }
}


console.log(randomInt(1, 5));