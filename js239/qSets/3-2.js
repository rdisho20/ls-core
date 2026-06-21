function waterfallOverCallbacks(callbacks, init) {
  const result = callbacks.reduce((accum, callback, idx) => {
    if (idx === 0) {
      accum = callback(init);
    } else {
      accum = callback(accum);
    }

    return accum;
  }, init)

  console.log(result);
}

const double = (x) => x * 2;
waterfallOverCallbacks([double, double, double], 1);