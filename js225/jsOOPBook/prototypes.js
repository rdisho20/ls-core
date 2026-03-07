/*
class Cat {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  whoAmI() {
    console.log(`My name is ${this.name}`,
    `\nI am a ${this.color} cat.`);
  }
}

let cheddar = new Cat('Cheddar', 'ginger');
let cheddarProto = Object.getPrototypeOf(cheddar);

console.log(Object.getOwnPropertyNames(cheddarProto));

cheddar.whoAmI();
*/

/*
class Animal {
  constructor(type) {
    this.type = type;
  }

  eat() {
    console.log("I am eating.");
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super();
    this.name = name;
    this.color = color;
  }

  whoAmI() {
    console.log(`My anem is ${this.name}.`,
    `\nI am a ${this.color} cat.`);
  }
}

let cheddar = new Cat('Cheddar', 'ginger');
let cheddarProto = Object.getPrototypeOf(cheddar);
let cheddarProto2 = Object.getPrototypeOf(cheddarProto);

console.log(Object.getOwnPropertyNames(cheddarProto));

console.log(Object.getOwnPropertyNames(cheddarProto2));

console.log(cheddarProto2 === Animal.prototype);

cheddar.whoAmI();
cheddar.eat();
*/

/*
class Animal {};
class Cat extends Animal {};

let cat = new Cat();
let catProto = Object.getPrototypeOf(cat);
console.log(catProto === Cat.prototype);

let myProto = {
  meow() {
    console.log("Meow!");
  }
};

Object.setPrototypeOf(cat, myProto);
catProto = Object.getPrototypeOf(cat);

cat.meow();
console.log(catProto === Cat.prototype);
console.log(catProto, myProto);
*/

/*
class Foo {
  static identity() {
    console.log('This is Foo.identity()');
  }
}

class Bar {
  static whoAmI() {
    console.log('This is Bar.whoAmI()');
  }
}

let FooProto = Object.getPrototypeOf(Foo);
let FooProto2 = new Foo();
console.log(FooProto);
console.log(Object.getPrototypeOf(FooProto2));

Object.setPrototypeOf(Bar, Foo);
Bar.whoAmI();
Bar.identity();
*/

/*
let foo = () => console.log('foo');
let fooProto = Object.getPrototypeOf(foo);

console.log(foo.prototype);
console.log(fooProto);
console.log(fooProto === Function.prototype);
*/

/*
class Animal {}

Animal.prototype.foo = function() {
  console.log('this is foo');
}

Animal.prototype.bar = function() {
  console.log('this is bar');
}

class Tiger extends Animal {}

console.log(Object.getPrototypeOf(Tiger.prototype)); // { foo: [Function (anonymous)], bar: [Function (anonymous)] }
console.log(Animal.prototype);                       // { foo: [Function (anonymous)], bar: [Function (anonymous)] }

function Vehicle() {}

Vehicle.prototype.drive = function() {
  console.log('off we go');
}

console.log(Vehicle.prototype);
*/

/*
class Mammal {
  foo() {console.log('Mammal.foo')}
}

class Whale extends Mammal {
  foo() {console.log('Whale.foo')}
}

class Beluga extends Whale {}

let beluga = new Beluga();
beluga.foo();
beluga.bar();
*/

/*
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log(`${this.name} is eating.`);
};

function Mammal(name, hasFur) {
  Animal.call(this, name);
  this.hasFur = hasFur;
}

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;

Mammal.prototype.sleep = function() {
  console.log(`${this.name} is sleeping.`);
};

function Dog(name, hasFur, breed) {
  Mammal.call(this, name, hasFur);
  this.breed = breed;
}

Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  console.log(`${this.name} the ${this.breed} is barking.`);
}

let myDog = new Dog('Rex', true, 'German Shepard');
myDog.eat();
myDog.sleep();
myDog.bark();
console.log(myDog.name);
*/

/*
function Smartphone(brand, model, releaseYear) {
  this.brand = brand;
  this.model = model;
  this.releaseYear = releaseYear;
}

Smartphone.prototype.displayInfo = function() {
  console.log(this.brand, this.model, this.releaseYear);
}

Smartphone.prototype.batteryLevelCheck = function() {
  console.log('battery level is 100%');
}

let phone1 = new Smartphone('Apple', 'iPhone 12', 2020);
let phone2 = new Smartphone('Samsung', 'Galaxy S21', 2021);

console.log(phone1);
console.log(phone2);
*/


function Vehicle() {}

Vehicle.prototype.accelerate = function() {
  console.log('accelerating');
}

Vehicle.prototype.decelerate = function() {
  console.log('decelerate');
}

function Car() {
  Vehicle.call(this);
}

Car.prototype = Object.create(Vehicle.prototype)
console.log('car prototype is: ', Car.prototype.constructor)
Car.prototype.constructor = Car;

Car.prototype.honk = function() {
  console.log('honking!');
}

function Boat() {
  Vehicle.call(this);
}

Boat.prototype = Object.create(Vehicle.prototype);
Boat.prototype.constructor = Boat;

Boat.prototype.dropAnchor = function() {
  console.log('dropping anchor');
}

function Plane() {
  Vehicle.call(this);
}

Plane.prototype = Object.create(Vehicle.prototype);
Plane.prototype.constructor = Plane;

Plane.prototype.takeOff = function() {
  console.log('taking off!');
}

Plane.prototype.land = function() {
  console.log('landing!');
}

let car = new Car();
let boat = new Boat();
let plane = new Plane();

car.honk();
boat.dropAnchor();
plane.takeOff();
plane.land();

console.log(Object.getPrototypeOf(car));


