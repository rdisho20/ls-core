/*let myVar = 1;

function myFunc() {
  myVar = 2;
}

myFunc();
console.log(myVar);*/


function capitalize() {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim() {
  return word += "!!!";
}

let word = "hello";
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);