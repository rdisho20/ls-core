/*
Note: This is not how real servers work! We're pretending server.js is a server,
but it's actually running in the browser to make `fetchUserProfile` available.
This lets us practice the basics without the overhead of setting up a server.
*/

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

function authenticate(username, password, callback) {
  setTimeout(() => {
    // 10% chance of an unknown server error
    if (Math.random() < 0.1) {
      return callback('Something went wrong. Please try again later.', null);
    }

    if (passwords[username] && passwords[username].password === password) {
      callback(null, passwords[username].id);
    } else {
      callback('Invalid username or password', null);
    }
  }, 1000);
}

function fetchUserProfile(id, callback) {
  setTimeout(() => {
    // 10% chance of an unknown server error
    if (Math.random() < 0.1) {
      return callback('Something went wrong. Please try again later.', null);
    }

    // Normal behavior: check if user exists
    let userData = users[id];
    if (userData) {
      callback(null, userData);
    } else {
      callback('User not found', null);
    }
  }, 2000);
}

/*
HELPER should keep track of "number of attempts" and retry the call
(authentication() or fetchUserProfile()) a argument number of times
*/

function retryNTimes(fn, n, callback, ...args) {
  let attempts = 0;

  function attempt() {
    fn(...args, (error, data) => {
      if (!error || attempts >= n) {
        callback(error, data);
      } else {
        attempts += 1;
        attempt();
      }
    })
  }

  attempt();
}