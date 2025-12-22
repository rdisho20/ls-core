function slice(array, start, end) {
  let resultArray = [];
  for (let index = start; index < end; index++) {
    console.log(array[index]);
    resultArray[resultArray.length] = array[index];
  }

  return resultArray;
}


console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]