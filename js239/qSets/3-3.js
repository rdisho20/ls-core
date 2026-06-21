function startCounter(callback) {
  let counter = 1;
  let stop;
  let intId;

  intId = setInterval(() => {
    stop = callback(counter);
    counter += 1;
    if (stop) {
      clearInterval(intId);
    }
  }, 1000);
}

// Example usage:
startCounter((count) => {
  console.log(count);
  return count === 5; // The condition to stop the counter
});
// Logs 1, 2, 3, 4, 5, then stops


/* LSBot solution

function startCounter(callback) {
  let counter = 0;
  const intervalId = setInterval(() => {
    counter += 1;
    if (callback(counter)) {
      clearInterval(intervalId);
    }
  }, 1000);
}

*/