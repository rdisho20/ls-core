const service1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Service 1 Complete"), 2000);
});
const service2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Service 2 Complete"), 3000);
});
const service3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Service 3 Failed"), 1000);
});

Promise.all([service1, service2, service3])
  .then(console.log)
  .catch(console.log);