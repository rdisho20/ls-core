function newPerson(name) {
  let obj = { name };

  Object.defineProperties(obj, {
    log: {
      value: function() {
        console.log(name);
      },
      writable: false,
    }
  });

  return obj;
}

let me = newPerson('Shane Riley');

console.log(me);
me.log();
me.log = function() { console.log('Amanda Rose') };
me.log();