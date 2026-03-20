/*
when `greeter.logMessage` is passed as the callback function, at execution
`greeter` is not used as the `logMessage` caller but the function object
passed is executed as a callback to `setTimeout` so `this` inside
the function property `logMessage` represents the global object in sloppy mode
and in strict mode is set to `undefined`.

In this case, our context is set to the global object and a property called
message is added to it and its value is set to `undefined`.  This is why we log
`undefined`

Revised code:
*/

/* Solution 1
const greeter = {
  message: 'Hello, world!',
  logMessage: function() {
    console.log(this.message);
  }
}

setTimeout(greeter.logMessage.bind(greeter), 1000);
*/

/* Solution 2
const greeter = {
  message: 'Hello, world!',
  logMessage: function() {
    console.log(this.message);
  }
}

setTimeout(() => {
  greeter.logMessage();
}, 1000);
*/

