/*
const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

console.log(person === otherPerson);    // false -- expected: true
*/


const person = { name: 'Victor' };
const {...otherPerson} = person;

console.log(person === otherPerson);
console.log(person);
console.log(otherPerson);