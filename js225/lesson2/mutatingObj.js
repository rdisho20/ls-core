/*
let message = 'Hello from the global scope!';

function func(message) {
  message = 'Hello from the function scope!';
  console.log(message);
}

func(message);
console.log(message);
*/

/*
let myObj = { message: 'Greetings from the global scope!' };

function func(obj) {
  obj.message = 'Greetings from the function scope!';
  console.log(obj.message);
}

func(myObj);
console.log(myObj.message);
*/

/*
let message = 'Hello from the global scope!';

function func() {
  message = 'Hello form the function scope!';
  console.log(message);
}

func();
console.log(message);
*/

/*
let a = 10;
let obj = {a};

let newObj = obj;
newObj.a += 10;

console.log(obj.a === a); // false
console.log(newObj.a === obj.a); // true
*/

let animal = {
  name: 'Pumbaa',
  species: 'Phacochoerus africanus',
};

let menagerie = {
  warthog: animal,
};

animal = {
  name: 'Timon',
  species: 'Suricata suricatta',
};

menagerie.meerkat = animal;

console.log(menagerie.warthog === animal);
console.log(menagerie.meerkat === animal);

console.log(menagerie.warthog);