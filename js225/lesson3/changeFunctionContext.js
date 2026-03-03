/*
let temperatures = [53, 86, 12, 43];

function average() {
  let total = 0;
  let i;
  for (i = this.length - 1; i >= 0; i -= 1) {
    total += this[i];
  }

  return total / this.length;
}

// console.log(average.bind(temperatures)()); // 48.5

temperatures.average = average;
console.log(temperatures.average());

*/

/*
let obj = {
  message: 'JavaScript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj)();
*/

/*
let obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj);

console.log(bar());
*/

let obj = {
  a: 'hello',
  b: 'world',
  foo() {
    console.log(this.a + ' ' + this.b);
  }
};

obj.foo();
