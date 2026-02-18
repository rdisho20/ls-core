/*
let greeter = {
  morning: function() {
    console.log('Good morning!');
  },
};

function evening() {
  console.log('Good evening!');
}

let functionGreeter = greeter.morning;

functionGreeter();
*/

let counter = {
  count: 0,
  advance() {
    this.count += 1;
  }
};

console.log(counter);
counter.advance();
console.log(counter);

counter.advance();
counter.advance();

console.log(counter);