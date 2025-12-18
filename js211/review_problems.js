// Rewrite the following code to show what it would look like if hoisting were a real process that physically reorganized your code. The goal is to illustrate the state of the program just before the execution phase begins.

function hoistExample() {
  console.log(a);

  b();

  var a = 'I am a variable';

  var b = function() {
    console.log('I am a function expression');
  };

  c();

  function c() {
    console.log('I am a function declaration');
  }
}

hoistExample();


// Function applications
// 5:
// Write a function makeGreeter that takes a greeting string as an argument. 
// It should return a new function that takes a name string and logs a greeting message to the console.

// Test Cases:
let sayHello = makeGreeter('Hello');
let sayHi = makeGreeter('Hi');

sayHello('Alyssa');  // Logs: Hello, Alyssa
sayHi('SPOT group'); // Logs: Hi, SPOT group


// Function Application 2
// Below is a general-purpose multiply function. Use this function to create a makeMultiplier function.
//  makeMultiplier should take one argument, a factor, and return a new function that takes a single number and returns the product of that number and the factor.

function multiply(a, b) {
  return a * b;
}

function makeMultiplier(factor) {
  // Implement this function
}

let double = makeMultiplier(2);
let triple = makeMultiplier(3);

console.log(double(5));   // Expected output: 10
console.log(triple(7));   // Expected output: 21


// Function application 3
// 7:
// You are given a function formatMessage that takes three arguments: priority, sender, and text. 
// Implement a function makePriorityLogger that takes a priority string and returns a new function.
// This returned function should take two arguments, a sender and text, and log a formatted message with the pre-filled priority.

function formatMessage(priority, sender, text) {
  return `[${priority}] From ${sender}: ${text}`;
}

function makePriorityLogger(priority) {
  // Implement this function
}

let logError = makePriorityLogger('ERROR');
let logInfo = makePriorityLogger('INFO');

console.log(logError('System', 'Disk space low.'));
// Expected output: [ERROR] From System: Disk space low.

console.log(logInfo('Auth', 'User logged in.'));
// Expected output: [INFO] From Auth: User logged in.