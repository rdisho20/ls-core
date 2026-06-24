function retryOperation(operationFunc) {
  const result = operationFunc
  let attempts = 0;

}

retryOperation(() =>
  new Promise((resolve, reject) =>
    Math.random() > 0.33
    ? resolve("Success!")
    : reject(new Error("Fail!"))
  )
);


document.getElementById('unordered-list').addEventListener((e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.textDecoration = 'strikethrough';
  }
})