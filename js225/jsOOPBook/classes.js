/*
class Cat {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  speak() {
    console.log(
      `Meow. I am ${this.name}. ` +
      `I am a ${this.age}-year-old ${this.color} cat.`
    )
  }
}
*/

/*
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
}

const myRectangle = new Rectangle(10, 5);
console.log(myRectangle.area());

class Square {
  constructor(side) {
    this.side = side;
  }

  area() {
    return this.side * this.side;
  }
}

const mySquare = new Square(6);
console.log(mySquare.area());
*/

/*
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width;
  }
}

const myRectangle = new Rectangle(10, 5);
console.log(myRectangle.area());        // 50

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
    this.side = side;
  }
}

const mySquare = new Square(6);
console.log(mySquare.area());
console.log(mySquare.side);             // 6

console.log(myRectangle); // Rectangle { height: 10, width: 5 }
console.log(mySquare);    // Square { height: 6, width: 6, side: 6 }

console.log(mySquare instanceof Square);
console.log(mySquare instanceof Rectangle);

console.log(myRectangle instanceof Square);
console.log(myRectangle instanceof Rectangle);
*/

/*
class Smartphone {
  constructor(brand, model, releaseYear) {
    this.brand = brand;
    this.model = model;
    this.year = releaseYear;
  }

  checkBatteryLevel() {
    console.log('Battery level is 100%');
  }

  displayInfo() {
    console.log(`${this.brand}, ${this.model}, ${this.year}`)
  }
}

let iphone12 = new Smartphone('Apple', 'iPhone 12', 2020);
let galaxyS21 = new Smartphone('Samsung', 'Galaxy S21', 2021);

console.log(iphone12.checkBatteryLevel());
// Apple iPhone 12 has 75% battery remaining.

console.log(iphone12.displayInfo());
// 2020 Apple iPhone 12

console.log(galaxyS21.checkBatteryLevel());
// Samsung Galaxy S21 has 75% battery remaining.

console.log(galaxyS21.displayInfo());
// 2021 Samsung Galaxy S21
*/

class Vehicle {
  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
  }

  accelerate() {
    console.log('accelerating');
  }

  decelerate() {
    console.log('decelerating');
  }
}

class Car extends Vehicle {
  constructor(color, weight, licenseNumber) {
    super(color, weight);
    this.licenseNumber = licenseNumber;
  }

  honk() {
    console.log('honk!');
  }
}

class Boat extends Vehicle {
  constructor(color, weight, homePort) {
    super(color, weight);
    this.homePort = homePort
  }

  dropAnchor() {
    console.log('anchoring!');
  }
}

class Plane extends Vehicle {
  constructor(color, weight, airline) {
    super(color, weight);
    this.airline = airline;
  }

  takeOff() {
    console.log('taking off!');
  }

  land() {
    console.log('landing!');
  }
}

const car = new Car('blue', '2 tons', 123456);
car.honk();
console.log(car);

const boat = new Boat('green', '2.5 tons', 'Lafayette');
boat.dropAnchor();
console.log(boat);

const plane = new Plane('white', '10 tons', 'Primitive');
plane.accelerate();
plane.decelerate();
plane.takeOff();
plane.land();
console.log(plane);

console.log(car instanceof Vehicle);
console.log(boat instanceof Vehicle);

console.log(car instanceof Car);
console.log(boat instanceof Car);