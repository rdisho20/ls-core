/*
const myPromise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(7);
  }, 1000);
});

myPromise.then(result => {
  console.log(`answer = ${result}`)
})
*/

/*
const promise1: Promise<number> = new Promise(result => {
  setTimeout(() => {
    resolve(7);
  }, 1000)
});

const promise2: Promise<string> = new Promise(resolve => {
  setTimeout(() => {
    resolve(7)
  }, 1000)
}).then(result => {
  return `answer: ${result}`
});

const promise3: Promise<Array<boolean>> = new Promise(resolve => {
  setTimeout(() => {
    resolve(7);
  }, 1000)
})
  .then(result => {
    return `answer: ${result}`
  })
  .then(result => {
    return [true, false, false];
  });
*/

/*
async function retrieveString(): Promise<string> {
  const stringPromise: Promise<string> = new Promise(result => {
    setTimeout(() => resolve("Launch School"), 1000)
  });
  const stringResult: string = await stringPromise;
  return stringResult;
}
*/

function getdata(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));
}

async function getData(url: string): Promise<void> {
  const response: Response = await fetch(url);
  const data = await response.json();
  console.log(data);
}