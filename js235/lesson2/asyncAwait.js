/*
async function fetchData() {
  return "data from server";
}

// above syntax sugar for below
function fetchData() {
  return new Promise(resolve => {
    resolve("data from server");
  })
}


//console.log(fetchData());

//fetchData().then(data => console.log(data))

async function fetchAndLogData() {
  console.log("Fetching data...");
  let data = await fetchData();
  console.log(`Data received: ${data}`);
}

fetchAndLogData();
*/

/*
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 2000);
  })
}

async function fetchAndLogData() {
  console.log("Fetching data...");
  let data = await fetchData();
  console.log(`Data received: ${data}`);
}

console.log("Invoking async function...");
fetchAndLogData();
console.log("Our async function is non-blocking...");
*/

/*
async function example() {
  let value = await 42;
  console.log(value);
}

example();
*/

/*
async function greet(name) {
  console.log("Hello", name);
  setTimeout(() => {
    console.log("Bye again?");
  }, 0);
  await console.log("Can you hear me?");
  console.log("Bye now, ", name);
}

greet("Tom");
greet("Ariana");
*/

function checkIfEmailExists(data) {
  console.log("Checking if email exists...");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

function storeUserDetails(data) {
  console.log('Storing user details...');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

function sendVerificationEmail(data) {
  console.log('Sending verification email...');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

async function signUpUser(email) {
  let userExists = await checkIfEmailExists(email);
  let userDetails = await storeUserDetails(userExists);
  await sendVerificationEmail(userDetails);

  console.log("User signup process completed!");
}

let email = "example@email.com";
signUpUser(email);

