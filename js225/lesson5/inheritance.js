/*
let foo = {
  hello() {
    return 'hello' + this.name;
  },
};

let bar = Object.create(foo);
bar.name = 'world';
bar.hello();
*/

/*
let dog = {
  say() {
    console.log(this.name + ' says Woof!');
  },

  run() {
    console.log(this.name + ' runs away.');
  },
};

let fido = Object.create(dog);
fido.name = 'Fido';
fido.say();
fido.run();

let spot = Object.create(dog);
spot.name = 'Spot';
spot.say();
spot.run();
*/

/*
let foo = {
  a: 1,
};

let bar = Object.create(foo);
bar.a = 1;
bar.b = 2;
bar.hasOwnProperty('a');
Object.getOwnPropertyNames(bar);

delete bar.a;
bar.hasOwnProperty('a');
Object.getOwnPropertyNames(bar);

bar.hasOwnProperty('c');
*/