/*
function makeMultipleListener(num) {
  return function() {
    for (let i = num; i < 100; i += num) {
      console.log(i);
    }
  }
}

let listener = makeMultipleListener(13);
listener();
*/


/*
function makeAdderSubtracter() {
  let total = 0;

  function add(number) {
    total += number;
    console.log(total);
  }

  function subtract(number) {
    total -= number;
    console.log(total);
  }

  return {
    add, subtract
  }
}

const { add, subtract } = makeAdderSubtracter();
add(1);
add(42);
subtract(39);
add(6);
*/


function startup() {
  let status = 'ready';
  return function() {
    console.log('The system is ready.');
  }
}

let ready = startup();
let systemStatus = this.status;
console.log(systemStatus);