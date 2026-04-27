// 1
/*
function basicCallback(callback, number) {
  setTimeout(() => {
    callback(number);
  }, 2000);
}

basicCallback(number => {
  console.log(number * 2);
}, 5);
*/


// 2
/*
function downloadFile(callback) {
  console.log("Downloading file...");
  setTimeout(() => {
    callback("Download complete");
  }, 1500)
}
*/


// 3
/*
function processData(numbers, callback) {
  setTimeout(() => {
    console.log(numbers.map(callback));
  }, 1000);
}


processData([1, 2, 3], (number) => number * 2);
*/


// 4
/*
function waterfallOverCallbacks(callbacks, initValue) {
  let processed;
  processed = callbacks.reduce((result, func) => {
    return func(result);
  }, initValue);
  console.log(processed);
}

// Example usage:
const double = (x) => x * 2;
waterfallOverCallbacks([double, double, double], 1);
// Logs: 8
*/


// 5
function startCounter(callback) {
  let counter = 1;
  let intervalId = setInterval(() => {
    if (callback(counter)) {
      clearInterval(intervalId);
    }
    counter += 1;
  }, 1000);
}

startCounter((count) => {
  console.log(count);
  return count === 5;
})

