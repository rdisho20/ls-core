/*
// Problem 5
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let munstersDescription = "The Munsters are creepy and spooky.";
let result = '';

for (let char of munstersDescription) {
  if (UPPER.includes(char)) {
    result += char.toLowerCase();
  } else {
    result += char.toUpperCase();
  }
}

console.log(result);
*/

/*
// 6
const userSettings = {
  colorScheme: "dark",
  notifications: ["email", "push"],
};

Object.freeze(userSettings);

// Another developer tries to mutate the object and its nested array
userSettings.colorScheme = "light";
userSettings.notifications.push("sms");
console.log(userSettings);
*/


/*
// 8
let userProfile = {
  name: 'Alex',
  email: '[alex@example.com](mailto:alex@example.com)',
};

Write code to perform the following three operations on the `userProfile` object:
1.  Add a new property `age` with a value of `30`.  
2.  Update the `email` property to `[alex.doe@example.com](mailto:alex.doe@example.com)`.  
3.  Add a new property named `"is admin"` with a boolean value of `false`.

userProfile.age = 30;
userProfile.email = '[alex.doe@example.com](mailto:alex.doe@example.com)';
userProfile['is admin'] = false;

console.log(userProfile);
*/


