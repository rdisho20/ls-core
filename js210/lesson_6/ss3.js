function foo(one, two, three) {
  return {
    bar: one,
    baz: two,
    qux: three,
  };
}

let obj = {
  baz: 1,
  qux: 2,
  bar: 3,
}

foo(obj.baz, obj.qux, obj.bar);

/* Instead of:
let { baz, qux, bar } = foo(1, 2, 3);
*/