const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length); // 3, because length property only counts indexed elements
console.log(Object.keys(array).length); // 4, cuz here we access indexed keyes as well as non-indexed

array[-2] = 'Watermelon';
console.log(array.length); // 3, same reason as above; -2 is coerced to string non indexed key value
console.log(Object.keys(array).length); // 5, cuz we can access all keys indexed & non-indexed