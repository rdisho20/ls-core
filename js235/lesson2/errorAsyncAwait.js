/*
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = Math.random();
      if (data < 0.5) {
        resolve(data);
      } else {
        reject(new Error ("Something went wrong"));
      }
    }, 2000);
  });
}

async function fetchAndLogData() {
  try {
    console.log("Fetching data...");
    let data = await fetchData();
    console.log(`Data received: ${data}`);
  } catch (error) {
    console.log("Catching...");
    console.error(`Error: ${error.message}`);
  }
}

fetchAndLogData();
*/

/*
async function handleRiskyOperation() {
  try {
    return await riskyOperation();
  } catch (error) {
    if (error instanceof DataFetchError) {
      console.error("Failed to fetch data:", error.message);
    } else if (error instanceof AuthorizationError) {
      console.error("Authorization failed:", error.message);
    } else {
      console.error("Unknown error:", error.message);
    }
  }
}
*/

async function withCleanup() {
  let resource;
  try {
    resource = await getResource();
    return await useResource(resource);
  } catch (error) {
    console.error("Error using resource:", error.message);
  } finally {
    if (resource) {
      await releaseResource(resource);
    }
  }
}