/*let bob = { name: "Bob", age: 22 };
let studentBob = Object.create(bob);
studentBob.year = "Senior";

console.log(studentBob.name);
console.log(studentBob.year);*/

/*
let obj1 = { a: 1, b: 2};
let obj2 = Object.create(obj1);
obj2.c = 3;
obj2.d = 4;

for (let prop in obj2) {
  console.log(obj2[prop])
}

console.log(obj2);

// 3
// 4
// 1
// 2
// { c: 3, d: 4 } -- prototype properties don't log to console
*/

/*
let myArray = {
  0: "dude",
  1: "bro",
  2: "mah dawg",
  length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}*/

/*
let obj = {
  b: 2,
  a: 1,
  c: 3,
}

let keys = Object.keys(obj);
let keysUpper = keys.map(elem => elem.toUpperCase());

console.log(keysUpper);*/

/*
let myProtoObj = {
  "foo": 1,
  "bar": 2,
}

let myObj = Object.create(myProtoObj);

console.log(myProtoObj);
console.log(myObj);*/


/*
"foo" = primitive
3.1415 = primitive
["a", "b", "c"] = object
false = primitive
foo = neither (identifier)
function bar() { return "bar"; } = object
undefined = primitive
{ a: 2, b: 1 } = object

*/

/*
let myProtoObj = {
  "foo": 1,
  "bar": 2,
}

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

for (let prop in myObj) {
  console.log(prop);
}
*/


/*
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(obj, arr=undefined) {
  if (arr) {
    let result = {};

    for (let index = 0; index < arr.length; index++) {
      result[arr[index]] = obj[arr[index]]
    }

    return result;
  }

  return obj;
}

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }
*/


/*
[1, 2, ["a", ["b", false]], null, {}]

primitives = 1, 2, a, b, false, null        (6)
objects = outer [], inner [], inner2 [], {} (4)
*/


/*
let obj = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};

obj.bar[3].xyz = 606;

console.log(obj);
*/

/*
let bar = foo

function foo(bar) {
  console.log(bar, bar, bar);
}

foo("hello"); // should print "hello hello hello"
bar("hi");    // should print "hi hi hi"*/

/*
function foo(bar) {
  console.log(bar());
}

foo(function() { return "Welcome" });
foo(function() { return 3.1415} );
foo(function() { return [1, 2, 3] });*/


/*
variables: hello, greeting, name, xyzzy, howdy, foo
obj property names: a, b, c, d
primitives: ' ', 1, 2, 3, 4, 5, 'Hi', 'Grace'
objects: function hello, function xyzzy, return {}, [], {}
*/


/*
variables: bar, arg1, arg2, foo, qux, result
obj property names: abc, def, ghi, jkl, mno, pqr, @ arrays 0, 1, 2, 3, 0, 1, 2
primitives: "Hello", 1, 2, 3, 4, 5, 6, @ arrays 0, 1, 2, 3, 0, 1, 2, null, NaN, "Victor", "Antonina" 
objects: {}, inner [], outer [], bar
*/

