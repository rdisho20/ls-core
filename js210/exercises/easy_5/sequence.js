function sequence(count, start) {
  let result = [];
  for (let i = 0; i < count; i++) {
    if (i === 0) {
      result.push(start);
      continue;
    }
    result.push(start + result[i - 1])
  }

  return result;
}


sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []