// 1
/*
Functions are always hoisted first, then variable names.
We see at the creation phase, `var sum` overwrites `function sum`
becuase it is hoisted second then assigned the value `undefined` before
any code executes.  This is why when we try to invoke `sum` which is
a Number primitive value, we get a `TypeError`.

var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

sum += ((arr) => {
  return arr.reduce((sum, number) => {
    sum += number;
    return sum;
  }, 0);
})(numbers);

console.log(sum);
*/


// 2
/*
let fruitsObj = {
  title: 'A Collection of Fruit:',
  list: ['Apple', 'Banana', 'Grapefruit', 'Pineapple', 'Orange'],
}

function outputList() {
  console.log(this.title);
  let args = Array.prototype.slice.call(arguments);
  args.forEach(function(item) {
    console.log(item);
  })
}

outputList.apply(fruitsObj, fruitsObj.list);
*/


// 3
/*
function add(a, b) {
  return a + b;
}

let addTen = add.bind(null, 10);

console.log(addTen(5));
console.log(addTen(20));
*/


// 4
/*
let counter = (function makeCounter() {
  let count = 0;
  return {
    increment() {
      count += 1;
      console.log(count);
    }
  }
})();

counter.increment();
counter.increment();
console.log(counter.count);
*/


// 5
/*
The error will be a ReferenceError because when `getDescriptions` is called
we attempt to invoke the method of the same name that belongs to the `person` object
but `this` loses it's context because it is accessed while inside a nested function, for one.
The second reason is when `this` loses context, it resorts to the global scope
and our global Object doesn't have a property `firstName` so we immediately get a ReferenceError.

let turk = {
  firstName: 'Christopher', lastName: 'Turk', occupation: 'Surgeon',
  getDescription() {
    return `${this.firstName} ${this.lastName} is a ${this.occupation}.`;
  },
};

let people = [turk];

let getDescriptions = function(people) {
  people.forEach((function(person) {
    console.log(person.getDescription());
  }).bind(people))
}

getDescriptions(people);
*/


// 6
/*
function myBind(func, context, ...args) {
  return function() {
    return func.apply(context, args.concat(Array.prototype.slice.call(arguments)));
  }
}

function showDetails(specialty, town) {
  console.log(`${this.name} is a ${specialty} in ${town}.`);
}

let person = {name: 'Dr. Cox'};
let drCoxAsCardiologist = myBind(showDetails, person, 'Cardiologist');  
drCoxAsCardiologist('Sacred Heart'); // Expected: Dr. Cox is a Cardiologist in Sacred Heart.
*/






