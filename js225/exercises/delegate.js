function delegate(obj, methodName, ...args) {
  return function() {
    return obj[methodName].apply(obj, args);
  }
}

const foo = {
  name: 'test',
  bar(greeting) {
    console.log(`${greeting} ${this.name}`);
  },
};

const baz = {
  qux: delegate(foo, 'bar', 'hello', 'Mr', 'Mrs'),
};


baz.qux(); // 'hello test'

foo.bar = () => { console.log('changed'); };

baz.qux(); // 'changed'



