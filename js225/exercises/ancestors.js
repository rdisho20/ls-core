Object.prototype.ancestors = function() {
  const ancestorsArray = [];
  let current = Object.getPrototypeOf(this);

  while (current !== null) {
    ancestorsArray.push(current);
    current = Object.getPrototypeOf(current);
  }

  return ancestorsArray.map(prototype => {
    const name = prototype.name;

    if (name === undefined) {
      return prototype.constructor.name + '.prototype';
    }

    return name;
  });
};

const foo = {name: 'foo'};
const proto = Object.getPrototypeOf(foo);

const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());
console.log(baz.ancestors());
console.log(bar.ancestors());
console.log(foo.ancestors());