function push(array, element) {
  let length = array.length;
  array[length] = element;
  return array.length;
}


function splice(array, start, amount) {
  let removed = [];
  let count = 0;
  let index = start;

  while (count <= amount) {
    push(removed, array[index]);
    count++;
    index++;
  }

  let offset = 0;
  for (let index = start + amount; index < array.length; index++) {
    array[start + offset] = array[index];
    offset++;
  }

  array.length = start + (offset);

  return removed;
}


/* LS Solution
function splice(array, begin, number) {
  let removedValues = [];
  for (let index = begin; index < array.length; index += 1) {
    if (index < begin + number) {
      push(removedValues, array[index]);
    }

    array[index] = array[index + number];
  }

  array.length = array.length - removedValues.length;
  return removedValues;
}
*/


let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]


count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 4));                   // [ 3, 4, 5, 6 ]
console.log(count);                                 // [1, 2, 7, 8]