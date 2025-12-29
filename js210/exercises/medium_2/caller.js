function makeDoubler(caller) {
  function doubler(number) {
    return number + number
  }
  console.log(`This function was called by ${caller}.`)

  return doubler;
}


const doubler = makeDoubler('Victor');
console.log(doubler(5));