function partial(fn, ...initial) {
  return function(...additionalArgs) {
    const args = initial.concat(additionalArgs);
    return fn(...args);
  }
}

// Example Usage
function add(a, b, c) {
  return a + b + c;
}

let add5 = partial(add, 5);
console.log(add5(10, 15)); // => 30

let add5and10 = partial(add, 5, 10);
console.log(add5and10(15)); // => 30