/*
const fetchData = (data, delay) =>
  new Promise((resolve, reject) => setTimeout(() => {
    if (data === 'foo') {
      console.log(`Rejected promise with data: ${data}`);
      reject(`Fetching failed.`);
    } else {
      console.log(`Resolved promise with data: ${data}`);
      resolve(data);
    }
  }, delay));

const promise1 = fetchData('foo', 1500);
const promise2 = fetchData(42, 500);
const promise3 = fetchData('Hello, world!', 2300);

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(`Promise.all succeeded: ${values}`);
  })
  .catch(error => {
    console.log(`Promise.all failed: ${error}`);
  });
  */


/*
let promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "rejected!");
});

Promise.race([promise1, promise2])
  .then((value) => { console.log(value) })
  .catch((error) => { console.error(error) });
*/

/*
let promise1 = Promise.resolve(3);
let promise2 = new Promise((resolve, reject) => setTimeout(reject, 1000, "foo"));
let promises = [promise1, promise2];

Promise.allSettled(promises)
  .then(results => {
    console.log(results);
  });
*/


let promise1 = Promise.reject(0);
let promise2 = new Promise(resolve => setTimeout(resolve, 1000, "quick"));
let promise3 = new Promise(resolve => setTimeout(resolve, 5000, "slow"));
let promises = [promise1, promise2, promise3];

Promise.any(promises).then(value => console.log(value));

