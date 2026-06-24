function retryOperation(operationFunc) {
  return Promise.allSettled
}

retryOperation(() => {
  return new Promise((resolve, reject) => {
    return Math.random() > 0.33 ? resolve("Success!") : reject(new Error("Fail!"));
  })
})