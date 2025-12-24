function union(arr1, arr2) {
  let both = arr1.concat(arr2);
  let result = [];
  for (let i = 0; i < both.length; i++) {
    if (!result.includes(both[i])) {
      result.push(both[i]);
    }
  }

  console.log(result);
  return result;
}


union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]