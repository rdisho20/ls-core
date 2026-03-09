/*
let pointA = {
  x: 30,
  y: 40,

  onXAxis() {
    return this.y === 0;
  },

  onYAxis() {
    return this.x === 0;
  },

  distanceToOrigin() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  },
};

pointA.distanceToOrigin();
pointA.onXAxis();
pointA.onYAxis();
*/

/*
function Point(x=0, y=0) {
  this.x = x;
  this.y = y;
};

Point.prototype.onXAxis = function() {
  return this.y === 0;
};

Point.prototype.onYAxis = function() {
  return this.x === 0;
};
*/

/*
let Point = {
  onXAxis() {
    return this.y === 0;
  },

  onYAxis() {
    return this.x === 0;
  },

  distanceToOrigin() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  },

  init(x, y) {
    this.x = x;
    this.y = y;
    return this;
  },
};

let pointA = Object.create(Point).init(30, 40);

console.log(Point.isPrototypeOf(pointA));

console.log(pointA.distanceToOrigin());
console.log(pointA.onXAxis());
*/

/*
let PetPrototype = {
  sleep() {
    console.log('I am sleeping');
  },

  wake() {
    console.log('I am awake.');
  },

  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  },
};

let pudding = Object.create(PetPrototype).init('Cat', 'Pudding');
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep();
pudding.wake();

let neptune = Object.create(PetPrototype).init('Fish', 'Neptune');
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep();
neptune.wake();
*/

function Pet(animal, name) {
  this.animal = animal;
  this.name = name;
}

Pet.prototype.sleep = function() {
  console.log('I am sleeping');
}

Pet.prototype.wake = function() {
  console.log('I am awake');
}

let pudding = new Pet('Cat', 'Pudding');
let neptune = new Pet('Fish', 'Neptune');

console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep();
pudding.wake();

console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep();
neptune.wake();
