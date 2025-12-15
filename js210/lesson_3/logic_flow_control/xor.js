function isXor(arg1, arg2) {
  let args = [arg1, arg2];
  let state = false;

  for (let index = 0; index < args.length; index++) {
    if (!!args[index]) {
      if (state === true) {
        state = false;
        return state;
      }

      state = true;
    }
  }
  return state;
}

console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false

console.log('----');

console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false