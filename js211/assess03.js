// 1

console.log(a);

var a = 1;

/*
logged:
undefined

Undefined because when hoisting, we hoist the variable declaration
but not its assigned value; instead assigned `undefined`.  That comes in the execution phase.
So, during execution phase, we log to the console `a` but the explicit assignment
occurs after the fact, therefore we log `undefined` to the console
*/


// 2

say();

function say() {
  console.log("Wait, I'm hoisted?");
}

/*
logged:
Wait, I'm hoisted?

This is logged because during the declaration phase, the function and
its entirety (signature & implementation) is hoisted to the top,
Then, when we execute the code, we can execute `say` because
it has been defined in the global scope!
*/


// 3

function say() {
  if (false) {
    var a = 'hello from inside a block';
  }

  console.log(a);
}

say();

/*
logged:
undefined

Our function say() is hoisted to the top first during our declaration phase
and inside it's scope, our variable `a` is hoisted to the top of the current function scope.
To explain the output tho, during this declaration phase, `a` is actually initialized w/ a value
of `undefined`, so when our code executes, `say` executes, but the condition doesn't pass, however
when we invoke `console.log(a)` our variable `a` has a value and we log that value (`undefined`) to the console.
*/


// 4
/*
function
- var a
a

=> 'hello'
=> undefined
*/

function hello() {
  a = 'hello';
  console.log(a);

  if (false) {
    var a = 'hello again';
  }
}

hello();
console.log(a);

/*
logged:
hello
ReferenceError

We get this output because during hoisting, first we hoist our function hello definition,
inside that we hoist or variable `var a` (that's in the scope of the function no matter where it's declared)
and its assigned a value of undefined. Inside our function is a variable declaration w/o a keyword,
but it is declared inside our function's scope.  During code execution, when our hello function runs,
given how hoisting in JS works, our `a` assignment to value 'hello' is logged to the console,
since essecntially we are assigning a value to the variable `a` that was declared w/ `var`.  
This explains our first line of output.

In our second line of output, we get a ReferenceError since `a` was not declared in the global scope
(where console.log is invoked), therefore console.log call does not have access to the `a` variable
*/

// 5
let animal = 'dog';

function go() {
  console.log(animal);
  let animal = 'cat';
}

go();

/*
logs:
outputs a ReferenceError

We get this output, because during hoisting, our function definition is read by JS first,
and inside that, our variable `animal` is hoisted to top of the function, but it is
in the TDZ so it does not have a value assigned to it (important later). Outside the function
our gobally scoped variable `animal` is hoisted, but this variable name is shadowed
by our variable w/ the same name inside of our function.  So, when we finall call the function
because our `animal` variable was initialized AFTER the `console.log` invocation, we get a 
ReferenceError, because our variable was still in the TDZ during our execution (variable initialization
  occured after reference!)
*/


// 6
/*
outer()
- inner()
  - a
- var a

var a
*/
var a = 'global';

function outer() {
  console.log(a);
  var a = 'outer';

  function inner(a) {
    a = 'inner';
    console.log(a);
  }

  inner('parameter');
  console.log(a);
}

outer();
console.log(a);

/*
logs:
undefined
'inner'
'outer'
'global'

We get the following output, because first off, the last line logs 'global' because all the `a` variables declared
and initialized inside the functions are shadowing the global `a` variable.

So, regarding the functions, outer definition is hoisted to the top, the inner definition is hoisted to top of
the outer function scope.  Following that we hoist our `var a` variable and it is assigned `undefined` underneath 
the inner function. So, when outer runs, we attempt to log `a` but its assignment, which occurs during execution phase,
occurs on the next line, so we grab the value assigned to `a` during hoisting which was `undefined`.
This explains our first lien of output.  Next, when `inner('paramater') is called, our `a` variable is assigned a 
new value 'inner' which is then logged, which explains our second line of output.
Still inside the scope of outer, when we log `a` a third time, it's value is still 'outer' which is logged again
(on the third line of output).  This happens because our inner function takes a parameter named `a` which shadows
the variable `a` in the scope of outer.  Inside inner, when we reassign `a`, basically the argument that was passed
('parameter') is no longer because `a`'s value is now `inner'.
*/

