/*
'use strict';

function foo() {
  return this;
}

let context = foo();
console.log(context);
*/


/*
let obj = {
  foo() {
    return this;
  },
};

let context = obj.foo();

console.log(context); // calling obj method
console.log(obj.foo());

// ********************

let obj = {
  foo() {
    return this;
  },
};

let context = obj.foo;

console.log(context()); // calling foo @ global scope
console.log(obj.foo());
*/

/*
var message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

let bar = {
  message: 'Hello from the function scope',
}

bar.deliverMessage = deliverMessage;
bar.deliverMessage();
console.log(bar.message);
*/



let fruitsObj = {
  list: [
      'Apple', 'Banana', 'Grapefruit',
      'Pineapple', 'Orange',
  ],
  title: 'A Collection of Fruit',
};

function outputList() {
  console.log(this.title + ':');

  console.log(arguments);

  let args = [].slice.apply(arguments);

  args.forEach(elem => {
      console.log(elem);
  });
};

outputList.apply(fruitsObj, fruitsObj.list);

/*
// uses arguments object
[Arguments] {
  '0': 'Apple',
  '1': 'Banana',
  '2': 'Grapefruit',
  '3': 'Pineapple',
  '4': 'Orange'
}

*/