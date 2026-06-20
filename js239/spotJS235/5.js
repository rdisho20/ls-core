function delayMessage(msg, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(msg);
    }, delay);
  })
}

delayMessage('Sup dawg?', 2000)
  .then(console.log);