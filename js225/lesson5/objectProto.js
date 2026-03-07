/*
let foo = {
  a: 1, b: 2
}

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

Object.getPrototypeOf(qux) === baz;
Object.getPrototypeOf(baz) === bar;
Object.getPrototypeOf(bar) === foo;

foo.isPrototypeOf(qux);

console.log(foo.hasOwnProperty('a'));
*/

let prot = {};

let foo = Object.create(prot);

console.log(Object.__proto__);
console.log(prot.isPrototypeOf(foo));
