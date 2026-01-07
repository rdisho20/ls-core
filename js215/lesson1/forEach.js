'use strict';

function myForEach(array, func) {
  for (let element of array) {
    func(element);
  }
}

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min);                        // 3