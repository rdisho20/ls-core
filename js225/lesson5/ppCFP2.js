/*
const shape = {
  getType() {
    return this.type;
  },
}

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = 'triangle';
}

Triangle.prototype = shape;
shape.getPerimeter = function() {
  return this.a + this.b + this.c;
}
Triangle.prototype.constructor = Triangle;

let t = new Triangle(3, 4, 5);
console.log(t.constructor);
console.log(shape.isPrototypeOf(t));
console.log(t.getPerimeter());
console.log(t.getType());
*/

/*
console.log(String.prototype.constructor.name);
console.log(Array.prototype.constructor.name);
console.log(Object.prototype.constructor.name);
*/

/*
function User(first, last) {
  this.first = first;
  this.last = last;
  this.name = this.first + ' ' + this.last;

  return this;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);
console.log(user1.name);
console.log(user2.name);
*/

/*
function createObject(obj) {
  const newObj = {};
  Object.setPrototypeOf(newObj, obj);
  return newObj;
}

let foo = {
  a: 1,
}

let bar = createObject(foo);
console.log(Object.getPrototypeOf(foo));
console.log(Object.getPrototypeOf(bar));
console.log(foo.isPrototypeOf(bar)); // true
console.log(foo.__proto__);
console.log(bar.__proto__);
console.log(createObject.prototype);
*/


/*
let foo = {
  a: 1,
};

// return an object the caller is set to inherit from
Object.prototype.begetObject = function() {
  const newObj = {};
  
  return Object.setPrototypeOf(newObj, this);
}

// OR
Object.prototype.begetObject = function() {
  function F() {}
  F.prototype = this;
  return new F();
}

let bar = foo.begetObject();
console.log(Object.getPrototypeOf(foo));
console.log(foo.isPrototypeOf(bar));
*/

function neww(constructor, args) {
  let obj = Object.create(constructor.prototype);
  let newObj = constructor.apply(obj, args);
  
  return typeof newObj === 'object' ? newObj : obj;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function() {
  console.log('Hello, ' + this.firstName + ' ' + this.lastName);
};

let john = neww(Person, ['John', 'Doe']);
john.greeting();
console.log(john.constructor);

