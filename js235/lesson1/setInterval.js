// 1, 2
/*
every time startCounting is called, increment it's closed over value?
*/

/*
let counterId;

function startCounting() {
  let count = 0;
  counterId = setInterval(() => {
    count += 1;
    console.log(count);
  }, 1000);
}

function stopCounting() {
  clearInterval(counterId);
}
*/


// 3
console.log('Starting...');

let interval = setInterval(() => console.log('Hello!'), 2000);

setTimeout(() => {
  clearInterval(interval);
  console.log('Goodbye!');
}, 10000);