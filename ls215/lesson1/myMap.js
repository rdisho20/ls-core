function myMap(array, func) {
  const resultArray = [];
  array.forEach(elem => resultArray.push(func(elem)));
  return resultArray;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]