function push(array, element) {
  let length = array.length;
  array[length] = element;
  return array.length;
}


function concat(arr1, arr2) {
  let resultArray = [];
  let length = arr1.length + arr2.length;

  for (let i = 0; i < length; i++) {
    if (i >= arr2.length) {
      push(resultArray, arr2[i - arr2.length]);
    } else {
      push(resultArray, arr1[i])
    }
  }

  return resultArray;
}


console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]