function loadData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 1000);  // simulated 1-second network request
  })
}

function timeoutPromise(promise, ms) {
  const timeout = new Promise((_, reject) => {
    setTimeout(() => {
      reject('Operation timed out');
    }, ms)
  })
  
  return Promise.race([promise, timeout])
}


timeoutPromise(loadData(), 2000)
  .then(console.log)
  .catch(console.error);


timeoutPromise(loadData(), 500)
  .then(console.log)
  .catch(console.error);