/*
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

foo = new Foo(); // 2, cuz initalize new object instance of foo and `this` is the obj instance

foo.bar(); // 2, cuz context is foo
Foo(); // 1, cuz context is global object

obj = {};
Foo.call(obj); // undefined, no property a on `obj` context
obj.bar(); // undefined, no property a on `obj` context

console.log(this.a) // 1, global object property a
*/

/*
let RECTANGLE = {
  area() {
    return this.width * this.height;
  },
  perimeter() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area);
console.log(rect1.perimeter);
*/

/*
function Circle(radius) {
  this.radius = radius
  this.area = function() {
    return Math.PI * (Math.pow(this.radius, 2));
  };
}

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2));
console.log(b.area().toFixed(2));
*/

/*
let ninjaA;
let ninjaB;
function Ninja() {
  this.swung = false;
}

ninjaA = new Ninja();
ninjaB = new Ninja();

Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
};

console.log(ninjaA.swing().swung);
console.log(ninjaB.swing().swung);
*/


let ninjaA = (function() {
  function Ninja() {};
  return new Ninja();
})();

console.log(ninjaA.__proto__);
console.log(Object.getPrototypeOf(ninjaA))

let ninjaB = new ninjaA.constructor;

console.log(ninjaB.constructor === Object.getPrototypeOf(ninjaA));

