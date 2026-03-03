/*
let cocoa = {
  name: 'Cocoa', color: 'black', age: 5,

  speak() {
    console.log(
      `Meow. I am ${this.name}. ` +
      `I am a ${this.age}-year-old ${this.color} cat.`
    );
  },
}

let leo = {
  name: 'Leo', color: 'orange', age: 3,

  speak() {
    console.log(
      `Meow. I am ${this.name}. ` +
      `I am a ${this.age}-year-old ${this.color} cat.`
    );
  },
}
*/

/*
function createCat(name, color, age) {
  return {
    name, color, age,

    speak() {
      console.log(
        `Meow. I am ${this.name}. ` +
        `I am a ${this.age}-year-old ${this.color} cat.`
      );
    },
  };
}

const cocoa = createCat('Cocoa', 'black', 5);
const leo = createCat('Leo', 'orange', 3);

cocoa.speak();
leo.speak();
*/

/*
function createFruit(name, color) {
  return {
    name, color,

    isRipe() {
      return `This ${this.name} is ripe.`
    },

    describe() {
      return `This ${this.name} is ${this.color}.`
    }
  }
};
*/

/*
function smartPhone(brand, model, releaseYear) {
  return {
    brand, model, year: releaseYear, batteryLevel: 100,

    checkBatteryLevel() {
      return this.batteryLevel;
    },

    displayInfo() {
      return `${this.brand}, ${this.model}, ${this.year}`;
    }
  }
}

let iphone12 = smartPhone('Apple', 'iPhone 12', 2020);
let galaxyS21 = smartPhone('Samsung', 'Galaxy S21', 2021);

console.log(iphone12.checkBatteryLevel());
// Apple iPhone 12 has 75% battery remaining.

console.log(iphone12.displayInfo());
// 2020 Apple iPhone 12

console.log(galaxyS21.checkBatteryLevel());
// Samsung Galaxy S21 has 75% battery remaining.

console.log(galaxyS21.displayInfo());
// 2021 Samsung Galaxy S21
*/

function createInstrument(instrument, type) {
  return {
    instrument, type,

    play() {
      console.log(`We are playing a tune on this ${this.instrument}`);
    },

    showType() {
      console.log(`This ${this.instrument} is a ${this.type} instrument`);
    },
  };
}

let violin = createInstrument('violin', 'string');
violin.play();     // We are playing a tune on this violin
violin.showType(); // This violin is a string instrument

let flute = createInstrument('flute', 'wind');
flute.play();      // We are playing a tune on this flute
flute.showType();  // This flute is a wind instrument

let drum = createInstrument('drum', 'percussion');
drum.play();       // We are playing a tune on this drum
drum.showType();   // This drum is a percussion instrument