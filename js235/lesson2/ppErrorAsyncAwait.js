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

/*
async function callFlakyService() {
  try {
    let result = await flakyService();
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

callFlakyService();
*/

/*
// 2
function operation() {
  return new Promise(resolve => {
    console.log("Operation started");
    setTimeout(() => {
      resolve("Operation complete");
    }, 1000);
  });
}

async function useOperation() {
  try {
    let data = await operation();
    console.log(data);
  } finally {
    console.log("Cleaning up resources...");
  }
}

useOperation();
*/

/*
// 3
async function retryOperation(operationFunc) {
  let attempts = 0;

  async function attempt() {
    try {
      return await operationFunc();
    } catch (err) {
      if (attempts < 2) {
        attempts++;
        console.log(`Retry attempt #${attempts}`);
        return attempt();
      } else {
        throw err;
      }
    }
  }

  try {
    console.log(await attempt());
  } catch {
    console.error("Operation failed");
  }
}

retryOperation(flakyService); // Example using `flakyService`
*/


async function asyncLoadData() {
  try {
    let results = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Data loaded");
        } else {
          reject("Network error");
        }
      }, 1000);
    })
    return results;
  } catch (error) {
    console.error("An error occurred. Attempting to recover...");
    // Return a recovery promise
    return "Using cached data";
  }
}

async function processData() {
  console.log(await asyncLoadData());
}

processData();