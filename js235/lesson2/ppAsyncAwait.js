/*
function downloadFile(callback) {
  console.log("Downloading file...");
  setTimeout(() => {
    callback("Download complete!");
  }, 1500);
}

function downloadFilePromise() {
  return new Promise((resolve) => {
    console.log("Downloading file...");
    setTimeout(() => {
      resolve("Download complete!");
    }, 1500);
  });
}
*/

/*
// 1
async function asyncDownloadFile() {
  console.log("Downloading file...");
  const message = await new Promise(resolve => {
    setTimeout(() => {
      resolve("Download complete!");
    }, 1500);
  });
  console.log(message);
}

asyncDownloadFile();
*/

/*
// 2a
async function processNTimes(numbers, callback, n) {
  let intervalId;
  let count = 0;
  let promise = await new Promise(resolve => {
    intervalId = setInterval(() => {
      numbers = numbers.map(callback);
      count += 1;
      if (count === n) {
        clearInterval(intervalId);
        resolve(numbers);
      }
    }, n);
  })
  console.log(numbers);
}
*/

/*
// 2b
function processDataPromise(numbers, callback) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const processed = numbers.map(callback);
      resolve(processed);
    }, 1000);
  });
}

async function processNTimes(numbers, callback, n) {
  for (let i = 0; i < n; i++) {
    numbers = await processDataPromise(numbers, callback);
  }

  console.log(numbers);
}

const squareIt = (n) => n * n;
processNTimes([1, 2, 3], squareIt, 3);
// After 3 seconds, logs: [1, 256, 6561]
*/



// 3
async function prepareCoffee() {
  console.log('Starting coffee pot...');

  await new Promise((resolve) => setTimeout(resolve, 6000));

  console.log('Coffee ready!');
}

async function getReady() {
  console.log("Good morning!");
  // prepareCoffee();

  await new Promise(resolve => {
    console.log("Petting cat...")
    setTimeout(resolve, 5000);
  })

  await new Promise(resolve => {
    console.log("Getting dressed...")
    setTimeout(resolve, 3000);
  })

  await new Promise(resolve => {
    console.log("Brushing teeth...")
    setTimeout(resolve, 2000);
  })

  console.log("I'm ready!");
}

prepareCoffee();
getReady();