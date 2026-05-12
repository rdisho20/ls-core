/*
// 1
function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data loaded");
      } else {
        reject("Network error");
      }
    }, 1000);
  });
}

Promise.all([flakyService(), flakyService(), loadData()])
  .then(results => { console.log(results) })
  .catch(() => { console.error("One or more operations failed") });
*/

/*
// 2
const firstResource = new Promise(resolve => {
  setTimeout(() => resolve("First resource loaded"), 500)
});

const secondResource = new Promise(resolve => {
  setTimeout(() => resolve("Second resource loaded"), 1000)
});

Promise.race([firstResource, secondResource])
  .then(value => { console.log(value) });
*/

/*
// 3
function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

const services = [flakyService(), flakyService(), flakyService()]

Promise.allSettled(services).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(
        `Service ${index + 1} succeeded with message: ${result.value}`
      );
    } else {
      console.error(
        `Service ${index + 1} failed with error: ${result.reason}`
      );
    }
  });
});
*/

/*
// 4
function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

const services = [flakyService(), flakyService(), flakyService()]

Promise.any(services)
  .then((result) => {
    console.log(`First successful service result: ${result}`);
  })
  .catch((error) => {
    console.error("All services failed:", error);
  });
*/


// 5 - correct w/o using Promise.race() however does not clear the timeout
function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve("Data loaded");
      } else {
        reject("Network error");
      }
    }, 1000);
  });
}

/*

function timeoutPromise(promise, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Operation timed out");
    }, ms);

    resolve(promise)
  })
}
*/

function timeoutPromise(promise, ms) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject("Operation timed out");
    }, ms)
  })

  return Promise.race([timeout, promise]);
}

timeoutPromise(loadData(), 500)
  .then(console.log)
  .catch(console.error);
