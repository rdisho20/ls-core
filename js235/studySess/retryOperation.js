/* Implement a function retryOperation that attempts to perform an operation by calling a provided function, operationFunc.
If operationFunc throws an error, retryOperation should retry the operation up to two additional times before giving up and logging "Operation failed".
*/

/* we are doing 4 additional tries here
let retries = 3;
function retryOperation(operationFunc){
  operationFunc()
    .then(result => console.log(result))
    .catch(error => {
      if(retries > 0){
        retryOperation(operationFunc)
        retries--;
      } else {
        console.log("Operation failed.")
      }
    })
}
*/

// cleaner version from chatGPT
let retries = 2;
function retryOperation(operationFunc) {
  operationFunc()
    .then(result => console.log(result))
    .catch(error => {
      if (retries > 0) {
        retries--;
        retryOperation(operationFunc);
      } else {
        console.log("Operation failed.");
      }
    });
}

// Each retry is a fresh async event-loop task; after each .catch() and each .then() call, the stack clears


// Example usage:
retryOperation(
  () =>
    new Promise((resolve, reject) =>
      Math.random() > 0.99
        ? resolve("Success!")
        : reject(new Error("Fail!"))
    )
);