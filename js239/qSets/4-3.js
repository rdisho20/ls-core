function flakyService() {
  return new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.999;
    setTimeout(() => {
      if (isSuccess) {
        resolve("Operation successful");
      } else {
        reject("Operation failed");
      }
    }, 1000);
  });
}

const services = [flakyService(), flakyService(), flakyService()];

Promise.any(services)
  .then(value => console.log("First successful service resut:", value))
  .catch(error => console.log("All services failed:", error));
