console.log(
  [1, 6, 3, 2].reduce(
    (accum, current) => {
      if (accum <= current) {
        accum = current
      }
      return accum
    }, 0
  )
);

console.log(
  [-1, -6, -3, -2].reduce(
    (accum, current) => {
      if (accum <= current) {
        accum = current
      }
      console.log(accum);
      return accum
    }
  )
);

console.log(
  [2, 2].reduce(
    (accum, current) => {
      if (accum <= current) {
        accum = current
      }
      return accum
    }, 0
  )
);