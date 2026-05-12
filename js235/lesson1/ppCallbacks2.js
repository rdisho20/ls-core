/*
// 1
function basicCallback(callback, n) {
  setTimeout(() => {
    callback(n);
  }, 2000);
}

basicCallback(number => {
  console.log(number * 2);
}, 5);
// After 2 seconds, logs: 10
*/

/*
// 2
function downloadFile(callback) {
  console.log("Downloading file...");
  setTimeout(() => {
    callback("Download complete!");
  }, 1500);
}
*/

/*
// 3
function processData(numbers, callback) {
  setTimeout(() => {
    const newNumbers = numbers.map(num => {
      return callback(num);
    });
    console.log(newNumbers);
  }, 1000)
}

processData([1, 2, 3], (number) => number * 2);
*/

/*
// 4
function waterfallOverCallbacks(callbacks, initValue) {
  //callbacks.forEach(callback => console.log(callback(2)))

  let result = callbacks.reduce((accum, callback) => {
    return callback(accum);
  }, initValue);
  console.log(result);
}

// Example usage:
const double = (x) => x * 2;
waterfallOverCallbacks([double, double, double], 1);
// Logs: 8
*/



// 5
function startCounter(callback) {
  let count = 0;
  let intId = setInterval(() => {
    count += 1;
    if (callback(count)) {
      clearInterval(intId);
    }
  }, 1000);
}

// Example usage:
startCounter((count, intervalId) => {
  console.log(count);
  return count === 5;
});
// Logs 1, 2, 3, 4, 5, then stops
