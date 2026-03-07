/*
let Foo = function() {};
let obj = Foo.prototype;

let bar = new Foo();
let baz = new Foo();

console.log(Object.getPrototypeOf(bar) === obj);
console.log(Object.getPrototypeOf(baz) === obj);

console.log(bar.constructor);
console.log(baz.constructor);

console.log(bar instanceof Foo);
console.log(baz instanceof Foo);
*/

function Dog() {};

Dog.prototype.say = function() {
  console.log(this.name + ' says Woof!');
};

Dog.prototype.run = function() {
  console.log(this.name + ' runs away.');
};

let fido = new Dog();
fido.name = 'Fido';
fido.say();
fido.run();

let spot = new Dog();
spot.name = 'Spot';
spot.say();
spot.run();