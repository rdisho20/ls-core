// 1
/*
No it is not accessible in the global scope.
If you try to invoke `foo` after IIFE has been executed,
there will be a ReferenceError, because `foo` is not defined.
Foo isn't accessible from the global scope because it
is a function expression that is immediately invoked which can
be derived from the enclosing parentheses around the function expression.
*/


// 2
/*
`bind`
*/


// 3
/*
function countdown(num) {
  (() => {
    for (let i = num; i >= 0; i -= 1) {
      console.log(i);
    }

    console.log('Done!');
  })();
}

countdown(7);
*/

// 4
/*
There is no final value.  When this code is run we get a ReferenceError
because we are attempting to increment a number value for a property `a`
that ultimately we look for on the main Object.  This is because
`this` loses its context because it resides in a nested function on the `foo`
object, and since this code executes in *sloppy mode*, `this` becomes the global
Object.
*/


// 5
/*
let foo = {
  a: 0,
  incrementA() {
    function increment() {
      this.a += 1;
    }

    increment.call(this);
  },
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);
*/


// 6
/*
Logs to console "JavaScript makes sense!"
Original binding persists, because the way bind works,
we pass in a context object, and using that context object
we return a function referencing that context object's method
`bind` was called on. `bind` uses *closures* to accomplish this.
*/


// 7
function countdown(num) {
  (function 

  )();
}

countdown(5);



