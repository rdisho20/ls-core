const firstResource = new Promise((resolve) =>
  setTimeout(() => resolve("First resource loaded"), 500)
);

const secondResource = new Promise((resolve) =>
  setTimeout(() => resolve("Second resource loaded"), 1000)
);

const arr = [firstResource, secondResource];

Promise.race(arr)
  .then(console.log)
