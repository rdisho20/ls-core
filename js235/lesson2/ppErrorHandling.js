// 1
/*
function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) resolve("Operation successful");
    else reject("Operation failed");
  })
}

flakyService().then(console.log).catch(console.error);
*/

/*
// 2
function operation() {
  return new Promise((resolve) => {
    console.log("Operation started");
    setTimeout(() => {
      resolve("Operation complete");
    }, 1000);
  });
}

operation()
  .then(console.log)
  .finally(() => {
    console.log("Cleaning up resources...");
  });
*/

/*
// 3
function increment(number) {
  return new Promise (resolve => {
    resolve((number * 2) + 5);
  })
}

function incrementPromise(number) {
  return new Promise(resolve => {
    resolve(number);
  })
}

incrementPromise(2)
  .then(increment) // 9
  .then(increment) // 23
  .then(increment) // 51
  .then(number => console.log(number)) // logs 51
*/


// 4
/*
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject({ error: "User not found" }), 500);
  });
}

fetchUserData()
  .catch(({ error }) => {
    console.log('Handling error:', error);
  })
  .finally(() => console.log("Fetching complete"));
*/


// 5
/* DEEPLY NESTED solution
function retryOperation(operationFunc) {
  function attempt() {
    return operationFunc();
  }

  attempt()
    .then(console.log)
    .catch(error => {
      attempt()
        .then(console.log)
        .catch(error => {
          attempt()
            .then(console.log)
            .catch(error => console.error(error.message));
        });
    })
}
*/

/* CLEAN solution
function retryOperation(operationFunc) {
  let attempts = 0;

  function attempt() {
    attempts += 1;

    return operationFunc()
      .catch(error => {
        if (attempts === 3) {
          throw error;
        }

        return attempt();
      })
  }

  return attempt()
    .then(console.log)
    .catch(error => console.log("Operation failed"))
}


retryOperation(
  () =>
    new Promise((resolve, reject) =>
      Math.random() > 0.33
        ? resolve("Success")
        : reject(new Error("Fail!"))
    )
);
*/

/*
// 6
function mockAsyncOp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Op succeeded");
      } else {
        reject("Op failed");
      }
    }, 1000)
  });
}

mockAsyncOp()
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    console.log("Op attempted");
  });
*/


// 7


