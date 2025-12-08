/*
let names = ["Chris", "Kevin", "Naveed", "Pete", "Victor"];
let upperNames = [];
let index = 0;

while (index < names.length) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
  index += 1;
}

console.log(upperNames);
*/

let names = ["Chris", "Kevin", "Naveed", "Pete", "Victor"];
let upperNames = [];

for (let index = 0; index < names.length; index++) {
  let upperCaseName = names[index].toUpperCase();
  upperNames.push(upperCaseName);
}

console.log(upperNames);