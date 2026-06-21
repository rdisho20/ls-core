function processData(numbers, callback) {
  setTimeout(() => {
    numbers.map(callback);
    console.log(numbers);
  }, 1000)
}

processData([1, 2, 3], (number) => number * 2);