
/*//
•   ​Difficulty​: Intermediate
•   ​Context​: Deeply nested callbacks, often called "callback hell," can make asynchronous code difficult to read and maintain. The async/await syntax provides a much cleaner way to handle sequential asynchronous operations.

•   ​Problem Statement​: Refactor the following fetchUserData function, which uses nested callbacks, into a new function fetchUserDataAsync that uses async/await and try...catch for error handling.

The new function should achieve the same result and handle errors gracefully.
*/

// Mock API functions (do not change)
const fetchUser = (userId, callback) => {
  setTimeout(() => {
    console.log(`Fetching user ${userId}...`);
    const users = { 1: { name: 'Alice' }, 2: { name: 'Bob' } };
    const user = users[userId];
    if (user) {
      callback(null, user);
    } else {
      callback(new Error('User not found'));
    }
  }, 1000);
};

const fetchPosts = (user, callback) => {
  setTimeout(() => {
    console.log(`Fetching posts for ${user.name}...`);
    const posts = { 'Alice': [{ id: 1, title: 'Hello World' }] };
    const userPosts = posts[user.name];
    if (userPosts) {
      callback(null, userPosts);
    } else {
      callback(new Error('Posts not found'));
    }
  }, 1000);
};

// Function to refactor
function fetchUserData(userId) {
  fetchUser(userId, (error, user) => {
    if (error) {
      console.error(error.message);
    } else {
      fetchPosts(user, (error, posts) => {
        if (error) {
          console.error(error.message);
        } else {
          console.log(`${user.name}'s posts:`, posts);
        }
      });
    }
  });
}

function fetchUserDataAsync(userId){
 
}
function fetchUserPromise(userId) {
  return new Promise((resolve, reject) => {
    fetchUser(userId, (error, user) => {
      if (error) {
        reject(error);
      } else {
        resolve(user);
      }
    });
  });
}


/*
That's a sharp observation. You don't modify the original API functions. Instead, you wrap them in new functions that return Promises. This pattern is often called "promisifying".

Inside your new function, you create a new Promise and call the original callback-based function. The callback you provide will then either resolve or reject the promise based on the result.

Here’s how you could wrap fetchUser:

function fetchUserPromise(userId) {
  return new Promise((resolve, reject) => {
    fetchUser(userId, (error, user) => {
      if (error) {
        reject(error);
      } else {
        resolve(user);
      }
    });
  });
}


You can then await fetchUserPromise(userId) inside your async function.
*/