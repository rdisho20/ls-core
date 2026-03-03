/*
let cocoa = {
  animalType: 'cat',
  name: 'Cocoa',

  purr() {
    console.log('Purr');
  },

  info() {
    console.log(`My name is ${this.name}.  I am a ${this.animalType}.`);
  },
}

cocoa.purr();
cocoa.info();
*/


/*
let bankAccount = {
  accountNumber: '1234567890',
  balance: 10234.56,
  accountType: 'checking',
  name: 'Jane Doe',
  address: '2246 NW 12th Ave, Portland, Oregon',
  phone: '456-334-1221',

  withdraw(amount) {
    if (this.balance >= amount) {
      this.valance -= amount;
      return amount;
    } else {
      return 0;
    }
  },

  deposit(amount) {
    this.balance += amount;
  },
}
*/

/*
let cat = {
  move() {
    console.log("The cat is walking");
  },
};

let planet = {
  move() {
    console.log("The planet is revolving around the Sun")
  },
};

for (let item of [cat, planet]) {
  item.move();
}
*/

class Plant {
  photosynthesize() {
    console.log(`This ${this.constructor.name} is photosynthesizing`)
  }
};

class Tree extends Plant {};
class Flower extends Plant {};
class Grass extends Plant {};

let tree = new Tree();
tree.photosynthesize();

let flower = new Flower();
flower.photosynthesize();

let grass = new Grass();
grass.photosynthesize();