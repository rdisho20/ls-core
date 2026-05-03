// 1
/*
function washLaundry(afterLaundry) {
  console.log("Putting clothes in wash.");
  console.log("Adding soap.");

  console.log("Washing laundry..."); // This, along with `setTimeout`
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Buzz!");
      resolve();
    }, 5000);
  });
}

function bakeCookies() {
  console.log("Mixing ingredients.");
  console.log("Scooping cookie dough.");
  console.log("Putting cookies in oven.");
  
  console.log("Baking...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Beep!");
      resolve();
    }, 3000);
  });
}

function doChores() {
  console.log("Starting the chores...");

  washLaundry().then(() => {                // Callback will only be invoked
    console.log("Folding Laundry.");       // *after* the washing has completed
    console.log("Putting away Laundry.");
  });

  bakeCookies().then(() => {                // Callback will only be invoked
    console.log("Cooling cookies.");       // *after* the cookies are baked
    console.log("Eating cookies.");
  });
}

doChores();
*/


// 3
/*
function downloadFilePromise() {
  console.log("Download file...");
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Download complete!");
    }, 1500)
  })
}
*/

// 4
function processDataPromise(numbers, callback) {
  return new Promise(resolve => {
    setTimeout(() => {
      const processed = numbers.map(callback);
      resolve(processed);
    }, 1000)
  });
}

processDataPromise([1, 2, 3], (number) => number * 2)
  .then((processedNumbers) => console.log('1 second passed, created array, passed result to resolve, then logged it', processedNumbers));

