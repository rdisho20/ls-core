// 1

let name = 'Alice';

function greet() {
  let name = 'Bob';
  console.log('Hello, ' + name + '!');
}

greet();
console.log('Goodbye, ' + name + '!');

/*
This code logs to the console:
- 'Hello, Bob!'
- 'Goodbye, Alice!'

This is logged because we define 2 variables `name`, where 1 is within the scope of function greet,
and the other is in the global scope.  The second `name` variable is declared w/ `let` inside a function's scope,
and this is the concept of variable shadowing.  We call greet and execute the code, where `name`'s lexical scope is `greet`
then we log to the console on line 9 'Goodbye, Alice!' because our lexical scope is now the global scope where our `name` variable
is still 'Alice'.  It was not reassigned on line 4, because that name was `declared` w/ `let`.
*/

// 2

let value = 0;

if (value) {
  console.log('The value is truthy.');
} else {
  console.log('The value is falsy.');
}

/*
the output of this code is 'The value is falsy.'
This is because any value that is truthy evaluates to `true` in the boolean context
and in this case, our `0` value is falsy, so in the boolean context it evaluates to false,
so our first condition cannot pass, there for we log to the console 'The value is falsy.'
*/

// 3

function removeFirstElement(arr) {
  arr.slice(1);
}

let numbers = [1, 2, 3, 4, 5];
removeFirstNumbers(numbers);
console.log(numbers);

/*
The last line will log [1, 2, 3, 4, 5].  This is because even though we call `slice` on our array,
it is non destructive, meaning a new array is returned, but we do not capture that new array.
We can perform operations on the array, because we pass what is called a reference value to our function.
This reference value is a 'pointer' that points to our array object in memory, so any destructive methods
we invoke on the array will manipulate the array in place (we wouldn't have to capture any new array).
But however, this is not the case here.
*/