/*
// 1
const GREETING = "Hello";
const TARGET_USER = "World";

function greet(salutation, name) {
  return salutation + ", " + name + "!";
}

let finalGreeting = greet(GREETING, TARGET_USER);
console.log(finalGreeting);
*/


/*
// 3
function greet() {
  console.log('Hello!');
}

function returnThree() {
  return 3;
}

function newGreeting(value) {
  return `Hello constant ${value}!`
}

const three = returnThree()
const obj = [greet];
console.log(newGreeting(returnThree()));
*/


/*
// 4
function map(arr, callback) {
  const result = [];
  for (let item of arr) {
    result.push(callback(item))
  }

  return result;
}

let numbers = [1, 2, 3, 4, 5];
let doubled = map(numbers, number => number * 2);
console.log(doubled); // => [2, 4, 6, 8, 10]

let names = ["alice", "bob", "charlie"];
let capitalized = map(names, name => name.toUpperCase());
console.log(capitalized); // => ["ALICE", "BOB", "CHARLIE"]
*/


/*
// 5
function makeCounter() {
  let number = 0;
  function increment() {
    number += 1
    return number;
  }

  return increment;
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
// 7
function subtract(a, b) {
  return a - b;
}

let sub5 = function(number) {
  return subtract(number, 5);
}; 

console.log(sub5(10)); // => 5
console.log(sub5(20)); // => 15
*/


/*
// 8
let greetings = {
  english: "Hello",
  french: 'Bonjour',
  spanish: "Hola",
};

let greetAPerson = function(name, lang) {
  let greeting = greetings[lang];
  console.log(greeting + ", " + name);
}

function sayHelloTo(name) {
  greetAPerson(name, 'english');
}

sayHelloTo('Bob');
*/


/*
// 9
const action = {
  log: function(message) {
    console.log(message);
  },
  reverse: function(string) {
    return string.split('').reverse().join('');
  },
};

function runAction(string, actionName) {
  if (actionName === 'log') {
    return action.log(string);
  } else if (actionName === 'reverse') {
    return action.reverse(string);
  }
}

runAction("Hello!", 'log'); // Should log "Hello!" to the console  
let reversed = runAction("Launch School", 'reverse');  
console.log(reversed); // => "loohcS hcnuaL"
*/

function greet(greeting, punctuation, name) {  
   console.log(greeting + ', ' + name + punctuation);  
 }  

function partial(primary, arg1) {
  function makeGreeter(...remaining) {
    primary(arg1, ...remaining);
  }
  return makeGreeter
}

let sayHello = partial(greet, 'Hello');  
sayHello('!', 'Bob'); // => Hello, Bob!  
  
let sayHi = partial(greet, 'Hi');  
sayHi('.', 'Sarah'); // => Hi, Sarah.
