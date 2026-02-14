/*
input: array
- can be integers
- or can be strings of letters sorted lexicographically
output: sorted array


Question:
- Will the maximum times I check the whole array be no greater than the length of the array?
*/


function bubbleSort(array) {
  let count = 0

  while (count < array.length) {
    for (let idx = 0; idx < array.length - 1; idx += 1) {
      const current = array[idx];
      const next = array[idx + 1];

      if (current > next) {
        [ array[idx], array[idx + 1] ] = [next, current];
      }
    }

    count += 1;
  }
}

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]



const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]