function lastIndexOf(array, value) {
  for (let index = array.length - 1; index >= 0; index--) {
    if (array[index] === value) {
      return index;
    }
  }

  return -1;
}


console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1