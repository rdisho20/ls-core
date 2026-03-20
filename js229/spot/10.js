function Vehicle(make, model) {
  this.make = make;
  this.model = model;
}

Vehicle.prototype.getDetails = function() {
  return `${this.make} ${this.model}`
}

function Car(make, model, numDoors) {
  Vehicle.call(this, make, model);
  this.numDoors = numDoors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

let car1 = new Car('toyota', 'tacoma', 4);

console.log(car1.getDetails());
console.log(Object.getPrototypeOf(Car.prototype) === Vehicle.prototype);
console.log(car1 instanceof Vehicle);
console.log(Car.__proto__);