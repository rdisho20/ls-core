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

const email = "momo@whoah.com";

checkIfEmailExists(email)
  .then((email) => {
    return storeUserDetails(email);
  })
  .then((email) => {
    return sendVerificationEmail(email)
  })
  .then(() => console.log('...complete'));