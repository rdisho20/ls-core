/*
function getStatus() {
  const rand = Math.random();

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rand > 0.4) resolve(200);
      else if (rand > 0.2) reject(404);
      else reject(500);
    }, 2000);
  });
}

const statusPromise = getStatus();

statusPromise
  .then(successCode => console.log(`Success! Status code: ${successCode}`))
  .catch(failureCode => console.log(`Failed. Status code: ${failureCode}`));

*/

/*
const promise = new Promise((resolve, reject) => {
  throw new Error("Oops!");
});

promise
  .then((result) => {
    // no run
  })
  .catch((error) => {
    console.log("Caught an error:", error.message);
  });

setTimeout(() => {
  console.log('continues running?');
}, 1000)
*/

function getStatus() {
  const rand = Math.random();

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rand > 0.4) resolve(200);
      else if (rand > 0.2) reject(404);
      else reject(500);
    }, 2000);
  });
}

const statusPromise = getStatus();

statusPromise
  .then(successCode => console.log(`Success! Status code: ${successCode}`))
  .catch(failureCode => console.log(`Failed. Status code: ${failureCode}`))
  .finally(() => console.log('All settled!'));