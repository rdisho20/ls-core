/*
function greet(greeting, name) {
  const capitalized = greeting[0].toUpperCase() + greeting.slice(1);
  return `${capitalized}, ${name}!`;
}

//
function makeGreeter(greeting) {
  return function(name) {
    greet(greeting, name);
  }
}
//

function partial(primary, arg1) {
  return function(arg2) {
    return primary(arg1, arg2);
  };
}

const sayHello = partial(greet, 'hello');
const sayHi = partial(greet, 'hi');

console.log(sayHello('Brandon'));
console.log(sayHi('Sarah'));
*/

/*
function subtract(a, b) {
  return a - b;
}

function makeSubN(subtrahend) {
  return function(minuend) {
    return subtract(minuend, subtrahend);
  }
}

const sub4 = makeSubN(4);
const sub7 = makeSubN(7);

console.log(sub4(10)); // 6
console.log(sub4(20)); // 16
console.log(sub7(10)); // 3
console.log(sub7(20)); // 13
*/

/*
function makePartialFunc(func, b) {
  return function(a) {
    return func(a, b);
  }; 
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let multiplyBy5 = makePartialFunc(multiply, 5);
let divideBy2 = makePartialFunc(divide, 2);

console.log(multiplyBy5(100)); // 500
console.log(divideBy2(100)); // 50
*/

let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  return function(students) {
    return rollCall('Math', students);
  }
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan




