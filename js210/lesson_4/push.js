function push(array, element) {
  let length = array.length;
  array[length] = element;
  return array.length;
}


let count = [0, 1, 2];
push(count, 3);
console.log(count);
