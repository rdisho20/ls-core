/*
class Cat {
  constructor(name='Kitty') {
    this.name = name;
  }

  static genericGreeting() {
    console.log(`I'm a cat.`);
  }

  greet() {
    console.log(`Hello! My name is ${this.name}.`);
  }

  rename(newName) {
    this.name = newName;
  }
}

let kitty = new Cat();
kitty.greet(); // Hello! My name is Kitty!
kitty.rename('Sophie');
kitty.greet(); // Hello! My name is Sophie!
Cat.genericGreeting();
*/

/*
// 5
class Rectangle {
  #width;
  #length;

  constructor(width, length) {
    this.#width = width;
    this.#length = length;
  }

  getWidth() {
    return this.#width;
  }

  getLength() {
    return this.#length;
  }

  getArea() {
    return this.#width * this.#length;
  }
}

let rect = new Rectangle(4, 5);

console.log(rect.getWidth());
console.log(rect.getLength());
console.log(rect.getArea());

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`);
*/

/*
class Cat {
  constructor(name) {
    this.name = name;
  }

  speaks() {
    return `${this.name} the truth`;
  }
}

let fakeCat = Object.create(Cat.prototype);
console.log(fakeCat.constructor);
console.log(Object.getPrototypeOf(fakeCat));
console.log(fakeCat instanceof Cat);
console.log(fakeCat.hasOwnProperty('name'));
console.log(fakeCat.speaks());
*/

/*
// 8
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat extends Pet {
  constructor(name, age, furColor) {
    super(name, age);
    this.furColor = furColor;
  }

  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.furColor} fur.`;
  }
}

let pudding = new Cat('Pudding', 7, 'black and white');
let butterscotch = new Cat('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());
*/

/*
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }

  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
  }

  introduce() {
    // let superIntroduce = Animal.prototype.introduce;
    return super.introduce() + ' Meow meow!';
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`;
  }
}

let cat = new Cat('Pepe', 2, 'happy');
console.log(cat.introduce());
console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");

let dog = new Dog('Fido', 4, 'happy', 'Sir Mix A Lot');
console.log(dog.greetMaster());
*/

/*
class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  getWheels() {
    return this.wheels;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model, 4);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model, 2);
  }
}

class Truck {
  constructor(make, model, wheels, payload) {
    super(make, model, 6);
    this.payload = payload;
  }
}
*/

/*
class Person {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    return `Hello, I'm ${this.name}. It's very nice to meet you.`;
  }
}

class Shouter extends Person {
  constructor(name) {
    super(name);
  }

  greeting() {
    return super.greeting().toUpperCase();
  }
}

const person = new Person('Jane');
const shouter = new Shouter('Bob');

console.log(person.greeting());
console.log(shouter.greeting());
*/

/*
class Shelter {
  constructor() {
    this.adoptions = {};
  }

  printAdoptions() {
    for (let [owner, pets] of Object.entries(this.adoptions)) {
      console.log(`${owner} has adopted the following pets:`)
      for (let pet of pets) {
        console.log(pet.info());
      }
    }
  }

  adopt(owner, pet) {
    if (!this.adoptions.hasOwnProperty(owner.name)) {
      this.adoptions[owner.name] = [pet];
    } else {
      this.adoptions[owner.name].push(pet);
    }

    owner.pets.push(pet);
  }
}

class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }

  info() {
    return `a ${this.type} named ${this.name}`;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  numberOfPets() {
    return this.pets.length;
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();

shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();

console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);
*/


class Banner {
  constructor(message) {
    this.message = message;
  };

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return `+-${'-'.repeat(this.message.length)}-+`;
  }

  emptyLine() {
    return `| ${' '.repeat(this.message.length)} |`;
  }

  messageLine() {
    return `| ${this.message} |`;
  }
}

let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();

let banner2 = new Banner('');
banner2.displayBanner();


