/*
function getDefiningObject(object, propKey) {
  if (object === Object.prototype) return Object.getPrototypeOf(object);

  if (object.hasOwnProperty(propKey)) return object;
  else {
    let prototype = Object.getPrototypeOf(object);

    return getDefiningObject(prototype, propKey);
  }
}

let foo = {
  a: 1, b: 2,
};

let bar = Object.create(foo);
let baz = Object.create(bar);
let qux = Object.create(baz);

bar.c = 3;

console.log(getDefiningObject(qux, 'c') === bar);
console.log(getDefiningObject(qux, 'e')); // null
*/

/*
function shallowCopy(object) {
  const newObj = Object.create(Object.getPrototypeOf(object));

  Object.entries(object).forEach(entry => {
    newObj[entry[0]] = entry[1];
  });

  return newObj;
}

let foo = {
  a: 1, b: 2,
};

let bar = Object.create(foo);
bar.c = 3;
bar.say = function() {
  console.log('c is ' + this.c);
};

let baz = shallowCopy(bar);
console.log(baz.a);
baz.say();
console.log(baz.hasOwnProperty('a'));
console.log(baz.hasOwnProperty('b'));
console.log(baz.hasOwnProperty('c'));
*/


function extend(...destination) {
  if (destination.length === 1) {
    return destination[0];
  }

  const [ obj, ...values ] = destination;

  values.forEach(value => {
    for (let entry of Object.keys(value)) {
      obj[entry] = value[entry];
    }
  })

  return obj;
}

let foo = {
  a: 0, b: {
    x: 1, y: 2,
  },
};

let joe = {
  name: 'Joe',
}

let funcs = {
  sayHello() {
    console.log('Hello, ' + this.name);
  },

  sayGoodBye() {
    console.log('Goodbye, ' + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x);
object.sayHello();

