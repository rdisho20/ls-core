/*
function processData(numbers, callback) {
  setTimeout(() => {
    const processed = numbers.map(callback);
    console.log(processed);
  }, 1000);
}

processData([1, 2, 3], (number) => number * 2);
*/

function processDataPromise(numbers, callback) {
  return new Promise(resolve => {
    setTimeout(() => {
      const processed = numbers.map(callback);
      resolve(processed);
    }, 2000)
  })
}

processDataPromise([1, 2, 3], (number) => number * 2)
  .then(console.log);
  