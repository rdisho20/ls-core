/*
let turk = {
  firstName: 'Christopher', lastName: 'Turk', occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};

function logReturnVal(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk);

let getTurkDescription = turk.getDescription.bind(turk);
console.log(getTurkDescription());

undefined undefined is a undefined

turk.getDescription executed in the context of logReturnVal, which is in context of main object,
which does not have properties for firstName, lastName & occuption, therefore we get the above output.
*/

/*
let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames() {
    let self = this;
    this.titles.forEach(function(title) {
      console.log(self.seriesTitle + ' ' + title);
    });
  }
};

TESgames.listGames();
*/

/*
let foo = {
  a: 0,
  incrementA() {
    function increment() {
      this.a += 1;
    }

    increment.call(this);
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);
*/

/*
let foo = {
  a: 0,
  incrementA() {
    let increment = function() {
      this.a += 1;
    }.bind(this);

    increment();
    increment();
    increment();
  }
};

foo.incrementA();
console.log(foo.a);
*/

/*
function multiply(number) {
  'use strict';
  console.log('this:', this);
  return this * number;
}

const double = multiply.bind(2);
console.log(double(3));
console.log();
console.log(double(10));
*/

/*
function foo() {
  console.log(this.a);
}

let a = 2;
foo();
*/

/*
let myObject = {
  count: 1,
  myChildObject: {
    myMethod() {
      return this.count;
    },
  },
};

console.log(myObject.myChildObject.myMethod.call(myObject));
*/


let computer = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    let self = this;
    function specialDiscount() {
      if (self.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount();
  },
};

console.log(computer.total());
