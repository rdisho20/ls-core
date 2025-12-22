function unshift(array, value) {
  for (let index = array.length; index >= 0; index--) {
    if (index === 0) {
      array[0] = value;
    } else {
      array[index] = array[index - 1];
    }
  }

  return array.length;
}


let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]