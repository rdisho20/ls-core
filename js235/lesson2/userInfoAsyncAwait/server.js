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
        return reject(new Error('Something went wrong. Please try again later.'));
      }

      if (passwords[username] && passwords[username].password === password) {
        resolve(passwords[username].id);
      } else {
        reject(new Error('Invalid username or password'));
      }
    }, 1000);
  });
}

function fetchUserProfile(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 10% chance of an unknown server error
      if (Math.random() < 0.1) {
        return reject(new Error('Something went wrong. Please try again later.'));
      }

      // Normal behavior: check if user exists
      let userData = users[id];
      if (userData) {
        resolve(userData);
      } else {
        reject(new Error('User not found'));
      }
    }, 2000);
  });
}