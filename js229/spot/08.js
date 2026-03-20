/*
We use an arrow function expression instead of a function expression
to return the string value that references a context object and its properties.

Regarding arrow functions, their context is set depending
*/

function createUser(firstName, lastName) {
  let user = {
    firstName: firstName,
    lastName: lastName,
    getDisplayName: () => {
      return `${this.firstName} ${this.lastName}`;
    }
  };
  return user;
}

let user1 = createUser('John', 'Doe');
console.log(user1.getDisplayName());