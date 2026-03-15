// 1

function makeGreeter(greeting) {
  return function(name) {
    console.log(greeting + ', ' + name + '!');
  };
}

let sayHello = makeGreeter('Hello');
let sayHi = makeGreeter('Hi');

sayHello('Alice');
sayHi('Bob');

/*
logged to console:
- 'Hello, Alice!'
- 'Hi, Bob!'

Closures make this possible, because in our make greeter function, we take a string greeting,
and we return a function that takes another argument, and inside that returned function we
use the variable `greeting` which is 'closed over' now.  This allows us to use the `makeGreeter`
function to make different types of greetings, in which we can assign to values
then we can call those values to invoke the returned function passing in whatever 'names' we want.
Since we made greeters for 'Hello' and 'Hi', we can now pass in whatever names we want,
because the initial values passed in as `greeting` have been closed over.
*/

// 2

let value = NaN;

if (value) {
  console.log("It's truthy");
} else {
  console.log("It's falsy");
}

console.log(value === NaN);

/*
logged to the console:
- "It's falsy"
- false

NaN evaluates to false in a boolean context, because it is a 'falsy' value.
Our first condition couldn't pass, so our `else` block executed.  This explains the first output.
Our second output is `false` because NaN, does not equal itself, no matter if we use loose
equals or strict equals.
*/

// 3

let arr = [];

if (arr) {
  console.log('The array is truthy.');
} else {
  console.log('The array is falsy.');
}

console.log([] == false);

/*
logged to the console:
- The array is truthy;
- true

In a boolean context, an empty array evaluats to true because it is a `truthy` value.
When compared loosely to false, our array is coerced to a number data type 0 which evaluates to a falsy value
and in a boolean context, this is false, so the output here is `true`
*/

// 4

function createAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit(amount) {
      balance += amount;
      console.log('New balance: ' + balance);
    },
    
    withdraw(amount) {
      if (balance >= amount) {
        balance -= amount;
        console.log('New balance: ' + balance);
      } else {
        console.log('Insufficient funds.');
      }
    },
  };
}

let account = createAccount(100);
account.deposit(50);
account.withdraw(20);

/*
logged to console:
- 'New balance: 150'
- 'New balance: 130'

deposit & withdraw functions close over the variable `balance` because
the object returned by `createAccount` when we invoked it, is referenced by the variable
`account` and references the variable `balance` stored in lexical scope of `createAccount`.
Our object returned by our `createAccount` function continues holding the reference to the
initial `balance` variable even after our `createAccount` function finishes executing.
*/

// 5

function makeValueChecker(value) {
  return function() {
    if (value) {
      console.log('The original value is truthy.');
    } else {
      console.log('The original value is falsy.');
    }
  };
}

let checkEmptyArray = makeValueChecker([]);
checkEmptyArray();

/*
logged to the console:
- 'The original value is truthy.'

Empty arrays when tested in a boolean context returns true, since they are truthy values.
Regarding closure, when `[]` is passed as the `value` arguement when calling `makeValueChecker`,
we capture the empty array in the return function because it closes over the value.
It has 'closed' over the value, because it retains a reference to the `value` variable.
*/