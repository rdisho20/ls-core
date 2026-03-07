/*
function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.bark = function() {
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

console.log(Dog.prototype);
console.log(Dog.prototype.constructor);
console.log(Object.getPrototypeOf(maxi));

maxi.bark();
console.log(Dog);
console.log(Dog('Maxi', 'German Shepherd', 32));
*/


/*
let ryan = {
  name: 'ryan',
}

let beth = {
  name: 'beth',
}


console.log(ryan.constructor);
console.log(ryan.__proto__);
console.log(Function.prototype);
console.log(Object.prototype.constructor);
console.log(Object.prototype.constructor === beth.constructor);
*/

let Sponge = {
  species: 'Sponge',
  sayHi() {
    console.log('Hi, I am a sponge!');
  },
}

let spongebob = Object.create(Sponge);
spongebob.eat = function() {
  console.log('Yumm...');
}

spongebob.sayHi();
console.log(spongebob.constructor);
console.log(spongebob.__proto__);


