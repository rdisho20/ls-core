/* later maybe
// Q set 5, problem 2
const p = console.log;

function minimumSum(array) {
  if (array.length < 5) {
    return null
  }

  let sum = array.reduce


  return sum;
}


// test cases; all should print true
p(minimumSum([1, 2, 3, 4]) === null);
p(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
p(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
p(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
p(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);
*/


/*
// q set 6 problem 5
function isXor(arg1, arg2) {
  if ((arg1 && !arg2) || (!arg1 && arg2)) {
    return true;
  }

  return false;
}

console.log(isXor(5, 0)); // should return 'true'
console.log(isXor(false, true)); // should return `true`
console.log(isXor(1, 1)); // should return `false`
console.log(isXor(null, 'a')); // should return `true`
console.log(isXor('2', '2')); // should return `false
*/


/*
// Q set 8 problem 5
function makeCounter() {
  let count = 0;
  function newFunction() {
    return count += 1;
  }
  return newFunction
}

let counter1 = makeCounter();
console.log(counter1()); // => 1
console.log(counter1()); // => 2
console.log(counter1()); // => 3

let counter2 = makeCounter();
console.log(counter2()); // => 1
console.log(counter1()); // => 4
*/


/*
// Q set 8 problem 7
function subtract(a, b) {
  return a - b;
}

function makeSubtracter(subtrahend) {
  function makeMinuend(number) {
    return subtract(number, subtrahend);
  }
  return makeMinuend;
}

let sub5 = makeSubtracter(5);

console.log(sub5(10)); // => 5
console.log(sub5(20)); // => 15
*/


/*
// Q set 8 problem 10
function greet(greeting, punctuation, name) {  
  console.log(greeting + ', ' + name + punctuation);  
}

function partial(primary, arg1) {  
  return function(...remainingArgs) {
    primary(arg1, ...remainingArgs);
  }  
}
  
let sayHello = partial(greet, 'Hello');  
sayHello('!', 'Bob'); // => Hello, Bob!
  
let sayHi = partial(greet, 'Hi');  
sayHi('.', 'Sarah'); // => Hi, Sarah.
*/


/*
//"use strict";
function setGlobalVar() {
  message = "Hello, world!";
}

setGlobalVar();
console.log(message);
*/


const obj = {};
Object.defineProperty(obj, "a", {
  value: 1,
  writable: false
});

obj.a = 2;       // fails silently
console.log(obj.a); // 1
console.log(obj);


