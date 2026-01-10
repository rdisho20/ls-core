function multiplyAllPairs(arr1, arr2) {
  return arr1
    .reduce((accum, number) => {
      arr2.forEach((num) => {
        accum.push(number * num);
      })

      return accum;
    }, [])
    .sort((a, b) => a - b);
}


console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]