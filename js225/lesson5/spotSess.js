// Describe what prototypal inheritance is in JavaScript. How does it differ from the classical inheritance model found in languages like Java or Ruby

/*
Hierarchy of Family
Grandparents
- prototype === a template
Parents
Children

Dog
description -> prints out the name and the age
german sheprad
- name
- age
saint bernard
- name
- age
rottwilier
-name
- age
*/

function Dog(name, age) {
  this.name = name;
  this.age = age;
}

Dog.prototype.description = function() {
  console.log(this.age, this.name);
}

function GermanShepard(name, age) {
  Dog.call(this, name, age);
}

GermanShepard.prototype = Object.create(Dog.prototype);
GermanShepard.prototype.constructor = GermanShepard;

function SaintBernard(name, age) {
  Dog.call(this, name, age);
}

SaintBernard.prototype = Object.create(Dog.prototype);
SaintBernard.prototype.constructor = SaintBernard;

function Rottweiler(name, age) {
  Dog.call(this, name, age);
}

Rottweiler.prototype = Object.create(Dog.prototype);
Rottweiler.prototype.constructor = Rottweiler;

let dog1 = new GermanShepard('Fido', 3);
console.log(dog1 instanceof Dog);
console.log(dog1 instanceof GermanShepard);
console.log(dog1.constructor);

let dog2 = new SaintBernard('Sparky', 12);

let dog3 = new Rottweiler('Bolt', 4);

console.log(dog1.name, dog2.name, dog3.name);
dog1.description();
