// 1
/*
logged to console:
Launch School has 2 courses.
- JS101 has undefined students.
- JS225 has undefined students.

We log this output in sloppy mode, which isn't what we want, because in our `forEach` method
the context of `this` was never explicitly set to our `courses`'s value
which is the object context we need for `this`.

If we called the method in strict mode, `this.studentCount` would throw an error
on the first iteration, because `this` is set to `undefined`.

Revised code (nature of the intended output of the code wants a simple solution):

const school = {
  name: 'Launch School',
  courses: [
    { title: 'JS101', studentCount: 50 },
    { title: 'JS225', studentCount: 30 },
  ],
  printSummary() {
    console.log(`${this.name} has ${this.courses.length} courses.`);

    this.courses.forEach(function(course) {
      console.log(`- ${course.title} has ${course.studentCount} students.`);
    });
  },
};

school.printSummary();
*/

/*
const school = {
  name: 'Launch School',
  courses: [
    { title: 'JS101', studentCount: 50 },
    { title: 'JS225', studentCount: 30 },
  ],
  printSummary() {
    console.log(`${this.name} has ${this.courses.length} courses.`);
    const printCourse = function(course) {
      console.log(`- ${course.title} at ${this.name} has ${course.studentCount} students.`)
    };

    this.courses.forEach(printCourse.bind(this));
  },
};

school.printSummary();
*/


// 2
/*
function calculateArea() {
  return this.width * this.height;
}

const shape1 = {
  name: 'Small Rectangle',
  width: 5, height: 10,
};

const shape2 = {
  name: 'Large Rectangle',
  width: 25, height: 50,
};

const area1 = calculateArea.call(shape1);
const area2 = calculateArea.call(shape2);

console.log(`Area 1: ${area1}\nArea 2: ${area2}`);
*/


// 3
/*
This context loss occurs because the function object value is passed as an
argument and is essentially assigned to the variable `callback`, therefore
it has lost its context.  If `getDescription` was called w/
its original context object `turk` inside the `logDescription` function,
there would be no context loss.

const turk = {
  firstName: 'Christopher', lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return `${this.firstName} ${this.lastName} is a ${this.occupation}.`
  },
};

function logDescription(callback) {
  console.log(callback());
}

logDescription(turk.getDescription.bind(turk));
*/


// 4
/*
Logged to console:
Ryan
Global likes coding.
Global likes reading.

Reason why we get our output is because even though we called
forEach on the `this.hobbies` array object, `name` is 'Global' because
we lose context to `this` once inside the call back to `forEach`.

when we access `name` inside `printName`, we access it using the context object `this`
which is `person` and it is not inside a nested function so we don't lose context.
*/


// 5
/*
When `game.start()` is called, second message is not logged correctly because `this` loses
its context inside the callback inside our `setTimeout` function.

The output as it is would be:
Starting Guess the Number...
undefined has ended.

Revised code:

const game = {
  title: "Guess the Number",
  start() {
    console.log(`Starting ${this.title}...`);
    setTimeout(() => {
      console.log(`${this.title} has ended.`);
    }, 2000);
  }
}

game.start();
*/


// 6
/*
function update(main, ...others) {
  this.main = main;
  this.others = others;
}

const project = {
  name: "Project Phoenix",
  main: null,
  others: []
}

const newLanguages = ['JavaScript', 'Python', 'Go', 'Rust'];

update.apply(project, newLanguages);
console.log(project);
*/


// 7
/*
logged to console:
NaN

We get NaN because when we pass `calculator.add` as the callback to `runCalculation`
`this` loses its context inside `add` method. A a general rule, a callback passed to a
function will lose its context, unless it is an arrow function.  So when `calculator.add`
is called, `total` property is added to the global object and assigned value `undefined`
which is then added to value passed as the argument for parameter `num`.  In this case,
`undefined + 10` equals `NaN` because we coerced `undefined` to its number type
equivalent which is `NaN` and adding `NaN` to another number results in `NaN`.

Revised code:

const calculator = {
  total: 0,
  add(num) {
    this.total += num;
    return this;
  },
  subtract(num) {
    this.total -= num;
    return this;
  },
  logTotal() {
    console.log(this.total);
  }
}

function runCalculation(func) {
  func(10);
};

runCalculation(calculator.add.bind(calculator));
calculator.logTotal();
*/


// 8
/*
const greeter = {
  name: "Alice",
  message: "Hello",
  sayHello() {
    console.log(`${this.message}, ${this.name}!`);
  }
};

const anotherGreeter = {
  name: 'Bob', message: 'Hi',
}

let boundHello = greeter.sayHello.bind(greeter);
boundHello();
boundHello.call(anotherGreeter); // same output as above
*/








