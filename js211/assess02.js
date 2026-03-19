// 1


var a = 'A';
let b = 'B';

function outer() {
  console.log(a, b);

  var a = 'AA';
  let b = 'BB';

  function inner() {
    console.log(a, b);
    a = 'AAA';
    b = 'BBB';
  }

  inner();
  console.log(a, b);
}

outer();
console.log(a, b);


/*
code output:
'undefined', followed by a ReferenceError

When `outer` is called, we log 'undefined' then an error.  This because during hoisting at the declaration phase
our function `outer` and it's definition hoisted to top of it's scope (global scope).  Following.
immediately `a` & `b` declarations hoisted to top of function scope (`outer`).  `var a` is assigned 
the value `undefined` during the declaration phase, however `let b` declaration is not assigned a value,
but lies in the TDZ.  However to further elucidate why we have the output we have, after the function
declaration phase, we hoist declarations for `a` and `b` (var a & let b), where `var a` is assigned `undefined`
during declaration phase, but `let b` is not initialized w/ any value, again in the TDZ.

So to conclude, our output when we call `outer`, we log the globally scoped `undefined` value, and then
we get a ReferenceError becuase variable `b` is not defined at the time of executing our `console.log` call inside `outer`.

The global console.log call and any of the other console.log calls inside outer and inner do not run
as the program has terminated because of the ReferenceError
*/


// 2
function messWithVars(arr, obj) {
  arr.push(4);
  obj.name = 'Bob';

  arr = ['four', 'five'];
  obj = { name: 'Alice' };

  console.log('Inside function: ', arr, obj.name);
  return obj;
}

let a = [1, 2, 3];
let b = { name: 'Pete' };
let c = messWithVars(a, b);

console.log('Outside function A:', a);
console.log('Outside function B:', b.name);
console.log('Outside function C:', c.name);

/*
logs:
Inside function: ['four', 'five'], Alice
Outside function A: [ 1, 2, 3, 4 ]
Outside function B: Bob
Outside function C: Alice

When `messWithVars(a, b)` is executed:
`arr` is a parameter that takes a copy of the reference assigned to `a` that points to the same object
in the heap as `a`'s reference value does. `obj` is a paremeter that takes a copy of the reference assigned to `b`
that points to the same object in the heap as `b`'s reference value does.

`a` holds a reference value that points to the array object's initial value [1, 2, 3]
`b` holds a reference value that points to the object's initial value { name: 'Pete' }
`c` holds the return value which is a new reference value that points to the object { name: 'Alice' }

To explain the output, our invocation of `messWithVars` occurs before any of our other log statements,
and inside our function, we have another log statment.  This is the first line of the output. Inside the function
our original array object referenced by `arr` is mutated (explaining second line of output).  But we see just 2
lines below that, our `arr` variable is assigned a new reference value that points to a new array which explains partly
our output for line 1.  When we reassign the object's property `name` that is referenced by the value stored in `obj`
we mutate the original object, so this explains the third line of our output (`Bob`).  Following 2 lines below, we
reassign the `obj` variable a new reference value pointing to a new object `{ name: 'Alice' }`, which explains
the second part of the first line of our output.  We then return this new reference value, so when we log
it's name property on the last line, we get 'Alice'.
*/


// 3
function transformData(data) {
  return data.map(elements => {
    return elements.map(elem => {
      if (typeof elem === 'number') {
        if (elem % 2 === 0) {
          return elem + 1;
        } else if (elem % 2 === 1) {
          return elem - 1;
        }
      } else return elem;
    })
  })
}

let originalData = [
  ['a', 1, 'b'],
  [2, 'c', 3],
  ['d', 4, 'e', 5],
];

let transformedData = transformData(originalData);

// What should transformedData look like?
console.log(transformedData);
// Expected: [['a', 0, 'b'], [3, 'c', 2], ['d', 5, 'e', 4]]

// The original array must be unchanged.
console.log(originalData);
// Expected: [['a', 1, 'b'], [2, 'c', 3], ['d', 4, 'e', 5]]
