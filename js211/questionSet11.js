/*
// 1
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  occupation: 'Software Engineer',
};

const createModernGreeting = (person) => `Hello, my name is \
${person.firstName} ${person.lastName}. I am ${person.age} years old \
and work as a ${person.occupation}.`;


// Your refactored function should be here

console.log(createModernGreeting(person));
// Expected Output:
// Hello, my name is John Doe. I am 30 years old and work as a Software Engineer.
*/


/*
// 3
const batch1 = [101, 102, 103];
const batch2 = [104, 105, 106];

const userProfile = {
  id: 'user-123',
  username: 'js_master',
  lastLogin: '2023-01-01',
};


const allProductIds = [...batch1, ...batch2];

const updatedUserProfile = { ...userProfile };

updatedUserProfile.lastLogin = '2023-01-02';
updatedUserProfile.isActive = true;

console.log(allProductIds);  
// Expected Output:  
// [101, 102, 103, 104, 105, 106]  
  
console.log(updatedUserProfile);  
// Expected Output:  
// {  
//   id: 'user-123',  
//   username: 'js_master',  
//   lastLogin: '2023-01-02',  
//   isActive: true  
// }  
  
console.log(userProfile); // Verify original object is not mutated  
// Expected Output:  
// { id: 'user-123', username: 'js_master', lastLogin: '2023-01-01' }
*/
'use strict';

const NaN = 'what?';

console.log(NaN);