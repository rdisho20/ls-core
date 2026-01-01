/*
// 5
function isXor(arg1, arg2) {
  if ((arg1 || arg2) && arg1 !== arg2) {
    return true;
  }

  return false;
}

console.log(isXor(false, true));
console.log(isXor(1, 1));
console.log(isXor(null, 'a'));
console.log(isXor('2', '2'));
console.log(isXor('2', '3'));
console.log(isXor(2, 3));
*/


/*
// 6
console.log('cat' && 'dog');  // dog
console.log(0 || 'hello');  // hello
console.log(null && undefined); // undefined
console.log(NaN || "I win!"); // I win!
console.log({} && "I win!"); // I win!
*/


/*
// 8
// Buggy Code
function isEven(num) {
  return num % 2 === 0;
}

let numberIsEven = isEven(4);

if (numberIsEven) {
  console.log('The number is even.');
} else {
  console.log('The number is not even.');
}
*/


/*
// 9
let truthyValue = 'hello';  
let trueValue = true;  
  
console.log(truthyValue == trueValue);  // true
console.log(truthyValue === trueValue);   // false
  
if (truthyValue) {  
  console.log('This will run.');  // 'This will run.'
}  
  
if (truthyValue === true) {  
  console.log('Will this run?');  // NO, THIS WON'T RUN
}  
*/


// 10
function processData(data) {  
  if (data) {  
    data.processed = true;  
    return data;  
  } else {  
    console.log('No data to process.');  
  }  
}  
   
let myObject = { id: 1 };  
let anotherObject = myObject;  // made copy :: reference -> same obj
let result1 = processData(myObject);  // data.processed = true
  
let nullData = null;  
let result2 = processData(nullData);  // prints 'No data to process'
  
console.log(anotherObject);  
console.log(result1);  


