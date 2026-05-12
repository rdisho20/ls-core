const users = {
  1234: { name: 'Aisha Patel', age: 29 },
  5678: { name: 'John Smith', age: 35 },
  9101: { name: 'Susan Green', age: 42 },
};

const passwords = {                             // WARNING: THIS IS NOT HOW
  Aisha: { password: 'password123', id: 1234 }, // PASSWORDS ARE STORED
  John: { password: 'secret', id: 5678 },
  Susan: { password: 'Green83', id: 9101 },
};

function authenticate(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 10% chance of an unknown server error
      if (Math.random() < 0.1) {
        reject(new Error('Something went wrong. Please try again later.'))
      }
  
      if (passwords[username] && passwords[username].password === password) {
        resolve(passwords[username].id)
      } else {
        reject(new Error('Invalid username or password'));
      }
    }, 1000);
  })
}

function fetchUserProfile(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 10% chance of an unknown server error
      if (Math.random() < 0.1) {
        reject(new Error('Something went wrong. Please try again later.'))
      }
  
      // Normal behavior: check if user exists
      let userData = users[id];
      if (userData) {
        resolve(userData);
      } else {
        reject(new Error('User not found'));
      }
    }, 2000);
  })
}


/* DOCUMENTATION
function fetchUserProfile(id: number | string)

Fetches the profile of a user based on their unique identifier.

Parameters:

- id (Number or String): The user's unique identifier.

Returns a Promise

Promise Behavior Based on Conditions
CONDITION	        REJECT	                                                      RESOLVE
User found	      -	                                                            Object containing name and age keys. E.g.: { name: 'Aisha Patel', age: 29 }
User not found	  new Error 'User not found'	                                  -
Server error	    new Error 'Something went wrong. Please try again later.'	    -


----------


function authenticate(username: string, password: string)

Authenticates a user by verifying their username and password.

Parameters:

- username (String): The username of the user attempting to authenticate.
- password (String): The password provided by the user.

Returns a Promise

Promise Behavior Based on Conditions
CONDITION	                      REJECT	                                                      RESOLVE
Authentication successful	      -	                                                            User's ID (Number)
Invalid username or password	  new Error 'Invalid username or password'	                    -
Server error	                  new Error 'Something went wrong. Please try again later.'	    -
*/