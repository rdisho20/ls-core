/*
function Country(name, traveled) {  
  this.name = name ? name : 'United Kingdom';
  this.traveled = Boolean(traveled); // transform to a boolean
}

Country.prototype.travel = function() {  
 this.traveled = true;
};

// Constructor invocation
var france = new Country('France', false);  
// Constructor invocation
var unitedKingdom = new Country;

france.travel(); // Travel to France  
console.log(france);
console.log(unitedKingdom);

console.log(Country.prototype);
*/

/*
function Person(firstName, lastName='') {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function() {
    return (this.firstName + ' ' + this.lastName).trim();
  };
}

console.log(new Person('John', 'Doe'));
*/

/*
var rabbit = { name: 'White Rabbit' };  
function concatName(string) {  
  console.log(this === rabbit); // => true
  return string + this.name;
}
// Indirect invocations
concatName.call(rabbit, 'Hello ');  // => 'Hello White Rabbit'  
concatName.apply(rabbit, ['Bye ']); // => 'Bye White Rabbit'

let bound = concatName.bind(rabbit);

console.log(bound('yo '));
console.log(concatName('yo '));
*/

/*
function Lizard() {
  this.scamper = function() {
    console.log(this, "I'm scampering.");
  };
}

let lizzy = new Lizard();
lizzy.scamper();
*/
