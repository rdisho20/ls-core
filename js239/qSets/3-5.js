let requestCounter = 0;
function unreliableRequest(data, callback) {
  requestCounter++;
  console.log(`Attempt #${requestCounter}: Sending request...`);
  setTimeout(() => {
    // Fail the first 2 times, succeed on the 3rd
    if (requestCounter < 3) {
      callback("Error: Network connection timed out", null);
    } else {
      callback(null, "Successfully received data!");
    }
  }, 500);
}

function retryNTimes(fn, n, callback, ...args) {
  attempts
}