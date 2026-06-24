function loadData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 1000)
  })
}

function timeoutPromise(promise, ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      promise
        .then(value => resolve(value))
        .catch(value => reject(value));
    }, ms)
  })
}

function timeoutPromise(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => {
        reject('Operation timed out');
      }, ms)
    })
  ])
}

/*
timeoutPromise(loadData(), 500)
  .then(console.log)
  .catch(console.error);
*/


timeoutPromise(loadData(), 2000)
  .then(console.log)
  .catch(console.error);
