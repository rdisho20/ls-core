// 1
/*
An object factory is a function that returns an object

function objFactory (name, age) {
  return {
    name, age,
    logInfo() {
      console.log(name, age);
    }
  };
}
*/


// 2
/*
Disadvantages of an object factory:
- every instance generated w/ the object factory will have its own copy of
the same behaviors(methods) defined in the return object
- with instances generated from an object factory, there is no way to do a type check,
in other words, we cannot confirm if the object was created w/ an object factory
*/


// 3
/*
`this` represents a context object
*/


// 4
/*
Execution context is the concept that explains how JavaScript determines
context for object behaviors.  There are 2 types, implicit and explicit.
1. Implicit context: If a method were to reference `this` and it was called on an object that has
that particular behavior, `this` represents that object.
2. Explicit context: The developer sets this explicitly by invoking the method w/ a specified context
using any of the following methods: `call`, `apply`, `bind`
*/


// 5
/*

*/

/* TEST
let obj1 = {
  name: 'obj1',
  makeLogger() {
    return () => console.log(this.name);
  },
};

let obj2 = { name: 'obj2' };

obj1.makeLogger()();

let logger = obj1.makeLogger.call(obj2);
logger(); // ?
*/

/* TEST
let a = 1;
let foo;
let obj;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

foo = new Foo(); // logs 2

foo.bar(); // logs 2
Foo(); // can't set properties of undefined (this.a) because strict mode
// IF not strict mode... logs 2

obj = {};
Foo.call(obj); // logs 2
obj.bar(); // logs 2
console.log(obj); // { a: 2, bar: function() {...} }

console.log(this.a); // logs 2
*/

/*
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person('Ryan', 32);
console.log(Object.getPrototypeOf(Person.prototype));
console.log(Object.constructor);
console.log(Person instanceof Function);
*/

/*
person1 ->
  Person.prototype ->
    Function.prototype ->
      Object.prototype ->
        null
*/

/*
(function factorial(n) {
  if (n <= 1) {
    console.log(n);
    return 1;
  } else {
    console.log(n);
    return n * factorial(n - 1);  // recursive call
  }
})(10);
*/