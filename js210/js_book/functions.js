function funcName() {
  func_body;
}

function add(a, b) {
  return a + b;
}

add(2, 3);

let twoAndthree = add(2, 3);
console.log(twoAndthree);

function say(text = "hello") {
  console.log(text + "!");
}

say("Howdy");
say();


function foo() {
  function bar() {
    console.log("BAR");
  }

  bar();
  bar();
}

foo();
bar(); // ReferenceError: bar is not defined


let name = "Pete Hanson";
console.log(name.toUpperCase());
console.log(name);


let oddNumbers = [1, 3, 5, 7, 9];
oddNumbers.pop();
console.log(oddNumbers);


function changeFirstElement(array) {
  array[0] = 9;
}

let oneToFive = [1, 2, 3, 4, 5];
changeFirstElement(oneToFive);
console.log(oneToFive);


function addToArray(array) {
  return array.concat(10);
}

let oneToFive = [1, 2, 3, 4, 5];
console.log(addToArray(oneToFive));
console.log(oneToFive);


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

let sum = add(20, 45);
console.log(sum);

let difference = subtract(80, 10);
console.log(difference);


console.log(add(20, 45));
console.log(subtract(80, 10));


function times(num1, num2) {
  return num1 * num2;
}

console.log(times(add(20, 45), subtract(80, 10)));

let sum = add(20, 40);
let difference = subtract(80, 10);
let result = times(sum, difference);
console.log(result);


add(subtract(80, 10), times(subtract(20, 6), add(30, 5)));


function makeGreeter(name) {
  return function greeter() {
    console.log(`Hello ${name}.`);
  };
}


let greetPeople = () => console.log("Good Morning!");
greetPeople();


let add = (a, b) => a + b;
let getNumber = (text) => {
  let input = prompt(text);
  return Number(input);
};

let number1 = getNumber("Enter a number: ");
let number2 = getNumber("Enter another number: ");
console.log(add(number1, number2));


let add = (a, b) => a + b;
let getNumber = (text) => {
  let input = prompt(text);
  return Number(input);
};

let number1 = getNumber("Enter a number: ");
let number2 = getNumber("Enter another number: ");
console.log(add(number1, number2));


function first() {
  console.log("first function");
}

function second() {
  first();
  console.log("second function");
}

second();


let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);