function showMultiplicativeAverage(array) {
  let averaged = array.reduce((accum, num) => {
    accum *= num;
    return accum;
  }, 1)

  return (averaged / array.length).toFixed(3);
}


showMultiplicativeAverage([3, 5]);                   // "7.500"
showMultiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"