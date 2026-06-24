const newPromise = new Promise((resolve, reject) => {
  if (Math.random() < .5) {
    resolve('Random number less than .5')
  } else {
    reject('Random number not less than .5')
  }
})

let result;

const id = setTimeout(() => {
  result = newPromise
    .then(value => value)
    .catch(value => value);
  
  setTimeout(() => {
    console.log('logged result', result);
  }, 0);
}, 1000);