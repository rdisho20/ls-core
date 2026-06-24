const result = new Promise(resolve => {
  resolve(7);
})

result
  .then(n => n * 2)
  .then(n => n + 5)
  .then(console.log)